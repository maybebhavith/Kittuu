export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 }
    }
};

export const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export const giftShake = {
    hover: {
        rotate: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.5 }
    }
};

export const floatingHeart = {
    initial: { y: 0, opacity: 0 },
    animate: (custom) => ({
        y: -100,
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.8],
        transition: {
            duration: custom.duration || 4,
            repeat: Infinity,
            delay: custom.delay || 0,
            ease: "easeInOut"
        }
    })
};
