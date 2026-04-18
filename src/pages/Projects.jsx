import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { Helmet } from 'react-helmet-async';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



import proj1 from '../assets/lavorohome2.jpg';
import proj2 from '../assets/lavoro6.jpeg';
import proj3 from '../assets/lavoro7.jpeg';
import proj4 from '../assets/lavoro8.jpeg';
import proj5 from '../assets/lavoro9.jpg';
import proj6 from '../assets/lavoro10.jpg';
import proj7 from '../assets/lavoro11.jpeg';
import proj8 from '../assets/lavorohome3.jpg';
import proj9 from '../assets/lavoro12.jpeg';
import proj10 from '../assets/lavorohome1.jpg';
import proj11 from '../assets/lavoro13.jpg';
import proj12 from '../assets/lavoro14.jpeg';
import proj13 from '../assets/lavoro2.jpg';
import proj14 from '../assets/lavoro1.jpg';
import proj15 from '../assets/lavoro15.jpg';
import proj16 from '../assets/lavoro16.jpeg';
import proj17 from '../assets/lavoro17.jpeg';
import proj18 from '../assets/lavoro18.jpeg';



const projectsList = [
    { image: proj1, },
    { image: proj2, },
    { image: proj3, },
    { image: proj4, },
    { image: proj5, },
    { image: proj6, },
    { image: proj7, },
    { image: proj8, },
    { image: proj9, },
    { image: proj10, },
    { image: proj11, },
    { image: proj12, },
    { image: proj13, },
    { image: proj14, },
    { image: proj15, },
    { image: proj16, },
    { image: proj17, },
    { image: proj18, },
    // Aggiungi altri progetti qui
];


const Projects = () => {
    const [index, setIndex] = useState(-1);
    const slides = projectsList.map(p => ({ src: p.image }));

    return (
        <>

            <Helmet>
                <title>Progetti Realizzati | Edili di Kaknjo Amel - Galleria Lavori</title>
                <meta name="description" content="Guarda la galleria dei nostri lavori recenti. Scopri la qualità e la cura dei dettagli nei nostri progetti di ristrutturazione e costruzione." />
            </Helmet>

            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">I Nostri Progetti</h1>
                    <p className="mt-4 text-lg text-gray-300">Dove la qualità prende forma. Scopri i nostri lavori.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsList.map((project, i) => (
                            <ProjectCard
                                key={i}
                                image={project.image}
                                onClick={() => setIndex(i)} // Apre l'immagine al click
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* COMPONENTE LIGHTBOX */}
            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
            />
        </>
    );
};

export default Projects;