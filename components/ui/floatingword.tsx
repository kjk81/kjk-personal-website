"use client";
import { motion } from "motion/react";
import { useMemo } from "react";

export function FloatingWord({ word }: { word: string }) {
    const { xDir, yDir, duration, delay } = useMemo(() => {
        const xDir = Math.random() > 0.5 ? 1 : -1;
        const yDir = Math.random() > 0.5 ? 1 : -1;
        const duration = 4 + Math.random() * 2; // 4s - 6s
        const delay = Math.random() * 1.5;
        return { xDir, yDir, duration, delay };
    }, []);

    return (
        <motion.span
            initial={{ x: 0, y: 0 }}
            animate={{
                x: [0, 10 * xDir, 0, -10 * xDir, 0],
                y: [0, 8 * yDir, 0, -8 * yDir, 0],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="text-foreground/80 text-xl font-semibold"
        >
            {word}
        </motion.span>
    );
}

/*const words = [
        "Game Developer",
        "Problem Solver",
        "Software Engineer",
        "Entrepeneur",
        "Researcher",
        "Road Runner",
        "Full Stack Developer",
        "Risk Taker",
        "#OpenToWork"
    ];*/

export function WordCloud({ words }: { words: string[] }) {
    return (
        <section className="relative bg-background flex items-center justify-center h-screen w-full p-12 ">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {words.map((word, i) => (
                    <FloatingWord key={word} word={word} />
                ))}
            </div>
        </section>
    );
}
