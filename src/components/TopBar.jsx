import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const TopBar = () => {
    return (
        <div className="bg-gray-800 text-white text-sm py-2 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex items-center space-x-4 md:space-x-6">
                    <a href="mailto:info@edilikaknjoamel.it" className="flex items-center hover:text-brand-orange transition-colors">
                        <FiMail className="mr-2" />
                        <span className="hidden sm:inline">info@edilikaknjoamel.it</span>
                    </a>
                    <div className="border-l border-gray-600 h-4"></div> {/* Divisore opzionale */}
                    <a href="tel:+393331234567" className="flex items-center hover:text-brand-orange transition-colors">
                        <FiPhone className="mr-2" />
                        <span className="hidden sm:inline">+39 333 1234567</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;