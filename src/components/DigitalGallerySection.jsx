import React from 'react';

const DigitalGallerySection = () => {
    return (
        <section style={{ marginTop: '40px' }}>
            <h2 style={{ marginBottom: '20px' }}>
                <span className="material-symbols-outlined">checkroom</span> Digital Knit Gallery (QR Info)
            </h2>
            <div className="knit-grid">
                <div className="knit-card">
                    <div className="knit-img">
                        <span className="material-symbols-outlined text-4xl">image</span>
                    </div>
                    <div style={{ padding: '15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <span className="auth-badge">Verified Authentic</span>
                            <small>ID: #KNIT001</small>
                        </div>
                        <h4 style={{ color: '#1c120d' }}>Classic Cardigan Blue</h4>
                        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
                            Bahan: Woll Premium<br />
                            Waktu Pengerjaan: 14 Hari<br />
                            Instruksi Cuci: Hand wash only
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalGallerySection;
