import React from 'react';

const ProjectCard = ({ image, onClick }) => {
    return (
        <div
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-video"
            onClick={onClick}
        >
            {/*
        aspect-video: forza il div a 16:9
        object-cover: l'immagine riempie il div senza deformarsi (taglia i bordi eccedenti)
      */}
            <img
                src={image}
                alt="Dettaglio lavoro"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Leggero effetto scuro al passaggio del mouse per far capire che è cliccabile */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>
    );
};

export default ProjectCard;