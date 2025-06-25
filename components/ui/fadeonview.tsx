"use client";
import { motion } from "motion/react";
import { HTMLAttributes } from "react";

export default function FadeOnView({ children, threshold=0.4}: { children: React.ReactNode, threshold?: number } & HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: threshold}}
    >
      {children}
    </motion.div>
  );
}
