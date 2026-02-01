import { motion } from 'framer-motion';
import { floatingHeart } from '../lib/animations';

export default function Background() {
    // Generate random hearts for background effect
    const hearts = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        left: `${Math.random() * 100}%`,
        size: 20 + Math.random() * 30,
    }));

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Background Image/Gradient Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center brightness-90 contrast-110"
                style={{ backgroundImage: 'url(/background.png)' }}
            />

            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-romantic-50/60 via-romantic-100/40 to-romantic-200/60 backdrop-blur-[2px]" />

            {/* Floating Particles/Hearts */}
            {hearts.map((heart) => (
                <motion.img
                    key={heart.id}
                    src="/heart.png"
                    alt=""
                    className="absolute object-contain opacity-30"
                    style={{
                        left: heart.left,
                        width: heart.size,
                        bottom: '-10%'
                    }}
                    variants={floatingHeart}
                    initial="initial"
                    animate="animate"
                    custom={{ delay: heart.delay, duration: heart.duration }}
                />
            ))}
        </div>
    );
}
