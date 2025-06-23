"use client";
import { useEffect, useRef, useState } from "react";
import {HTMLAttributes} from "react";

export default function FadeOnScroll({
    children,
    ...props
}: {
    children: React.ReactNode; 
}
    & HTMLAttributes<HTMLDivElement>
) {
    const [isVisible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.intersectionRatio >= 0.3);
            },
            { threshold: [0, 0.3, 1] }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect(); // not sure what this line does
    }, []);

    return <div ref={ref} className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events: none"
    }`} {...props}>
        {children}
    </div>;
}
