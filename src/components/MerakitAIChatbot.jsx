import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, Loader } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { CHATBOT_KNOWLEDGE } from '../constants';

const MerakitAIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'Halo! Saya MerakitAI 🧵 Asisten AI khusus untuk Merajut Asa Kita. Saya siap membantu Anda dengan informasi tentang workshop rajut, paket tour, lokasi, manfaat merajut, dan segala hal tentang kampung rajut kami. Ada yang bisa saya bantu?',
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const genAIRef = useRef(null);
    const chatRef = useRef(null);

    // Build system prompt from knowledge base
    const buildSystemPrompt = () => {
        const kb = CHATBOT_KNOWLEDGE;
        return `Anda adalah MerakitAI, asisten AI resmi untuk MERAKIT (Merajut Asa Kita). Anda harus menjawab pertanyaan berdasarkan informasi berikut:

=== TENTANG MERAKIT ===
${kb.about}

=== VISI KAMI ===
${kb.vision}

=== LOKASI ===
Alamat: ${kb.location.address}
Dekat dengan: ${kb.location.near}

=== AKTIVITAS & LAYANAN ===
${kb.activities.map((a, i) => `${i + 1}. ${a}`).join('\n')}

=== MANFAAT MERAJUT ===
${kb.benefits.map((b, i) => `${i + 1}. ${b}`).join('\n')}

=== PAKET TOUR ===
${kb.packages.map(p => `• ${p.name} (${p.highlight}): ${p.description}`).join('\n')}

=== TUTORIAL GELANG RAJUT ===
Langkah-langkah membuat gelang rajut:
${kb.braceletTutorial.map((step, i) => `${i + 1}. ${step}`).join('\n')}

=== KONTAK ===
Instagram: ${kb.contact.instagram}
Email: ${kb.contact.email}
WhatsApp: ${kb.contact.phone.join(' / ')}

=== PANDUAN INTERAKSI ===
1. Selalu jawab dengan ramah, hangat, dan informatif dalam Bahasa Indonesia
2. Gunakan emoji yang relevan untuk membuat percakapan lebih hidup 🧵✨
3. Jika ditanya tentang harga spesifik, arahkan ke WhatsApp: "Untuk informasi harga detail, silakan hubungi kami via WhatsApp di ${kb.contact.phone[0]} ya! 📱"
4. Jika ada pertanyaan di luar pengetahuan Anda, sarankan menghubungi langsung via WhatsApp atau Instagram
5. Dorong pengunjung untuk datang dan merasakan pengalaman langsung
6. Jika ditanya cara membuat sesuatu (tutorial), berikan langkah-langkah yang jelas
7. Promosikan nilai-nilai inklusivitas dan pemberdayaan komunitas
8. Jawab dengan singkat tapi informatif (maksimal 3-4 paragraf)

Ingat: Anda adalah duta yang antusias untuk MERAKIT. Bantu pengunjung menemukan informasi yang mereka butuhkan!`;
    };

    // Initialize Gemini AI
    useEffect(() => {
        const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
        if (apiKey) {
            genAIRef.current = new GoogleGenerativeAI(apiKey);
        }
    }, []);

    // Auto scroll to latest message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initialize chat with system prompt when first message is sent
    const initializeChat = async () => {
        if (!genAIRef.current) return null;

        const model = genAIRef.current.getGenerativeModel({
            model: 'gemini-2.0-flash',
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            },
        });

        const systemPrompt = buildSystemPrompt();

        // Start chat with system instruction embedded in first exchange
        const chat = model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: `Sistem: ${systemPrompt}\n\nSekarang, perkenalkan diri Anda sebagai MerakitAI.` }]
                },
                {
                    role: 'model',
                    parts: [{ text: 'Halo! Saya MerakitAI 🧵 Asisten AI khusus untuk Merajut Asa Kita. Saya siap membantu Anda dengan informasi tentang workshop rajut, paket tour, lokasi, manfaat merajut, dan segala hal tentang kampung rajut kami. Ada yang bisa saya bantu?' }]
                }
            ]
        });

        return chat;
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessageText = inputValue.trim();

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            text: userMessageText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            if (!genAIRef.current) {
                throw new Error('Gemini API Key tidak dikonfigurasi. Silakan set REACT_APP_GEMINI_API_KEY di .env file');
            }

            // Initialize chat if not already done
            if (!chatRef.current) {
                chatRef.current = await initializeChat();
            }

            if (!chatRef.current) {
                throw new Error('Gagal menginisialisasi chat');
            }

            const result = await chatRef.current.sendMessage(userMessageText);
            const responseText = result.response.text();

            const botMessage = {
                id: messages.length + 2,
                text: responseText,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Chatbot error:', error);

            // Fallback to local knowledge base response
            const fallbackResponse = getFallbackResponse(userMessageText);

            if (fallbackResponse) {
                const botMessage = {
                    id: messages.length + 2,
                    text: fallbackResponse,
                    sender: 'bot',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, botMessage]);
            } else {
                const errorMessage = {
                    id: messages.length + 2,
                    text: `❌ Maaf, terjadi kesalahan. ${error.message}. Silakan coba lagi atau hubungi kami via WhatsApp di ${CHATBOT_KNOWLEDGE.contact.phone[0]} 📱`,
                    sender: 'error',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, errorMessage]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Fallback responses when API fails
    const getFallbackResponse = (query) => {
        const lowerQuery = query.toLowerCase();
        const kb = CHATBOT_KNOWLEDGE;

        if (lowerQuery.includes('tentang') || lowerQuery.includes('apa itu') || lowerQuery.includes('merakit')) {
            return `🧵 ${kb.about}\n\n✨ Visi kami: ${kb.vision}`;
        }

        if (lowerQuery.includes('lokasi') || lowerQuery.includes('alamat') || lowerQuery.includes('dimana')) {
            return `📍 Lokasi kami:\n${kb.location.address}\n\n🗺️ Dekat dengan: ${kb.location.near}\n\nSilakan kunjungi kami! 🧶`;
        }

        if (lowerQuery.includes('kontak') || lowerQuery.includes('hubungi') || lowerQuery.includes('whatsapp') || lowerQuery.includes('telepon')) {
            return `📞 Hubungi Kami:\n\n📱 WhatsApp: ${kb.contact.phone.join(' / ')}\n📧 Email: ${kb.contact.email}\n📸 Instagram: ${kb.contact.instagram}\n\nKami siap membantu! ✨`;
        }

        if (lowerQuery.includes('manfaat') || lowerQuery.includes('benefit') || lowerQuery.includes('keuntungan')) {
            return `✨ Manfaat Merajut:\n\n${kb.benefits.map((b, i) => `${i + 1}. ${b}`).join('\n')}\n\nAyo mulai merajut bersama kami! 🧵`;
        }

        if (lowerQuery.includes('paket') || lowerQuery.includes('tour') || lowerQuery.includes('workshop') || lowerQuery.includes('harga')) {
            return `🎫 Paket Tour Kami:\n\n${kb.packages.map(p => `• ${p.name} (${p.highlight})\n  ${p.description}`).join('\n\n')}\n\n💬 Untuk info harga, hubungi WhatsApp: ${kb.contact.phone[0]}`;
        }

        if (lowerQuery.includes('aktivitas') || lowerQuery.includes('kegiatan') || lowerQuery.includes('layanan')) {
            return `🎯 Aktivitas & Layanan Kami:\n\n${kb.activities.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\nYuk bergabung bersama kami! 🧶`;
        }

        if (lowerQuery.includes('gelang') || lowerQuery.includes('tutorial') || lowerQuery.includes('cara') || lowerQuery.includes('buat')) {
            return `🧶 Tutorial Membuat Gelang Rajut:\n\n${kb.braceletTutorial.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n💡 Ingin belajar langsung? Ikuti workshop kami! Hubungi: ${kb.contact.phone[0]}`;
        }

        if (lowerQuery.includes('instagram') || lowerQuery.includes('ig') || lowerQuery.includes('sosmed')) {
            return `📸 Follow Instagram kami: ${kb.contact.instagram}\n\nTemukan inspirasi rajut dan update kegiatan terbaru kami di sana! ✨`;
        }

        // Default - no fallback, let error show
        return null;
    };

    // Quick action buttons
    const quickActions = [
        { label: '📍 Lokasi', query: 'Dimana lokasi MERAKIT?' },
        { label: '🎫 Paket Tour', query: 'Apa saja paket tour yang tersedia?' },
        { label: '✨ Manfaat', query: 'Apa manfaat merajut?' },
        { label: '📞 Kontak', query: 'Bagaimana cara menghubungi MERAKIT?' },
    ];

    const handleQuickAction = (query) => {
        setInputValue(query);
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-40 font-display">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute bottom-20 right-0 w-96 bg-white dark:bg-[#1f1612] rounded-2xl shadow-2xl border border-[#e8d7ce] dark:border-white/10 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="text-2xl"
                                >
                                    🧵
                                </motion.div>
                                <div>
                                    <h3 className="font-bold text-lg">MerakitAI</h3>
                                    <p className="text-xs text-white/80">Asisten Wisata Rajut</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Quick Actions */}
                        {messages.length <= 1 && (
                            <div className="px-4 py-3 bg-[#faf7f5] dark:bg-[#1a1310] border-b border-[#e8d7ce] dark:border-white/10">
                                <p className="text-xs text-[#1c120d]/60 dark:text-white/60 mb-2">Pertanyaan cepat:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickActions.map((action, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuickAction(action.query)}
                                            className="px-3 py-1.5 text-xs bg-white dark:bg-[#2a2218] rounded-full border border-[#e8d7ce] dark:border-white/10 hover:border-primary hover:text-primary transition-colors"
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Messages Container */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background-light dark:bg-background-dark">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] px-4 py-3 rounded-2xl ${message.sender === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : message.sender === 'error'
                                                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-bl-none'
                                                : 'bg-[#f0f0f0] dark:bg-[#2a2218] text-[#1c120d] dark:text-white rounded-bl-none'
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">
                                            {message.text}
                                        </p>
                                        <p className={`text-xs mt-2 ${message.sender === 'user'
                                            ? 'text-white/70'
                                            : 'text-[#1c120d]/50 dark:text-white/50'
                                            }`}>
                                            {message.timestamp.toLocaleTimeString('id-ID', {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-[#f0f0f0] dark:bg-[#2a2218] text-[#1c120d] dark:text-white px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                                        <Loader size={16} className="animate-spin" />
                                        <span className="text-sm">MerakitAI sedang mengetik...</span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form
                            onSubmit={sendMessage}
                            className="border-t border-[#e8d7ce] dark:border-white/10 p-4 bg-white dark:bg-[#1f1612]"
                        >
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Tanya MerakitAI..."
                                    disabled={isLoading}
                                    className="flex-1 px-4 py-2 rounded-lg border border-[#e8d7ce] dark:border-white/10 bg-white dark:bg-[#2a2218] text-[#1c120d] dark:text-white placeholder-[#1c120d]/40 dark:placeholder-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={isLoading || !inputValue.trim()}
                                    className="p-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={20} />
                                </motion.button>
                            </div>
                        </form>

                        {/* Footer Info */}
                        <div className="border-t border-[#e8d7ce] dark:border-white/10 px-4 py-2 bg-[#f9f5f2] dark:bg-[#0d0a08] text-xs text-[#1c120d]/60 dark:text-white/60 text-center">
                            💡 Powered by Gemini AI • Tanya apapun tentang MERAKIT!
                        </div>
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
                className="relative bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-full shadow-xl hover:shadow-2xl w-14 h-14 flex items-center justify-center text-2xl font-bold transition-all"
                title="MerakitAI Chatbot"
            >
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <>
                        <MessageCircle size={24} />
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full"
                        />
                    </>
                )}
            </motion.button>
        </div>
    );
};

export default MerakitAIChatbot;
