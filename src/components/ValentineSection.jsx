import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';
import { containerStagger, popIn } from '../lib/animations';
import confetti from 'canvas-confetti';

export default function ValentineSection() {
    const [response, setResponse] = useState(null);

    const handleYes = (answer) => {
        setResponse(answer);
        fireConfetti();
    };

    const fireConfetti = () => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    if (response) {
        return (
            <motion.div
                className="flex flex-col items-center justify-center min-h-[80vh] text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="mb-6 text-romantic-500"
                >
                    <Heart size={100} fill="currentColor" />
                </motion.div>
                <h2 className="text-5xl font-bold text-romantic-700 mb-4">Yay! ❤️</h2>
                <p className="text-2xl text-slate-700">Can't wait to see you.</p>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-[90vh] px-4 w-full max-w-4xl mx-auto"
            variants={containerStagger}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={popIn} className="mb-8">
                <Heart size={64} className="text-romantic-500 mx-auto animate-pulse-slow" fill="#ff3366" stroke="none" />
            </motion.div>

            <motion.h2
                className="text-4xl md:text-6xl font-bold text-slate-800 mb-12 text-center"
                variants={popIn}
            >
                Will you be my Valentine?
            </motion.h2>

            <motion.div
                className="flex flex-col md:flex-row gap-6 w-full justify-center items-center"
                variants={containerStagger}
            >
                {['Yes', 'Of course', 'Always ❤️'].map((text, idx) => (
                    <motion.button
                        key={idx}
                        variants={popIn}
                        whileHover={{ scale: 1.1, backgroundColor: '#c20e3a' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleYes(text)}
                        className="w-full md:w-auto px-10 py-4 bg-romantic-500 text-white text-xl font-bold rounded-2xl shadow-xl shadow-romantic-200 transition-colors"
                    >
                        {text}
                    </motion.button>
                ))}
            </motion.div>
        </motion.div>
    );
}
