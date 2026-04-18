import React, { useState } from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { FaHammer, FaHome, FaPalette, FaShieldAlt, FaTools } from 'react-icons/fa';
import BorderGlow from '../components/BorderGlow';
import { Helmet } from 'react-helmet-async';

// --- IMPORTAZIONI FONDAMENTALI PER LA LIGHTBOX ---
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Importazioni immagini
import heroBg from '../assets/hero-bg.jpg';
import aboutImg from '../assets/hero-bg.jpg';
import proj1 from '../assets/lavorohome1.jpg';
import proj2 from '../assets/lavorohome2.jpg';
import proj3 from '../assets/lavorohome3.jpg';


const services =[
    { icon: <FaHammer />, title: "Ristrutturazioni", description: "Interventi completi per rinnovare ogni ambiente." },
    { icon: <FaHome />, title: "Rifacimento Tetti", description: "Coperture sicure e durevoli per la tua casa." },
    { icon: <FaPalette />, title: "Tinteggiature", description: "Finiture di alta qualità per interni ed esterni." },
    { icon: <FaShieldAlt />, title: "Isolamenti Termici", description: "Migliora l'efficienza e il comfort abitativo." },
    { icon: <FaTools />, title: "Restauri", description: "Valorizziamo edifici storici e di pregio." },
];

const projects =[
    { image: proj1 },
    { image: proj2 },
    { image: proj3 },
];

const Home = () => {
    // Stato per gestire l'apertura della galleria
    const [index, setIndex] = useState(-1);

    // Formattiamo le immagini per la libreria
    const slides = projects.map(p => ({ src: p.image }));

    return (
        <>
            <Helmet>
                <title>Impresa Edile Roma | Edili di Kaknjo Amel</title>
                <meta name="description" content="Affidati a Edili di Kaknjo Amel per ristrutturazioni, rifacimento tetti e restauri. Esperienza e qualità al tuo servizio. Richiedi un preventivo gratuito." />
            </Helmet>

            {/* HERO SECTION */}
            <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">Costruiamo il tuo futuro con qualità</h1>
                    <p className="text-lg md:text-xl max-w-2xl mb-10">Affidabilità, competenza e passione al servizio dei tuoi progetti.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button to="/contatti" variant="primary">Richiedi Preventivo</Button>
                        <Button to="/servizi" variant="outline">Scopri di più</Button>
                    </div>
                </div>
            </section>

            {/* SERVIZI */}
            <section id="servizi" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">I Nostri Servizi</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {services.map(s => (
                            <BorderGlow key={s.title} glowColor="26 94 50" backgroundColor="#FFFFFF" borderRadius={8} className="border-none shadow-md">
                                <ServiceCard icon={s.icon} title={s.title} description={s.description} />
                            </BorderGlow>
                        ))}
                    </div>
                </div>
            </section>

            {/* CHI SIAMO */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src={aboutImg} alt="Il nostro team" className="rounded-lg shadow-xl w-full aspect-video object-cover"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">La Nostra Esperienza al Vostro Servizio</h2>
                        <p className="text-gray-600 mb-6">
                            Edili di Kaknjo Amel è un'impresa che poggia su basi solide di esperienza e professionalità. La nostra missione è realizzare progetti che superino le aspettative, garantendo qualità nei materiali e precisione nelle lavorazioni.
                        </p>
                        <Button to="/chi-siamo" variant="secondary">Scopri di più</Button>
                    </div>
                </div>
            </section>

            {/* PROGETTI (PREVIEW) CON LIGHTBOX */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">I Nostri Lavori Recenti</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((p, i) => (
                            <ProjectCard
                                key={i}
                                image={p.image}
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>
                    <div className="mt-12">
                        <Button to="/progetti" variant="primary">Vedi Tutti i Progetti</Button>
                    </div>
                </div>
            </section>

            {/* LA LIBRERIA CHE CAUSAVA L'ERRORE ORA E' IMPORTATA CORRETTAMENTE */}
            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
            />

            {/* CTA FINALE */}
            <section className="bg-brand-orange text-white">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">Hai un progetto in mente?</h2>
                    <p className="mb-8 max-w-xl mx-auto">Contattaci per un sopralluogo e un preventivo gratuito. Siamo pronti a realizzarlo.</p>
                    <Button to="/contatti" variant="light" className="hover:shadow-lg">
                        Parla con noi
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Home;