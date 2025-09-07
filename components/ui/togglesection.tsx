"use client";
import { useState, useRef } from "react";
import { Button } from "./button";
function ToggleButton({ isOpen, handle }: { isOpen: boolean; handle: () => void }) {
    return (
        <button onClick={handle} className={`p-2 text-foreground transition-colors border rounded-sm border-foreground/[0.5] hover:bg-foreground hover:text-background cursor-pointer text-3xl`}>
            {isOpen ? "Hide ▲" : "See More ▼"}
        </button>
    );
}


export default function ToggleSection({children} : {children?: React.ReactNode} & React.HTMLAttributes<HTMLDivElement>) {
    const [isOpen, setIsOpen] = useState(false);
    const detailsRef = useRef<HTMLDivElement>(null);

    function handleToggle() {
        setIsOpen(prev => !prev);

        // scroll down to details
        if (detailsRef.current) {
            detailsRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section>
            <div className={`flex justify-center ${isOpen ? "md:sticky md:top-1 md:z-10" : ""} items-center`}>
                <ToggleButton isOpen={isOpen} handle={handleToggle} />
            </div>
            {isOpen ? (
                <div ref={detailsRef} className="mt-4">
                    {children}
                </div>
            ): null }
        </section>
    );
}