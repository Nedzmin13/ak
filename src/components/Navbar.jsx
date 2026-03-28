import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
    { path: '/chi-siamo', label: 'Chi siamo' },
    { path: '/servizi', label: 'Servizi' },
    { path: '/progetti', label: 'Progetti' },
    { path: '/contatti', label: 'Contatti' },
];

const Navbar = () => {
    return (
        <nav>
            <ul className="flex space-x-6">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `text-lg font-medium transition-colors hover:text-brand-orange ${isActive ? 'text-brand-orange' : 'text-gray-700'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;