import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, ArrowRight } from 'lucide-react';
import { fadeIn, popIn, giftShake } from '../lib/animations';

export default function AchievementSection({ onComplete }) {
    const [isGiftOpen, setGiftOpen] = useState(false);

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <motion.h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-romantic-600 to-romantic-800 bg-clip-text text-transparent mb-6 droparb-shadow-sm">
                Happy 2 Months!
            </motion.h1>

            <motion.p className="text-xl text-slate-700 mb-8 leading-relaxed">
                I am so incredibly proud of you. <br />
                Two months of controlling sweets is amazing discipline.
                <span className="block mt-4 text-romantic-600 font-semibold italic">
                    You did it! ❤️
                </span>
            </motion.p>

            <div className="relative mt-8 mb-12 cursor-pointer group" onClick={() => setGiftOpen(true)}>
                <AnimatePresence mode="wait">
                    {!isGiftOpen ? (
                        <motion.div
                            key="closed-gift"
                            variants={giftShake}
                            whileHover="hover"
                            layout
                            className="flex flex-col items-center"
                        >
                            <div className="bg-white p-6 rounded-full shadow-lg border-2 border-romantic-200">
                                <Gift size={64} className="text-romantic-500" />
                            </div>
                            <motion.span
                                className="mt-4 text-sm font-medium text-slate-500 uppercase tracking-widest"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Tap to reveal gift
                            </motion.span>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open-gift"
                            variants={popIn}
                            initial="hidden"
                            animate="visible"
                            className="relative"
                        >
                            <img
                                src="/boots_gift.png"
                                alt="Gift Boots"
                                className="w-80 h-auto rounded-xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500"
                            />
                            {/* Sparkles effect container could go here */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {isGiftOpen && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    onClick={onComplete}
                    className="group flex items-center gap-2 px-8 py-3 bg-romantic-500 hover:bg-romantic-600 text-white rounded-full font-semibold shadow-lg shadow-romantic-300 transition-all hover:scale-105 active:scale-95"
                >
                    I have one more question...
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            )}
        </motion.div>
    );
}
