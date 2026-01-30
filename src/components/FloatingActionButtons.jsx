import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingActionButtons = ({ openWhatsApp }) => {
    const [isOpen, setIsOpen] = useState(false);

    const buttons = [
        {
            icon: <MessageCircle size={24} />,
            label: 'WhatsApp',
            color: 'bg-[#25D366]',
            action: () => {
                openWhatsApp('Halo, saya tertarik dengan paket tour!');
                setIsOpen(false);
            }
        },
        {
            icon: <Phone size={24} />,
            label: 'Telepon',
            color: 'bg-blue-500',
            action: () => {
                window.open('tel:+62');
                setIsOpen(false);
            }
        },
        {
            icon: <Mail size={24} />,
            label: 'Email',
            color: 'bg-red-500',
            action: () => {
                window.open('mailto:info@merajutasakita.com');
                setIsOpen(false);
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-40">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute bottom-20 right-0 flex flex-col gap-3"
                    >
                        {buttons.map((button, index) => (
                            <motion.button
                                key={index}
                                variants={itemVariants}
                                onClick={button.action}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${button.color} text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 min-w-[140px] justify-center group`}
                                title={button.label}
                            >
                                <span className="group-hover:scale-110 transition-transform">
                                    {button.icon}
                                </span>
                                <span className="text-sm font-bold hidden md:block">
                                    {button.label}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main FAB Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    rotate: isOpen ? 45 : 0,
                    scale: isOpen ? 1.1 : 1
                }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                }}
                className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-full shadow-xl hover:shadow-2xl w-14 h-14 flex items-center justify-center text-2xl font-bold transition-all"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
};

export default FloatingActionButtons;
