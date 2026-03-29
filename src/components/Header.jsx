import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/logo.png';

const Header = () => {
    const[isSticky, setSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Chiude il menu quando si cambia pagina
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Gestisce l'header "appiccicoso" allo scroll
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    // Blocca lo scroll della pagina quando il menu mobile è aperto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const navLinks =[
        { path: '/chi-siamo', label: 'Chi siamo' },
        { path: '/servizi', label: 'Servizi' },
        { path: '/progetti', label: 'Progetti' },
        { path: '/contatti', label: 'Contatti' },
    ];

    return (
        <header className={`bg-white w-full z-50 transition-all duration-300 ${isSticky ? 'sticky top-0 shadow-lg' : 'relative shadow-sm'}`}>

            {/* BARRA PRINCIPALE */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-3 relative z-50">
                        <img src={logo} alt="Edili di Kaknjo Amel Logo" className="h-12 w-auto" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-800 leading-tight">EDILI DI</span>
                            <span className="text-sm font-medium text-gray-700 uppercase tracking-widest leading-tight">Kaknjo Amel</span>
                        </div>
                    </Link>

                    {/* NAV DESKTOP (Nascosta su mobile) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Navbar />
                    </div>

                    {/* PULSANTE HAMBURGER (Visibile solo su mobile) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative z-50 flex flex-col justify-between w-8 h-6 focus:outline-none cursor-pointer"
                        aria-label="Menu Mobile"
                    >
                        {/* Le 3 linee dell'hamburger */}
                        <span className={`h-1 w-full bg-gray-800 rounded-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                        <span className={`h-1 w-full bg-brand-orange rounded-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`h-1 w-full bg-gray-800 rounded-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                    </button>

                </div>
            </div>

            {/* MENU MOBILE OVERLAY (Scivola da destra) */}
            <div
                className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <nav className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.path}
                            className={({ isActive }) => `text-3xl font-bold transition-colors ${isActive ? 'text-brand-orange' : 'text-gray-800'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    <Link
                        to="/richiedi-preventivo"
                        className="mt-8 px-8 py-4 bg-brand-orange text-white text-xl font-bold rounded-md shadow-lg hover:bg-orange-700 transition-all transform hover:scale-105"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Richiedi Preventivo
                    </Link>
                </nav>
            </div>

        </header>
    );
};

export default Header;