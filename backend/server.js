// in backend/server.js

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Abilita CORS per tutte le richieste
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurazione di Multer per gestire l'upload in memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint per inviare l'email
app.post('/send-email', upload.single('attachment'), async (req, res) => {
    const { user_name, user_email, user_phone, workType, message } = req.body;
    const attachment = req.file;

    // Configura il transporter di Nodemailer.
    // Useremo un servizio come "Resend" o "Brevo" in produzione.
    // Per ora usiamo le credenziali da .env
    let transporter = nodemailer.createTransport({
        host: "smtp.resend.com", // Host SMTP di Resend
        port: 465,
        secure: true,
        auth: {
            user: "resend", // Questo è fisso per Resend
            pass: process.env.RESEND_API_KEY, // La tua API Key di Resend
        },
    });

    try {
        const mailOptions = {
            from: 'onboarding@resend.dev', // Deve essere un dominio verificato su Resend
            to: process.env.TO_EMAIL, // L'email dove ricevi le richieste
            replyTo: user_email,
            subject: `Nuova Richiesta di Preventivo da ${user_name}`,
            html: `
                <h2>Nuova Richiesta di Preventivo</h2>
                <p><strong>Nome:</strong> ${user_name}</p>
                <p><strong>Email:</strong> ${user_email}</p>
                <p><strong>Telefono:</strong> ${user_phone}</p>
                <p><strong>Tipo di Lavoro:</strong> ${workType}</p>
                <hr>
                <p><strong>Messaggio:</strong></p>
                <p>${message}</p>
            `,
            attachments: attachment ? [{
                filename: attachment.originalname,
                content: attachment.buffer,
                contentType: attachment.mimetype,
            }] : [],
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: "Email inviata con successo!" });
    } catch (error) {
        console.error("Errore nell'invio dell'email:", error);
        res.status(500).send({ message: "Errore del server durante l'invio dell'email." });
    }
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});