import React from 'react';
import { FaHammer, FaHome, FaPalette, FaShieldAlt, FaTools } from 'react-icons/fa';

const servicesList = [
    {
        icon: <FaHammer />,
        title: "Ristrutturazione Edilizia",
        description: "Offriamo un servizio completo di ristrutturazione 'chiavi in mano' per appartamenti, uffici e locali commerciali, gestendo ogni fase del progetto.",
        details: ["Rifacimento bagni e cucine", "Riorganizzazione degli spazi interni", "Posa di pavimenti e rivestimenti", "Adeguamento impianti"]
    },
    {
        icon: <FaHome />,
        title: "Rifacimento Tetti",
        description: "Realizziamo interventi di rifacimento completo della copertura, impermeabilizzazione e miglioramento dell'isolamento, utilizzando materiali resistenti.",
        details: ["Bonifica e smaltimento vecchie coperture", "Installazione di guaine impermeabilizzanti", "Posa di tegole e coppi", "Isolamento termico"]
    },
    {
        icon: <FaPalette />,
        title: "Tinteggiature",
        description: "Valorizziamo ogni ambiente con tinteggiature di alta qualità per interni ed esterni, curando la preparazione delle superfici e le finiture.",
        details: ["Rasatura e stuccatura pareti", "Trattamenti antimuffa", "Verniciatura di porte e finestre", "Decorazioni speciali"]
    },
    {
        icon: <FaShieldAlt />,
        title: "Isolamenti Termici",
        description: "Realizziamo sistemi di isolamento a cappotto per migliorare l'efficienza energetica, ridurre i costi e aumentare il comfort abitativo.",
        details: ["Posa di pannelli isolanti", "Applicazione di rete e rasatura", "Finitura con intonaci colorati", "Consulenza per incentivi"]
    },
    {
        icon: <FaTools />,
        title: "Restauri",
        description: "Interveniamo su edifici storici con tecniche di restauro conservativo per recuperare e preservare il valore architettonico originale.",
        details: ["Consolidamento di murature", "Restauro di facciate", "Recupero di intonaci antichi", "Trattamenti di deumidificazione"]
    },
];

const Services = () => {
    return (
        <>
            {/* SEZIONE TITOLO */}
            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">I Nostri Servizi</h1>
                    <p className="mt-4 text-lg text-gray-300">Soluzioni complete per ogni esigenza costruttiva.</p>
                </div>
            </section>

            {/* --- SEZIONE LISTA SERVIZI --- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* NUOVA GRIGLIA RESPONSIVE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service, index) => (
                            // CARD DEL SERVIZIO CON NUOVO STILE E ANIMAZIONI
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 flex flex-col h-full"
                            >
                                <div className="flex items-center mb-5">
                                    <span className="text-brand-orange text-3xl mr-4">{service.icon}</span>
                                    <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                                </div>
                                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                                    {service.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;