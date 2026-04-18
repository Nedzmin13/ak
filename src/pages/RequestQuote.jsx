import React, { useState } from 'react';
import Button from '../components/Button';
import { FaPhoneAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const RequestQuote = () => {
    // Stato per gestire il caricamento e i messaggi di successo/errore
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // Valori possibili: 'success' | 'error'

    // Funzione per gestire l'invio del form
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene il ricaricamento della pagina
        setLoading(true);
        setStatus(null);

        // Raccoglie tutti i dati dal form, inclusi i file
        const formData = new FormData(e.target);

        try {
            // Invia i dati al tuo backend personale.
            // RICORDA: Sostituisci questo URL con quello che ti fornirà Render.
            const response = await fetch("https://edili-amel-backend.onrender.com/send-email", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            // Se c'è un errore di rete (es. il server non è raggiungibile)
            console.error("Errore durante la comunicazione con il server:", error);
            setStatus('error');
        } finally {
            // In ogni caso, l'operazione di invio è terminata
            setLoading(false);
        }
    };

    return (
<>
    <Helmet>
        <title>Richiedi un Preventivo Gratuito | Edili di Kaknjo Amel</title>
        <meta name="description" content="Compila il modulo per ricevere un preventivo dettagliato e gratuito per il tuo progetto edile. Risposta rapida e senza impegno." />
    </Helmet>
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                {/* Intestazione della pagina */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">Richiedi Preventivo</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Compila il form e ti risponderemo con un preventivo dettagliato e gratuito.</p>
                </div>

                {/* Contenitore principale del form */}
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Riga per Nome e Email */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Nome e Cognome *</label>
                                <input type="text" name="user_name" id="user_name" required placeholder="Mario Rossi" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange" />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">Email *</label>
                                <input type="email" name="user_email" id="user_email" required placeholder="mario.rossi@email.com" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange" />
                            </div>
                        </div>

                        {/* Campo Telefono */}
                        <div>
                            <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700">Telefono *</label>
                            <input type="tel" name="user_phone" id="user_phone" required placeholder="+39 333 123 4567" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange" />
                        </div>

                        {/* Campo Selezione Lavoro */}
                        <div>
                            <label htmlFor="workType" className="block text-sm font-medium text-gray-700">Tipo di Lavoro *</label>
                            <select name="workType" id="workType" required defaultValue="" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange">
                                <option value="" disabled>Seleziona il tipo di lavoro</option>
                                <option value="Ristrutturazione Edilizia">Ristrutturazione Edilizia</option>
                                <option value="Rifacimento Tetti">Rifacimento Tetti</option>
                                <option value="Tinteggiature">Tinteggiature</option>
                                <option value="Isolamenti Termici">Isolamenti Termici</option>
                                <option value="Restauri">Restauri</option>
                                <option value="Altro">Altro</option>
                            </select>
                        </div>

                        {/* Campo Upload File */}
                        <div>
                            <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Carica Disegno o Foto (Opzionale, Max 10MB)</label>
                            <input type="file" name="attachment" id="attachment" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-brand-orange hover:file:bg-orange-100"/>
                        </div>

                        {/* Campo Messaggio */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Descrizione Richiesta *</label>
                            <textarea name="message" id="message" rows="5" required placeholder="Descrivi qui il tuo progetto..." className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange"></textarea>
                        </div>

                        {/* Messaggi di feedback per l'utente */}
                        {status === 'success' && <p className="text-center font-semibold text-green-600">✅ Richiesta inviata con successo! Ti risponderemo al più presto.</p>}
                        {status === 'error' && <p className="text-center font-semibold text-red-600">❌ Si è verificato un errore. Riprova più tardi o contattaci direttamente.</p>}

                        {/* Pulsante di Invio */}
                        <div className="text-center pt-4">
                            <Button type="submit" variant="primary" disabled={loading} className="w-full sm:w-auto">
                                {loading ? 'Invio in corso...' : 'Invia Richiesta Preventivo'}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Box alternativo per contatti diretti */}
                <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center justify-center">
                        <FaPhoneAlt className="mr-3" />Preferisci chiamarci?
                    </h3>
                    <p className="text-gray-600">Puoi contattarci direttamente ai seguenti recapiti:</p>
                    <p className="mt-2 text-gray-800">
                        <strong>Tel:</strong> +39 3452195392 | <strong>Email:</strong> info@edilidiamelkaknjo.it
                    </p>
                </div>
            </div>
        </div>
</>
    );
};

export default RequestQuote;