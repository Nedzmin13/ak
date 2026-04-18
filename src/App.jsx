// in src/App.jsx

import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import WorkWithUs from './pages/WorkWithUs';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
    return (
        <div className="bg-white text-gray-800 font-sans">
            <TopBar />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chi-siamo" element={<About />} />
                    <Route path="/servizi" element={<Services />} />
                    <Route path="/progetti" element={<Projects />} />
                    <Route path="/contatti" element={<Contact />} />
                    <Route path="/richiedi-preventivo" element={<RequestQuote />} />
                    <Route path="/lavora-con-noi" element={<WorkWithUs />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;