import React from 'react';

const ProjectCard = ({ image, title, category }) => {
    return (
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm uppercase text-gray-200">{category}</p>
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>
        </div>
    );
};

export default ProjectCard;