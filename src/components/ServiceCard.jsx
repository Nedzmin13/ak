import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
    return (

        <div className="h-full p-8 text-center">
            <div className="text-brand-orange text-5xl mb-4 inline-block">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;