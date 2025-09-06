"use client";
import Image from "next/image";
import { ImageProps } from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselPrevious,
    CarouselNext,
    CarouselItem,
} from "@/components/ui/carousel";
import { ImageData } from "@/components/experience";
import Autoscroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

function CarouselImage({ index, ...props }: { index: number } & ImageProps) {
    const borderColors = ["border-accent1", "border-accent2", "border-accent3"];
    const borderColor = borderColors[index % borderColors.length];
    return (
        <div className={`w-full h-96 ${borderColor} border-[4px] md:border-y-[4px]`}>
            <Image className="object-cover w-full h-full" {...props} />
        </div>
    );
}

function ImageCarousel({ images }: { images: ImageData[] }) {
    const randi = Math.floor(Math.random() * 12);
    return (
        <Carousel opts={{ loop: true }}>
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <CarouselImage index={index + randi} {...image} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block"/>
            <CarouselNext className="hidden md:block"/>
        </Carousel>
    );
}

function SkillCarousel({ skills , alt }: { skills: string[] , alt?: boolean }) {
    const plugin = alt ? React.useRef(Autoplay({ delay: 1500, stopOnInteraction: false })) : React.useRef(Autoscroll({ speed: 1, stopOnInteraction: false }));

    const textColors = ["accent1", "accent2", "accent3", "gt"];
    const textColor = (index: number) => textColors[index % textColors.length];
    const randi = Math.floor(Math.random() * 12);

    return (
        <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
            <CarouselContent>
                {skills.map((skill, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                        <span className={`text-${textColor(index + randi)} flex items-center justify-center text-3xl`}>{skill}</span>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export {CarouselImage, ImageCarousel, SkillCarousel};