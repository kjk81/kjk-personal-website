"use client";

import { nextProjectTargets } from "./layout/navbar";
import {useState} from "react";
import { ImageData } from "./experience";
import { ImageProps } from "next/image";
import Image from "next/image";


function MainImage({ ...props }: ImageProps) {

    function handleClick() {
        // TODO: full screen / make bigger
    }

    return (
        <div className={`w-full h-200 hover:border-accent-3 hover:border-[4px]`}>
            <Image className="object-cover w-full h-full" {...props} />
        </div>
    );
}

function SmallImage({...props} : ImageProps) {
    function handleClick() {
        // TODO: Swap with main image
    }

    return (
        <div className={`w-full h-40 hover:border-accent-3 hover:border-[4px]`}>
            <Image className="object-cover w-full h-full" {...props} />
        </div>
    );
}

function ImageSelector({currentInd, ...props} : {currentInd: number} & React.HTMLAttributes<HTMLDivElement>) {
    const [subIndex, setSubIndex] = useState(0); // index for which image is the current main image
    const data: ImageData[] = projectImageData[currentInd];

    return (
        <div className="flex flex-col" {...props}>
            <Image {...data[subIndex]}></Image>
            <div className="hidden md:block Flex flex-row space-evenly">
                {data.map((image, index) => (
                    {index != subIndex ? <SmallImage {...image}/> : ""}
                ))}
            </div>
        </div>
    );
}

// project selector like robot selector on comet app
export default function Projects() {
    const [currentInd, setIndex] = useState(0);
    const titles = nextProjectTargets;

    function handleClick(index: number) {
        if (currentInd != index) {
            setIndex(index);
        }
    }

    return (
            <div className="flex flex-col md:grid grid-cols-3 grid-rows-3">
                <div className="flex flex-col row-span-2 row-start-1 col-span-1 col-start-1">
                    <h2>Projects</h2>
                    {titles.map((title, index) => (
                        <h3 onClick={() => handleClick(index)} className={`${index == currentInd ? "text-accent-1" : ""}`}>{title}</h3>
                    ))}
                </div>
                <ImageSelector currentInd={currentInd} className="row-span-2 row-start-1 col-start-2 col-end-auto"/>
                <div className="row-span-1 row-start-3 col-span-1">
                    <p>{textData[currentInd]}</p>
                </div>
            </div>
    );
}

// 4 images per 
const projectImageData: ImageData[][] = [
    [    
    {
        src: "",
        alt : "",
        width : 0,
        height : 0
    }],
];


const textData: string[] = [
    "",
];