import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/logo.png'; // Assicurarsi che il percorso del logo sia corretto

const Header = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-white transition-all duration-300 ${isSticky ? 'sticky top-0 z-50 shadow-lg' : 'shadow-sm'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">

                {/* --- INIZIO BLOCCO LOGO MODIFICATO --- */}
                <Link to="/" className="flex items-center gap-3">
                    {/* Immagine del logo */}
                    <img src={logo} alt="Edili di Kaknjo Amel Logo" className="h-12 w-auto" />

                    {/* Contenitore per il testo, impilato verticalmente */}
                    <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-800 leading-tight">
              EDILI DI
            </span>
                        <span className="text-sm font-medium text-gray-700 uppercase tracking-widest leading-tight">
              Kaknjo Amel
            </span>
                    </div>
                </Link>
                {/* --- FINE BLOCCO LOGO MODIFICATO --- */}

                <div className="hidden md:flex items-center space-x-8">
                    <Navbar />
                </div>

                {/* Qui andrebbe l'hamburger menu per il mobile */}
            </div>
        </header>
    );
};

export default Header;