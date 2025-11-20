import { motion } from "framer-motion";
import React from "react";

interface SlideProps {
    children: React.ReactNode;
    distance?: number;
    duration?: number;
    delay?: number;
}

export function SlideFromLeft({
    children,
    distance = 50,
    duration = 0.8,
    delay = 0.8,
}: SlideProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -distance }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration, delay, ease: "easeOut" as const }}
        >
            {children}
        </motion.div>
    );
}


interface SlideProps {
    children: React.ReactNode;
    distance?: number;
    duration?: number;
    delay?: number;
}

export function SlideFromRight({
    children,
    distance = 50,
    duration = 0.8,
    delay = 0.8,
}: SlideProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: distance }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration, delay, ease: "easeOut" as const }}
        >
            {children}
        </motion.div>
    );
}
