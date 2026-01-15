import React from 'react';

const Navbar = ({ mobileMenuOpen, toggleMobileMenu, openWhatsApp }) => {
    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Impact', href: '#impact' },
        { label: 'Packages', href: '#packages' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Lokasi', href: '#location' },
    ];

    return (
        <>
            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <div
                className={`mobile-menu fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-background-dark z-50 shadow-2xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
                        <h3 className="text-lg font-bold">Menu</h3>
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <nav className="flex-1 p-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={toggleMobileMenu}
                                className="block py-4 text-lg font-bold hover:text-primary transition-colors border-b border-gray-100 dark:border-white/5"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
                <div className="w-full max-w-[1280px] rounded-full border border-white/20 bg-white/70 backdrop-blur-md dark:bg-background-dark/70 dark:border-white/10 shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between px-6 py-3 lg:px-8">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-9 rounded-full bg-primary text-white">
                                <span className="material-symbols-outlined text-xl">gesture</span>
                            </div>
                            <h2 className="text-base font-bold leading-tight tracking-tight text-[#1c120d] dark:text-white">
                                Merajut Asa Kita
                            </h2>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-wider"
                                    href={item.href}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden flex items-center justify-center text-[#1c120d] dark:text-white"
                            >
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
