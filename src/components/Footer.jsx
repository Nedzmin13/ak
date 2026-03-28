import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Edili di Kaknjo Amel</h2>
                        <p className="text-gray-400">Costruiamo il tuo futuro, un mattone alla volta.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
                        <ul className="space-y-2">
                            <li><Link to="/chi-siamo" className="hover:text-brand-orange transition-colors">Chi siamo</Link></li>
                            <li><Link to="/servizi" className="hover:text-brand-orange transition-colors">Servizi</Link></li>
                            <li><Link to="/progetti" className="hover:text-brand-orange transition-colors">Progetti</Link></li>
                            <li><Link to="/contatti" className="hover:text-brand-orange transition-colors">Contatti</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contatti</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>info@edilikaknjoamel.it</li>
                            <li>+39 333 1234567</li>
                            <li>Via Prova, 123 - 00100 Roma (RM)</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Edili di Kaknjo Amel. Tutti i diritti riservati.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;