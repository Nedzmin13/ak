import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Assicurati che il percorso sia corretto

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* GRIGLIA PRINCIPALE: 3 COLONNE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* COLONNA 1: LOGO E CONTATTI */}
                    <div className="flex flex-col items-start">
                        {/* 1. MODIFICA: Logo senza sfondo bianco */}
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="Edili di Kaknjo Amel Logo" className="h-12 w-auto object-contain" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white leading-tight">EDILI DI</span>
                                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest leading-tight">Kaknjo Amel</span>
                            </div>
                        </Link>
                        {/* Info Contatti */}
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-brand-orange mt-1 mr-3 flex-shrink-0" />
                                <span>Via Giavenale Di Sopra 147, 36015 Schio (VI)</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="text-brand-orange mr-3 flex-shrink-0" />
                                <span>+393452195392</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-brand-orange mr-3 flex-shrink-0" />
                                <span>info@edilikaknjoamel.it</span>
                            </li>
                        </ul>
                    </div>

                    {/* COLONNA 2: LINK RAPIDI */}
                    <div className="flex flex-col md:items-center">
                        <div className="w-full md:w-auto">
                            {/* 2. MODIFICA: Rimossa la sottolineatura */}
                            <h3 className="text-xl font-bold text-white mb-6">Link Rapidi</h3>
                            <ul className="space-y-3">
                                <li><Link to="/chi-siamo" className="hover:text-brand-orange transition-colors">Chi siamo</Link></li>
                                <li><Link to="/servizi" className="hover:text-brand-orange transition-colors">Servizi</Link></li>
                                <li><Link to="/progetti" className="hover:text-brand-orange transition-colors">Progetti</Link></li>
                                <li><Link to="/contatti" className="hover:text-brand-orange transition-colors">Contatti</Link></li>
                                <li><Link to="/richiedi-preventivo" className="hover:text-brand-orange transition-colors">Richiedi un Preventivo</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* COLONNA 3: I NOSTRI SERVIZI */}
                    {/* 3. MODIFICA: Allineamento a sinistra invece che a destra */}
                    <div className="flex flex-col md:items-end">
                        <div className="w-full md:w-auto">
                            {/* 2. MODIFICA: Rimossa la sottolineatura */}
                            <h3 className="text-xl font-bold text-white mb-6">I Nostri Servizi</h3>

                            {/* 4. MODIFICA: Testo non cliccabile (nessun tag <Link>, nessun hover) */}
                            <ul className="space-y-3 text-gray-400">
                                <li>Ristrutturazione Edilizia</li>
                                <li>Rifacimento Tetti</li>
                                <li>Tinteggiature</li>
                                <li>Isolamenti Termici</li>
                                <li>Restauri</li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* LINEA SEPARATRICE */}
                <hr className="border-gray-800 mb-8" />

                {/* 5. MODIFICA: BARRA INFERIORE STRUTTURATA (Sinistra, Centro, Destra) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* SINISTRA: Social Icons */}
                    <div className="flex items-center gap-4 w-full md:w-1/3 justify-center md:justify-start">
                        <span className="text-sm font-semibold text-white uppercase tracking-wider">Seguici sui social</span>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:scale-110">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:scale-110">
                            <FaInstagram size={18} />
                        </a>
                    </div>

                    {/* CENTRO: Copyright e Links legali */}
                    <div className="text-sm text-gray-500 text-center w-full md:w-1/3">
                        <p className="mb-1">
                            &copy; {new Date().getFullYear()} Edili di Kaknjo Amel. Tutti i diritti riservati.
                        </p>
                        <p>
                            P.IVA: 123456789 <span className="mx-2">|</span>
                            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        </p>
                    </div>

                    {/* DESTRA: Powered By (serve a bilanciare visivamente i social a sinistra) */}
                    <div className="text-sm text-gray-600 text-center md:text-right w-full md:w-1/3">
                        Powered By CodeNed
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;