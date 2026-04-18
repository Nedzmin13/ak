import React from 'react';
import { FiMail } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';

const WorkWithUs = () => {
    const email = "info@edilidiamelkaknjo.it";

    return (
        <>
            <Helmet>
                <title>Lavora con Noi | Edili di Kaknjo Amel - Posizioni Aperte</title>
                <meta name="description" content="Sei un professionista del settore edile? Invia la tua candidatura per unirti al team di Edili di Kaknjo Amel. Scopri come fare." />
            </Helmet>

        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold">Lavora con Noi</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Siamo sempre alla ricerca di talenti e professionisti da inserire nel nostro team.</p>
                </div>

                <div className="max-w-2xl mx-auto bg-white p-10 text-center rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4">Invia la tua Candidatura</h2>
                    <p className="text-gray-600 mb-6">
                        Se sei interessato a far parte della nostra squadra, inviaci il tuo curriculum vitae e una breve lettera di presentazione al seguente indirizzo email. Saremo felici di valutare il tuo profilo.
                    </p>
                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-700 transition-transform transform hover:scale-105"
                    >
                        <FiMail className="mr-3" size={20} />
                        Invia la tua candidatura
                    </a>
                </div>
            </div>
        </div>
        </>
    );
};

export default WorkWithUs;