"use client";

import FadeOnView from "@/components/ui/fadeonview";
import Image from "next/image";
import { ImageProps } from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselPrevious,
    CarouselNext,
    CarouselItem,
} from "@/components/ui/carousel";

function CarouselImage({ ...props }: ImageProps) {
    return (
        <div className="w-full h-96">
            <Image className="object-cover w-full h-full" {...props} />
        </div>
    );
}

function ImageCarousel({ images }: { images: React.ReactNode[] }) {
    return (
        <Carousel opts={{ loop: true }}>
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>{image}</CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default function Experience() {
    const cgiImages = [
        <CarouselImage
            key="1"
            src="/exp/cgi-personal.jpg"
            alt="CGI Team"
            width={1290}
            height={578}
        />,
        <CarouselImage
            key="2"
            src="/exp/cgi.jpg"
            alt="CGI Building"
            width={1920}
            height={1080}
        />,
    ];
    return (
        <section
            id="experience"
            className="py-32 bg-background flex flex-col h-screen w-full"
        >
            <FadeOnView>
                <h2 className="pb-12 text-5xl font-bold">Experience</h2>
            </FadeOnView>
            <FadeOnView>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16">
                    <ImageCarousel images={cgiImages} />
                    <div>
                        <div className="flex flex-row justify-between">
                            <h3 className="font-semibold">CGI Inc</h3>
                            <p>June 2024 - August 2024</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-accent1">Cybersecurity Intern</p>
                            <p className="text-accent2">Fairfax, VA</p>
                        </div>
                        <p className="py-12">
                            During my time at CGI Inc, I evaluated AI
                            cybersecurity tools by testing them on open source
                            projects with source control, increasing engineer
                            efficiency and enterprise threat detection. I also
                            designed digital safety curriculums for nationwide
                            non-profits through in-depth consulting.
                        </p>
                    </div>
                </div>
            </FadeOnView>
        </section>
    );
}
