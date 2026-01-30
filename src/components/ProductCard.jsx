import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';


const ProductCard = ({ id, image, title, description, price, sales, rating, shopeeUrl, delay = 0, onAddToCart, onProductClick }) => {
    const handleBuyOnShopee = (e) => {
        e.stopPropagation();
        if (shopeeUrl) {
            window.open(shopeeUrl, '_blank');
        }
    };

    const handleCardClick = () => {
        if (onProductClick) {
            onProductClick({ id, image, title, description, price, sales, rating, shopeeUrl });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -10,
                boxShadow: '0 20px 50px rgba(238, 77, 45, 0.15)'
            }}
            transition={{
                duration: 0.4,
                delay: parseFloat(delay)
            }}
            viewport={{ once: true, amount: 0.3 }}
            onClick={handleCardClick}
            className="flex flex-col rounded-xl border border-[#e8d7ce] dark:border-white/10 bg-white dark:bg-[#1f1612] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
        >
            {/* Product Image Container */}
            <motion.div
                className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Product Content */}
            <div className="flex flex-col flex-grow p-4">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#1c120d] dark:text-white mb-2 line-clamp-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#1c120d]/70 dark:text-white/70 mb-4 line-clamp-2 flex-grow">
                    {description}
                </p>

                {/* Price */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: parseFloat(delay) + 0.15 }}
                    viewport={{ once: true }}
                    className="mb-4"
                >
                    <p className="text-primary font-bold text-xl">{price}</p>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ delay: parseFloat(delay) + 0.2 }}
                        viewport={{ once: true }}
                        onClick={handleBuyOnShopee}
                        className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-[#D73211] text-white py-2.5 rounded-lg font-semibold transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
                            <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.822 0-16-7.178-16-16S15.178 8 24 8s16 7.178 16 16-7.178 16-16 16z" />
                            <path d="M24 14c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
                        </svg>
                        Beli di Shopee
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ delay: parseFloat(delay) + 0.2 }}
                        viewport={{ once: true }}
                        onClick={handleCardClick}
                        className="p-2.5 bg-white dark:bg-[#2a2017] border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300"
                    >
                        <ExternalLink size={20} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
