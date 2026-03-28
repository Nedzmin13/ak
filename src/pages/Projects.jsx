import React from 'react';
import ProjectCard from '../components/ProjectCard';

import proj1 from '../assets/hero-bg.jpg';
import proj2 from '../assets/hero-bg.jpg';
import proj3 from '../assets/hero-bg.jpg';
import proj4 from '../assets/hero-bg.jpg';
import proj5 from '../assets/hero-bg.jpg';
import proj6 from '../assets/hero-bg.jpg';

const projectsList = [
    { image: proj1, title: "Villa Residenziale", category: "Ristrutturazione" },
    { image: proj2, title: "Facciata Condominiale", category: "Tinteggiatura" },
    { image: proj3, title: "Restauro Casale Storico", category: "Restauri" },
    { image: proj4, title: "Copertura Industriale", category: "Rifacimento Tetti" },
    { image: proj5, title: "Cappotto Termico", category: "Isolamenti" },
    { image: proj6, title: "Ristrutturazione Bagno", category: "Ristrutturazione" },
    // Aggiungi altri progetti qui
];


const Projects = () => {
    return (
        <>
            {/* SEZIONE TITOLO */}
            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">I Nostri Progetti</h1>
                    <p className="mt-4 text-lg text-gray-300">Dove la qualità prende forma. Scopri i nostri lavori.</p>
                </div>
            </section>

            {/* GALLERIA PROGETTI */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Qui in futuro si potrebbe aggiungere un filtro per categoria */}
                    {/* <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-brand-orange text-white px-6 py-2 rounded-md">Tutti</button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md">Ristrutturazioni</button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md">Tinteggiature</button>
          </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsList.map((project, index) => (
                            <ProjectCard
                                key={index}
                                image={project.image}
                                title={project.title}
                                category={project.category}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;