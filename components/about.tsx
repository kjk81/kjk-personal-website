"use client";

import { useRef } from "react";
import DownButton from "@/components/ui/downbutton";
import FadeOnView from '@/components/ui/fadeonview';
import Link from "next/link";

export default function About() {
    const aboutRef = useRef<HTMLElement>(null);

    const handleScroll = () => {
        if (aboutRef.current) {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
            // aboutRef.current?.classList.add("motion-safe:animate-whiteblack-transition"); // WIP
        }
    };
    return (
        <div className="flex flex-col justify-start items-center">
            <DownButton handleClick={handleScroll} />
            <section
                id="about"
                ref={aboutRef}
                className="relative bg-background flex flex-col items-center h-fit w-full py-12"
            >
              <FadeOnView>
                <h2 className="font-bold text-5xl py-4">About Me</h2>
                <span className="lg:text-3xl">I'm a freshman at <div className="inline text-gt">Georgia Tech</div>, majoring in Computer Science. Two of my interests include <p className="inline text-accent1">machine learning</p> and <p className="inline text-accent2">game/graphics developement</p>. You can see some of the projects I've made <Link href="#projects" className="text-accent3 underline hover:no-underline hover:text-accent3/80">here</Link>! Beyond programming, I love to hike, play sports like hockey, and read.</span>
              </FadeOnView>
            </section>
        </div>
    );
}

