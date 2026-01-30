import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({
    subtitle,
    title,
    description,
    align = 'center',
    showDivider = true
}) => {
    const alignmentClasses = {
        center: 'text-center',
        left: 'text-left',
        right: 'text-right'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`mb-12 ${alignmentClasses[align]}`}
        >
            {showDivider && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={`h-1 bg-gradient-to-r from-primary to-primary/40 rounded-full mb-4 ${align === 'center' ? 'mx-auto w-12' : 'w-12'
                        }`}
                />
            )}

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold text-primary uppercase tracking-widest mb-3"
                >
                    {subtitle}
                </motion.p>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-[#1c120d] dark:text-white mb-4 leading-tight"
            >
                {title}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="text-base text-[#1c120d]/70 dark:text-white/70 max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionHeader;
