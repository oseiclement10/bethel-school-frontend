import { motion } from "framer-motion";
import React from "react";

interface ZoomInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  scaleFrom?: number;
}

export default function ZoomIn({
  children,
  duration = 0.6,
  delay = 0,
  scaleFrom = 0.85,
}: ZoomInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleFrom }}
      whileInView={{ opacity: 1, scale: 1 }}
    //   viewport={{ once: false, amount: 0.2 }} 
      transition={{
        duration,
        delay,
        ease: "easeOut" as const, 
      }}
    >
      {children}
    </motion.div>
  );
}
