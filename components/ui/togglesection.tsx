"use client";
import { useState, useRef } from "react";
import { Button } from "./button";
function ToggleButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
    return (
        <Button variant="outline" onClick={onClick} className={`cursor-pointer text-3xl`}>
            {isOpen ? "Hide ▲" : "See More ▼"}
        </Button>
    );
}


export default function ToggleSection({children} : {children?: React.ReactNode} & React.HTMLAttributes<HTMLDivElement>) {
    const [isOpen, setIsOpen] = useState(false);
    const detailsRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        // scroll down to details
        if (detailsRef.current) {
            detailsRef.current?.scrollIntoView({ behavior: "smooth" });
        }

        setIsOpen(prev => !prev);
    }

    return (
        <section>
            <div className={`flex justify-center ${isOpen ? "md:sticky md:top-1 md:z-1" : ""} items-center`}>
                <ToggleButton isOpen={isOpen} onClick={handleToggle} />
            </div>
            {isOpen ? (
                <div ref={detailsRef} className="mt-4">
                    {children}
                </div>
            ): null }
        </section>
    );
}