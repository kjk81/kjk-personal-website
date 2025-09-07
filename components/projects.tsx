"use client";

import { nextProjectTargets } from "./layout/navbar";
import {useState} from "react";
import { ImageData } from "./experience";
import { ImageProps } from "next/image";
import Image from "next/image";
import ColorText from "@/components/ui/colortext";


function MainImage({ind, ...props }: {ind: number} & ImageProps) {

    function handleClick() {
        // TODO: full screen / make bigger
    }

    return (
        <div className={`w-full h-125 mb-4 border-accent${ind == 0 ? 2 : 1} border-[2px] hover:border-[4px] transition ease duration-500`}>
            <Image className="object-cover w-full h-full" {...props} />
        </div>
    );
}

function SmallImage({index, updateSubIndex, ...props} : {index: number, updateSubIndex: (ind: number) => void} & ImageProps) {
    function handleClick() {
        updateSubIndex(index);
    }

    return (
        <div onClick={handleClick} className={`max-w-full h-40 hover:border-[2px] border-accent3 col-span-1 cursor-pointer`}>
            <Image className="object-cover w-full h-full" {...props} />
        </div>
    );
}

function ImageSelector({projectInd, imageIndex, setImageIndex, ...props} : {projectInd: number, imageIndex: number, setImageIndex: (ind: number) => void} & React.HTMLAttributes<HTMLDivElement>) {
    const data: ImageData[] = projectImageData[projectInd];

    return (
        <div className="flex flex-col" {...props}>
            <MainImage ind={projectInd} {...data[imageIndex]} />
            <div className={`hidden md:grid gap-4`} style={{gridTemplateColumns: `repeat(${data.length - 1}, minmax(0, 1fr))`}}>
                {data.map((image, index) => (
                    index != imageIndex ? <SmallImage key={index} index={index} updateSubIndex={setImageIndex} {...image}/> : null
                ))}
            </div>
        </div>
    );
}


const textData: React.ReactNode[] = [
    <p>I used <ColorText color="gt">Next.JS</ColorText>, <ColorText color="accent1">React</ColorText>, <ColorText color="accent2">Prisma</ColorText>, ShadCN, Framer Motion, and <ColorText color="accent3">Tailwind</ColorText> to create an alarm application that <ColorText color="accent1">saves</ColorText> users alarms and plays them on time as long as the website tab is open. It allows users to upload their own local sounds for use with their alarms. Using NextAuth for <ColorText color="accent2">authentication</ColorText>, it prohibits any activity beyond the welcome page without creating an account and also gives <ColorText color="gt">priviledge</ColorText> levels.</p>,
    <p>CalcSpace!!!</p>,
    <p>predicting the gpa</p>
];

// project selector like robot selector on comet app
export default function Projects() {
    const [projectInd, setProjectIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0); // index for which image is the current main image
    const titles = nextProjectTargets;

    function handleClick(index: number) {
        if (projectInd != index) {
            setProjectIndex(index);
            setImageIndex(0);
        }
    }

    function updateSubIndex(ind: number) {
        setImageIndex(ind);
    }

    return (
            <div id="projects" className="flex flex-col lg:grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr]">
                <div className="flex flex-col row-span-1 row-start-1 col-span-1 col-start-1">
                    <h2 className="text-2xl lg:text-5xl text-accent3 pb-2">Projects</h2>
                    {titles.map((title, index) => (
                        <h3 key={index} onClick={() => handleClick(index)} className={`${index == projectInd ? "text-accent1" : ""} py-2 cursor-pointer hover:underline decoration-accent1`}>{title}</h3>
                    ))}
                </div>
                <div className="hidden lg:block row-span-2 row-start-2 col-start-1 col-span-1">
                    {textData[projectInd]}
                </div>
                <ImageSelector projectInd={projectInd} imageIndex={imageIndex} setImageIndex={updateSubIndex} className="row-span-2 row-start-1 col-start-2 col-end-4"/>
                <div className="block lg:hidden row-span-2 row-start-2 col-start-1 col-span-1 pt-2">
                    <div>{textData[projectInd]}</div>
                </div>
            </div>
    );
}

// 2 images per project
const projectImageData: ImageData[][] = [
    [    
    {
        src: "/projects/wake-up-1.jpg",
        alt : "Wake Up Already Home Page",
        width : 1909,
        height : 902
    },
    {
        src: "/projects/wake-up-2.jpg",
        alt: "Wake Up Already Admin Dashboard",
        width: 1858,
        height: 875
    }],
    [
        {
            src:"/projects/calcspace-2.jpg",
            alt: "CalcSpace Enemies",
            width: 1319,
            height: 708
        },
        {
            src:"/projects/calcspace-1.jpg",
            alt: "CalcSpace Start",
            width: 1322,
            height: 699
        },
        {
            src:"/projects/calcspace-3.jpg",
            alt: "CalcSpace Ability",
            width: 1317,
            height: 705
        }
    ],
    [
        {
            src:"/projects/gpa-2.jpg",
            alt: "GPA Predictor Home",
            width: 1397,
            height: 822
        },
        {
            src:"/projects/gpa-1.jpg",
            alt: "GPA Predictor Results",
            width: 1037,
            height: 502
        },
    ]
];