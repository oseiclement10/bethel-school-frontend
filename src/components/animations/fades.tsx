import { motion, useInView, useAnimationControls, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    distance?: number;
}

export function FadeUp({
    children,
    delay = 0,
    duration = 0.7,
    distance = 30,
}: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: distance }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay, duration, ease: "easeOut" }}
            exit={{ opacity: 0, y: distance }}
        >
            {children}
        </motion.div>
    );
}

;

interface FadeUpStaggerProps {
    children: React.ReactNode;
    delayChildren?: number;
    stagger?: number;
    distance?: number;
    duration?: number;
    className?: string;
}



interface FadeUpStaggerProps {
    children: React.ReactNode;
    delayChildren?: number;
    stagger?: number;
    distance?: number;
    duration?: number;
    className?: string;
}

export function FadeUpStagger({
    children,
    delayChildren = 0.1,
    stagger = 0.15,
    distance = 20,
    duration = 0.6,
    className
}: FadeUpStaggerProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 });
    const controls = useAnimationControls();

    const { scrollY } = useScroll();
    const [lastY, setLastY] = useState(0);
    const [scrollingDown, setScrollingDown] = useState(true);

    useEffect(() => {
        return scrollY.on("change", (current) => {
            setScrollingDown(current > lastY);
            setLastY(current);
        });
    }, [scrollY, lastY]);

    useEffect(() => {
        if (isInView && scrollingDown) {
            controls.start("show");
        }
    }, [isInView, scrollingDown]);

    const container = {
        hidden: {},
        show: {
            transition: {
                delayChildren,
                staggerChildren: stagger,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: distance },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={container}
            initial="hidden"
            animate={controls}
        >
            {React.Children.toArray(children).map((child, i) => (
                <motion.div key={i} variants={item}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}


