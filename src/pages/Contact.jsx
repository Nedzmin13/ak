import React from 'react';
import Button from '../components/Button';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    return (
        <>
            {/* Sezione Titolo */}
            <section className="bg-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Contatti</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Siamo a tua disposizione per informazioni, preventivi e collaborazioni.</p>
                </div>
            </section>

            {/* Sezione Contenuto Principale */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

                        {/* Colonna Sinistra: I Nostri Recapiti */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">I Nostri Recapiti</h2>
                            <ul className="space-y-6 text-gray-600">
                                <li className="flex items-start">
                                    <FiMapPin className="text-brand-orange mt-1 mr-4 flex-shrink-0" size={20} />
                                    <div>
                                        <span className="font-semibold">Indirizzo:</span><br/>
                                        Via Giavenale Di Sopra 147, 36015 Schio (VI)
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FiPhone className="text-brand-orange mt-1 mr-4 flex-shrink-0" size={20} />
                                    <div>
                                        <span className="font-semibold">Telefono:</span><br/>
                                        +393452195392
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FiMail className="text-brand-orange mt-1 mr-4 flex-shrink-0" size={20} />
                                    <div>
                                        <span className="font-semibold">Email:</span><br/>
                                        info@edilikaknjoamel.it
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Colonna Destra: Come possiamo aiutarti? */}
                        <div className="p-8 flex flex-col justify-center items-center text-center">
                            <h2 className="text-2xl font-bold mb-4">Come possiamo aiutarti?</h2>
                            <p className="text-gray-600 mb-8">
                                Hai un progetto in mente o vuoi unirti al nostro team? Scegli il percorso giusto per te.
                            </p>
                            <div className="flex flex-col gap-4 w-full max-w-xs">
                                <Button to="/richiedi-preventivo" variant="primary" className="block w-full">
                                    Richiedi un Preventivo
                                </Button>

                                <Button to="/lavora-con-noi" variant="outline-dark" className="block w-full">
                                    Lavora con noi
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;