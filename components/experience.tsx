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

function CarouselImage({ index, ...props }: { index: number } & ImageProps) {
    const borderColors = ["border-accent1", "border-accent2", "border-accent3"];
    const borderColor = borderColors[index % borderColors.length];
    return (
        <div className={`w-full h-96 ${borderColor} border-y-[4px]`}>
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
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

function ExperienceCard({
    images,
    org,
    role,
    date,
    location,
    description,
    alt,
}: {
    images: ImageData[];
    org: string;
    role: string;
    date: string;
    location: string;
    description: React.ReactNode;
    alt?: boolean;
}) {
    return (
        <FadeOnView threshold={0.2}>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16">
                {alt ? (
                    <>
                        <div>
                            <div className="flex flex-row justify-between">
                                <h3 className="font-semibold">{org}</h3>
                                <p>{date}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="text-accent1">{role}</p>
                                <p className="text-accent2">{location}</p>
                            </div>
                            <p className="py-12 text-3xl">{description}</p>
                        </div>{" "}
                        <ImageCarousel images={images} />
                    </>
                ) : (
                    <>
                        <ImageCarousel images={images} />
                        <div>
                            <div className="flex flex-row justify-between">
                                <h3 className="font-semibold">{org}</h3>
                                <p>{date}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="text-accent1">{role}</p>
                                <p className="text-accent2">{location}</p>
                            </div>
                            <p className="py-12 text-3xl">{description}</p>
                        </div>
                    </>
                )}
            </div>
        </FadeOnView>
    );
}

interface ImageData {
    src: string;
    alt: string;
    width: number;
    height: number;
}
export default function Experience() {
    const cgiImageData: ImageData[] = [
        {
            src: "/exp/cgi-personal.jpg",
            alt: "CGI Team",
            width: 1290,
            height: 578,
        },
        {
            src: "/exp/cgi.jpg",
            alt: "CGI Building",
            width: 1920,
            height: 1080,
        },
        {
            src: "/exp/cgi-sast.png",
            alt: "CGI SAST Tool",
            width: 2292,
            height: 1402,
        },
    ];
    const cometWebImageData: ImageData[] = [
        {
            src: "/exp/comet-volunteer.avif",
            alt: "Comet Volunteering",
            width: 6000,
            height: 4000,
        },
        {
            src: "/exp/ftc-robots.png",
            alt: "FTC Robots Web Viewer",
            width: 3767,
            height: 1932,
        },
        {
            src: "/exp/ftc-community.png",
            alt: "FTC Community Webpage",
            width: 3795,
            height: 1967,
        },
        {
            src: "/exp/ftc-contact.png",
            alt: "FTC Contact Webpage",
            width: 3787,
            height: 1965,
        }
    ];
    const cometScoutingImageData: ImageData[] = [
        {
            src: "/exp/ftc-scout.png",
            alt: "FTC Scouting App",
            width: 3785,
            height: 1957,
        },
        {
            src: "/exp/ftc-bar-chart.png",
            alt: "FTC Scouting Stat Analysis",
            width: 3495,
            height: 1860,
        },
        {
            src: "/exp/ftc-scout-game.png",
            alt: "FTC Scouting Game",
            width: 3760,
            height: 1932
        },
        {
            src: "/exp/ftc-qr-app.jpg",
            alt: "FTC Scouting QR Code App",
            width: 2705,
            height: 1752
        },
        {
            src: "/exp/ftc-scout-generate.png",
            alt: "FTC Scouting Generate QR Code App",
            width: 3785,
            height: 1965
        }
    ];

    return (
        <section
            id="experience"
            className="py-32 bg-background flex flex-col min-h-screen w-full"
        >
            <FadeOnView>
                <h2 className="pb-12 text-5xl font-bold">Experience</h2>
            </FadeOnView>
            <section className="flex flex-col gap-16">
                <ExperienceCard
                    images={cometWebImageData}
                    org="Comet Robotics"
                    role="Web Developer"
                    date="August 2024 - May 2025"
                    location="Haymarket, VA"
                    description={
                    <>
                        I led the creation of a new website to represent over 50 members, coordinating with graphics teams for UI design and converting ideas into CSS.
                        I also employed AWS Cloud Services and S3 Buckets for reliable hosting and prompt page-loading. In my spare time, I volunteered at several STEM events.
                    </>}
                />
                <ExperienceCard
                    images={cometScoutingImageData}
                    org="Further on Comet Robotics..."
                    role="Scouting Lead"
                    date=""
                    location=""
                    description = {<>                        I also implemented a wireless data transfer system through Python OpenCV to circumvent connection constraints during competitions. 
                        I analyzed robot performance via NumPy, Pandas, and Matplotlib to inform team strategy, propelling our team to district playoffs. </>}
                />
                <ExperienceCard
                    images={cgiImageData}
                    org="CGI Inc"
                    role="Cybersecurity Intern"
                    date="June 2024-Aug.2024"
                    location="Fairfax, VA"
                    description={
                        <>
                            During my time at CGI Inc, I evaluated AI
                            cybersecurity tools by testing them on open source
                            projects with source control, increasing engineer
                            efficiency and enterprise threat detection. I also
                            designed digital safety curriculums for nationwide
                            non-profits through in-depth consulting.
                        </>
                    }
                    alt
                />
            </section>
        </section>
    );
}
