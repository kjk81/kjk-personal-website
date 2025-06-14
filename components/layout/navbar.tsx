"use client";

import Link from "next/link";

import {useState} from "react";

function PlusButton({handleClick, open}: {handleClick?: () => void, open : boolean}) {
    return (
        <button onClick={handleClick} className="px-1.5 transition-colors border rounded-sm border-foreground/[0.5] ml-2 cursor-pointer hover:bg-foreground hover:text-background">
            {open ? '-' : '+' }
        </button>
    );
}

function NavLink({target}: {target: string}) {
    return (
        <Link href={`#${target.toLowerCase()}`} className="p-3 text-4xl md:text-2xl hover:text-foreground/80 transition-colors">
            {target}
        </Link>
    );
}

function NavLinkExtended({target, nextTargets}: {target: string, nextTargets?: string[]}) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex flex-col w-full py-2 text-4xl md:text-2xl">
            <div className={`p-3 flex justify-center md:justify-start w-full transition-[border-color] border-b ease-in duration-300 ${isOpen ? "border-foreground" : "border-foreground/[0]"}`}>
                <Link href={`#${target.toLowerCase()}`} className="hover:text-foreground/80 transition-colors">
                    {target}
                </Link>
                <PlusButton handleClick={handleClick} open={isOpen} />
            </div>
            <ul className={`list-none ml-4 overflow-hidden transition-[max-height] duration-300 ease-in ${isOpen ? "max-h-64" : "max-h-0"}`}>
                {nextTargets?.map((nextTarget) => (
                    <li key={nextTarget} className="my-5 text-center md:text-left">
                        <Link href={`#${nextTarget.split(' ')[0].toLowerCase()}`} className="py-2 text-foreground hover:text-foreground/80 transition-colors">
                            {nextTarget}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
            

function Links() {
    const targets = [
        "About",
        "Experience",
        "Projects",
        "Contact",
    ];

    const nextProjectTargets = [
        "Fantasy 3D Game",
        "MNIST Classifier",
        "AVL Tree Interface",
    ];

    return (
        <ul className="list-none">
            <h1 className="md:ml-2 text-5xl md:text-3xl text-center md:text-left mb-8">
                <Link href="#home" className="hover:text-foreground/80 transition-colors">
                    KJ Kastning
                </Link>
            </h1>
            {targets.map((target) => (
                <li key={target} className="my-4 flex justify-center md:justify-start">
                    {target === "Projects" ? <NavLinkExtended target={target} nextTargets={nextProjectTargets}/> : <NavLink target={target} />}
                </li>
            ))}
        </ul>
    );
}

function DropButton({open, click} : {open: boolean, click?: () => void}) {

    return (
        <button onClick={click} className="absolute text-5xl p-4 md:hidden top-4 right-4 px-2 py-1 text-foreground transition-colors border rounded-sm border-foreground/[0.5] cursor-pointer hover:bg-foreground hover:text-background">
            {open ? 'X' : '☰'}
        </button>
    );
}

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const total_width = 48 + 16; // Width of the navbar in pixels including margin

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return(
        <div className="text-foreground m-8 ml-0 mt-0 min-h-screen w-screen md:w-48 fixed top-0 left-0 z-50 md:border-r md:border-foreground/[0.1]">
            <DropButton click={handleClick} open={isOpen}/>
            <nav className={`min-h-screen md:pl-4 pt-6 bg-foreground/[0.02] flex justify-center h-full transition-opacity duration-150 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:opacity-100 md:pointer-events-auto`}>
                <Links />
            </nav>
        </div>
    );
}