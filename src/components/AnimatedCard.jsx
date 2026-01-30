import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedCard = ({
    icon,
    title,
    description,
    actionText,
    onAction,
    delay = 0,
    variant = 'default'
}) => {
    const variants = {
        default: {
            initial: { opacity: 0, y: 20 },
            whileHover: { y: -10, boxShadow: '0 20px 40px rgba(242, 89, 13, 0.15)' },
            transition: { duration: 0.3 }
        },
        gradient: {
            initial: { opacity: 0, x: -20 },
            whileHover: { x: 5 },
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            initial={variants[variant]?.initial}
            whileInView={variants[variant]?.initial === variants[variant]?.initial ? { opacity: 1, y: 0, x: 0 } : {}}
            whileHover={variants[variant]?.whileHover}
            transition={{ ...variants[variant]?.transition, delay }}
            viewport={{ once: true, amount: 0.3 }}
            className={`relative p-6 rounded-2xl border border-[#e8d7ce] dark:border-white/10 overflow-hidden group cursor-pointer ${variant === 'gradient'
                    ? 'bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5'
                    : 'bg-white dark:bg-[#1f1612]'
                }`}
        >
            {/* Animated background blob */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/10 pointer-events-none"
            />

            <div className="relative z-10">
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ delay: delay + 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors"
                >
                    <span className="text-2xl">{icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1c120d] dark:text-white mb-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#1c120d]/60 dark:text-white/60 mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Action Button */}
                {actionText && (
                    <motion.button
                        onClick={onAction}
                        whileHover={{ gap: 8 }}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                        {actionText}
                        <ArrowRight size={16} />
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};

export default AnimatedCard;
