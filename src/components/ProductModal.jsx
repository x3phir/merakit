import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
    if (!product) return null;

    const handleBuyOnShopee = () => {
        if (product.shopeeUrl) {
            window.open(product.shopeeUrl, '_blank');
        }
        if (onAddToCart) {
            onAddToCart(product);
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: product.title,
                text: product.description,
                url: product.shopeeUrl || window.location.href,
            }).catch(() => { });
        } else {
            navigator.clipboard.writeText(product.shopeeUrl || window.location.href);
            toast.success('Link produk disalin!', { duration: 2000 });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-[#1f1612] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                        >
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-[#2a2017] rounded-full shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <X size={24} className="text-[#1c120d] dark:text-white" />
                            </motion.button>

                            <div className="p-6 md:p-8">
                                {/* Product Image */}
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="relative w-full h-80 rounded-xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                {/* Product Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {/* Title */}
                                    <h2 className="text-3xl font-bold text-[#1c120d] dark:text-white mb-3">
                                        {product.title}
                                    </h2>

                                    {/* Price */}
                                    <div className="mb-6 pb-6 border-b border-[#e8d7ce] dark:border-white/10">
                                        <p className="text-4xl font-bold text-primary mb-2">
                                            {product.price}
                                        </p>
                                        <p className="text-[#1c120d]/60 dark:text-white/60 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                            </svg>
                                            Harga dari Shopee MERAKIT
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-6 pb-6 border-b border-[#e8d7ce] dark:border-white/10">
                                        <h3 className="text-lg font-bold text-[#1c120d] dark:text-white mb-3">
                                            Deskripsi Produk
                                        </h3>
                                        <p className="text-[#1c120d]/70 dark:text-white/70 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>


                                    {/* Action Buttons */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex gap-4"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleBuyOnShopee}
                                            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-[#D73211] text-white py-3.5 rounded-lg font-bold transition-colors"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
                                                <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.822 0-16-7.178-16-16S15.178 8 24 8s16 7.178 16 16-7.178 16-16 16z" />
                                                <path d="M24 14c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
                                            </svg>
                                            Beli di Shopee
                                            <ExternalLink size={16} />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleShare}
                                            className="px-6 py-3.5 bg-white dark:bg-[#2a2017] border border-[#e8d7ce] dark:border-white/10 text-[#1c120d] dark:text-white rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-[#3a3027] transition-colors"
                                        >
                                            <Share2 size={20} />
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
