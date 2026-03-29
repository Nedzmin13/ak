import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">Privacy & Cookie Policy</h1>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        <strong>Ultimo aggiornamento: Marzo 2026</strong><br/>
                        Benvenuto sul sito di Edili di Kaknjo Amel. La tua privacy è molto importante per noi. Questa Privacy Policy ha lo scopo di descrivere in modo chiaro e trasparente le modalità di gestione del sito in riferimento al trattamento dei dati personali degli utenti che lo consultano, in conformità con il Regolamento (UE) 2016/679 (GDPR).
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8">1. Titolare del Trattamento</h2>
                    <p>
                        Il Titolare del trattamento dei dati personali è:<br/>
                        <strong>Edili di Kaknjo Amel</strong><br/>
                        Sede Legale: Via Prova, 123 - 00100 Roma (RM)<br/>
                        P.IVA: 123456789<br/>
                        Email di contatto: info@edilikaknjoamel.it<br/>
                        Telefono: +39 333 1234567
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8">2. Tipi di Dati Trattati e Finalità</h2>
                    <h3 className="text-lg font-semibold mt-4">a) Dati forniti volontariamente dall'utente</h3>
                    <p>
                        I dati rilasciati nella compilazione dei moduli di contatto, richiesta preventivo o candidatura (es. cognome, nome, email, numero di telefono, messaggi, file allegati) sono trattati al solo scopo di:<br/>
                        - Rispondere alle tue richieste e fornire preventivi.<br/>
                        - Valutare profili professionali per eventuali assunzioni.<br/>
                        La base giuridica è l'esecuzione di misure precontrattuali adottate su tua richiesta (art. 6, par. 1, lett. b GDPR). Non trattiamo dati "sensibili" senza esplicito consenso.
                    </p>

                    <h3 className="text-lg font-semibold mt-4">b) Dati di Navigazione</h3>
                    <p>
                        I sistemi informatici acquisiscono alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di Internet (es. indirizzi IP, orari). Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime e per controllare il corretto funzionamento del sito.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8">3. Modalità e Luogo del Trattamento</h2>
                    <p>
                        Il Titolare tratta i Dati Personali adottando le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate. I Dati sono trattati presso la sede operativa del Titolare e in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8">4. Periodo di Conservazione</h2>
                    <p>
                        I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. Pertanto, i dati raccolti per scopi collegati all'esecuzione di un contratto (o richiesta preventivo) saranno trattenuti sino a quando sia completata l'esecuzione di tale contratto.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8">5. Diritti degli Interessati</h2>
                    <p>
                        In qualità di interessato, hai il diritto di chiedere al Titolare l'accesso ai tuoi dati personali, la rettifica, la cancellazione, la limitazione del trattamento, o di opporti al loro trattamento (artt. 15 e ss. del GDPR). Le richieste possono essere inviate all'indirizzo email del Titolare. Hai inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali.
                    </p>

                    <hr className="my-8" />

                    <h1 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cookie Policy</h1>

                    <h2 className="text-xl font-bold text-gray-900 mt-8">1. Cosa Sono i Cookie</h2>
                    <p>
                        I cookie sono piccoli file di testo che i siti visitati inviano ai terminali degli utenti, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8">2. Tipi di Cookie Utilizzati da Questo Sito</h2>
                    <p>
                        <strong>Questo sito utilizza esclusivamente cookie tecnici.</strong><br/>
                        Questi cookie sono fondamentali per permettere di navigare all'interno del sito ed utilizzare le sue funzionalità. Non vengono utilizzati per scopi ulteriori.
                        In particolare utilizziamo cookie di sessione per garantire la normale navigazione.
                        <br/><br/>
                        <strong>Questo sito NON utilizza cookie di profilazione</strong>, né propri né di terze parti, per inviare messaggi pubblicitari in linea con le preferenze manifestate dall'utente.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8">3. Gestione dei Cookie</h2>
                    <p>
                        L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. La disabilitazione dei cookie tecnici può tuttavia compromettere l'utilizzo di alcune funzionalità del sito. È possibile trovare informazioni su come gestire i cookie direttamente nelle impostazioni del browser utilizzato (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).
                    </p>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;