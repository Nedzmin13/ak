import React from 'react';
import { FaBullseye, FaCheckCircle, FaUsers } from 'react-icons/fa';

import teamImage from '../assets/hero.png';

// Dati per i valori: è più pulito gestirli come un array di oggetti
const values = [
    {
        icon: <FaBullseye />,
        title: "La Nostra Mission",
        description: "Realizzare opere edili che migliorino la qualità della vita dei nostri clienti, costruendo spazi sicuri, funzionali ed esteticamente pregevoli."
    },
    {
        icon: <FaCheckCircle />,
        title: "Qualità Certificata",
        description: "Utilizziamo solo materiali di prima scelta e le migliori tecniche costruttive. La qualità non è un'opzione, ma la base di ogni nostro singolo intervento."
    },
    {
        icon: <FaUsers />,
        title: "Centralità del Cliente",
        description: "Ascoltiamo attentamente le esigenze di ogni cliente per trasformare le loro idee in realtà, con trasparenza e comunicazione costante."
    }
];

const About = () => {
    return (
        <>
            {/* SEZIONE TITOLO */}
            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Chi Siamo</h1>
                    <p className="mt-4 text-lg text-gray-300">Passione, esperienza e qualità al servizio dell'edilizia.</p>
                </div>
            </section>

            {/* DESCRIZIONE AZIENDA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">La Nostra Storia</h2>
                        <p className="text-gray-600 mb-4">
                            Fondata da Amel Kaknjo, "Edili di Kaknjo Amel" nasce dalla passione per la costruzione e da un'esperienza pluriennale nel settore. La nostra impresa si è affermata come un punto di riferimento per chi cerca affidabilità, precisione e innovazione.
                        </p>
                        <p className="text-gray-600">
                            Ogni progetto, dal più piccolo al più complesso, è seguito con la massima cura e attenzione al dettaglio, garantendo risultati eccellenti che durano nel tempo.
                        </p>
                    </div>
                    <div>
                        <img
                            src={teamImage}
                            alt="Il nostro team al lavoro"
                            className="rounded-lg shadow-xl w-3/4 h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* --- SEZIONE "I NOSTRI VALORI"  --- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Blocco titolo, centrato e con sottotitolo */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">I Nostri Valori</h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Principi solidi che guidano ogni nostra decisione e azione quotidiana.</p>
                    </div>

                    {/* Griglia per le card dei valori */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
                            >
                                <div className="text-brand-orange text-5xl mb-6 inline-block">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;