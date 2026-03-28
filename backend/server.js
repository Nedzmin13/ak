require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { Resend } = require('resend'); // Usiamo l'API ufficiale di Resend!

const app = express();
const port = process.env.PORT || 3001;

// Inizializza Resend con la tua chiave segreta
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurazione di Multer per leggere i file (in memoria, perfetto per server serverless come Render)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// La nostra rotta che il frontend chiamerà
app.post('/send-email', upload.single('attachment'), async (req, res) => {
    // 1. Estraiamo i dati dal form
    const { user_name, user_email, user_phone, workType, message } = req.body;
    const attachment = req.file;

    try {
        // 2. Prepariamo l'email usando l'API di Resend
        const emailData = {
            from: 'onboarding@resend.dev', // DEVE essere questo finché non compri un dominio tuo
            to: process.env.TO_EMAIL,      // La tua email registrata su Resend
            reply_to: user_email,          // Se clicchi "Rispondi" nell'email, scriverà al cliente
            subject: `Nuovo Preventivo: ${workType} da ${user_name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #ea580c;">Nuova Richiesta di Preventivo</h2>
                    <p><strong>Nome:</strong> ${user_name}</p>
                    <p><strong>Email:</strong> ${user_email}</p>
                    <p><strong>Telefono:</strong> ${user_phone}</p>
                    <p><strong>Tipo di Lavoro:</strong> ${workType}</p>
                    <hr style="border: 1px solid #ccc; margin: 20px 0;">
                    <p><strong>Descrizione:</strong></p>
                    <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                </div>
            `,
        };

        // 3. Aggiungiamo l'allegato SOLO se il cliente lo ha caricato
        if (attachment) {
            emailData.attachments =[
                {
                    filename: attachment.originalname,
                    content: attachment.buffer, // Resend è bravissimo a leggere il buffer di Multer
                }
            ];
        }

        // 4. Inviamo fisicamente l'email!
        const { data, error } = await resend.emails.send(emailData);

        if (error) {
            console.error("Resend API Error:", error);
            return res.status(500).json({ error: "Errore durante l'invio tramite Resend" });
        }

        // 5. Se siamo qui, l'email è partita! Diciamo al frontend "Tutto Ok!"
        res.status(200).json({ message: "Email inviata con successo!", data });

    } catch (err) {
        console.error("Errore critico del server:", err);
        res.status(500).json({ error: "Errore interno del server" });
    }
});

// Avvia il server
app.listen(port, () => {
    console.log(`🚀 Server backend attivo sulla porta ${port}`);
});