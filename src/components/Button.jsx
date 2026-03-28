import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', onClick, type = 'button', className = '' }) => {
    const baseStyles = 'px-8 py-3 rounded-md font-bold text-center transition-all duration-300 transform hover:scale-105 text-base';

    const variants = {
        primary: 'bg-brand-orange text-white shadow-md hover:bg-orange-700',
        secondary: 'bg-gray-800 text-white hover:bg-gray-700',
        outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900',
        light: 'bg-white text-brand-orange shadow-md hover:bg-brand-orange hover:text-white',
        'outline-dark': 'bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white',
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles}>
            {children}
        </button>
    );
};

export default Button;