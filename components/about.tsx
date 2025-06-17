"use client";

import { useRef } from "react";
import DownButton from "@/components/ui/downbutton";

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      aboutRef.current?.classList.add("motion-safe:animate-whiteblack-transition");
    }
  };

  return (
    <>
      <DownButton handleClick={handleScroll} />
      <section id="about" ref={aboutRef} className="bg-foreground flex flex-col md:flex-row h-screen w-full p-24 ">

      </section>
    </>
  );
}
