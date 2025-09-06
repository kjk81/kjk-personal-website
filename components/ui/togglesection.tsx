"use client";
import { useState, useRef } from "react";
import { Button } from "./button";
function ToggleButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
    return (
        <Button variant="outline" onClick={onClick} className={`text-3xl ${isOpen ? "sticky" : ""}`}>
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

        setIsOpen(!isOpen);
    }

    return (
        <section>
            <div className="flex justify-center align-center">
                <ToggleButton isOpen={isOpen} onClick={handleToggle} />
            </div>
            {isOpen && (
                <div ref={detailsRef} className="mt-4">
                    {children}
                </div>
            )}
        </section>
    );
}