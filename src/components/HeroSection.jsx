import React, { useState } from 'react';

const HeroSection = ({ openWhatsApp }) => {
    const [isMuted, setIsMuted] = useState(true);

    const toggleSound = () => {
        const videoElement = document.getElementById('heroVideo');
        if (videoElement) {
            videoElement.muted = !videoElement.muted;
            setIsMuted(!isMuted);
        }
    };



    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative w-full pt-28 pb-10 px-4 md:px-8 lg:px-10">
            <div className="w-full max-w-[1400px] mx-auto rounded-[2rem] md:rounded-[3rem] h-[600px] md:h-[750px] relative overflow-hidden bg-gray-900 shadow-2xl">
                {/* Video Background */}
                <video
                    id="heroVideo"
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>

                {/* Fallback Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105 hidden"
                    style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRZW5jDnn1IJG1lOvkHxR37spR9pYYtaJTfTQzh9tgp241n711PhpobRg3u0giyOzGpYaPQxvRXN7JXcZZAZRgZcVXipjT7pskt2SfspADJlLEvZMQ40rdtl4nNpMHjh7fX1o5zq56_ErP6tx76_sgWAXjuOtFV7XZRIJWwlrI353As03B5JCS6SDrrQ4nX12kTHp9uVCTdAtizK8NpI0MxTQ9-7ItAkm9YzMGTZTCJ5dCZC5dEemES78Ohct-Mc3zCOUhQz6-w9oL')`
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
                    <div className="max-w-[850px] flex flex-col items-center gap-3">
                        <h1 className="text-white text-4xl md:text-7xl leading-[1.1] tracking-tight font-sans font-bold animate-fade-in-up">
                            MERAKIT
                        </h1>
                        <p
                            className="text-lg md:text-xl text-white/90 max-w-2xl font-light font-sans animate-fade-in-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            Komunitas yang merajut harapan, karya, dan kebersamaan di Kampung Binong Jati.
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up"
                            style={{ animationDelay: '0.4s' }}
                        >
                            <button
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-white shadow-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                            >
                                Kenali Komunitas Kami
                            </button>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex h-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-10 text-base font-bold text-white hover:bg-white/20 transition-all"
                            >
                                <span className="material-symbols-outlined mr-2">play_circle</span>
                                <span>Tonton Profil</span>
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    id="soundButton"
                    onClick={toggleSound}
                    className="absolute bottom-10 right-10 z-20 flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-md hover:bg-white/20 transition-all border border-white/20 text-white text-xs font-bold tracking-widest uppercase"
                >
                    <span className="material-symbols-outlined text-lg">
                        {isMuted ? 'volume_off' : 'volume_up'}
                    </span>
                    <span className="hidden sm:inline">{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
            </div>

            {/* Video Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
                    <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-all transform hover:scale-110"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        <video
                            className="w-full h-auto max-h-[80vh]"
                            controls
                            autoPlay
                        >
                            <source src="/hero.mp4" type="video/mp4" />
                            Browser Anda tidak mendukung tag video.
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
