import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImpactSection from './components/ImpactSection';
import DocumentarySection from './components/DocumentarySection';
import DigitalGallerySection from './components/DigitalGallerySection';
import PackagesSection from './components/PackagesSection';
import ProductCatalogSection from './components/ProductCatalogSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import MerakitAIChatbot from './components/MerakitAIChatbot';
import './index.css';

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const openWhatsApp = (message = '') => {
        const phoneNumber = '62'; // Update dengan nomor WhatsApp asli
        const defaultMessage = message || 'Halo, saya ingin berkunjung ke Merajut Asa Kita';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#1c120d] dark:text-[#fcf9f8] font-display overflow-x-hidden">
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#f2590d',
                        color: '#fff',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                    },
                }}
            />
            <MerakitAIChatbot />
            <Navbar
                mobileMenuOpen={mobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                openWhatsApp={openWhatsApp}
            />
            <HeroSection openWhatsApp={openWhatsApp} />
            <AboutSection />
            <DocumentarySection />
            <PackagesSection openWhatsApp={openWhatsApp} />
            <ProductCatalogSection openWhatsApp={openWhatsApp} />
            <GallerySection />
            <LocationSection openWhatsApp={openWhatsApp} />
            <FooterCTA openWhatsApp={openWhatsApp} />
            <Footer />
        </div>
    );
}

export default App;
