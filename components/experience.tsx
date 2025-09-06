import FadeOnView from "@/components/ui/fadeonview";
import {ImageCarousel, SkillCarousel} from "@/components/ui/imagecarousel";
import ToggleSection from "@/components/ui/togglesection";
import { HTMLAttributes } from "react";

function ExperienceCard({
    images,
    org,
    role,
    date,
    location,
    description,
    alt,
    skills,
    ...props
}: {
    images: ImageData[];
    org: string;
    role: string;
    date: string;
    location: string;
    description: React.ReactNode;
    alt?: boolean;
    skills?: string[];
} & HTMLAttributes<HTMLDivElement>) {
    const randi = Math.floor(Math.random() * 12);
    return (
        <FadeOnView threshold={0.2}>
            <div className="px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 lg:gap-16 text-xl md:text-3xl" {...props}>
                {alt ? (
                    <>
                        <div>
                            <div className="flex flex-row justify-between">
                                <h3 className="font-semibold">{org}</h3>
                                <p className="text-right">{date}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="text-accent1">{role}</p>
                                <p className="text-accent2 text-right">{location}</p>
                            </div>
                            <p className="hidden md:block py-12">{description}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <ImageCarousel images={images} randi={randi} />
                            {skills ? <SkillCarousel skills={skills} randi={randi} alt/> : null}
                        </div>
                        <p className="block md:hidden py-6">{description}</p>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col gap-4">
                            <ImageCarousel images={images} randi={randi} />
                            {skills ? <SkillCarousel skills={skills} randi={randi} /> : null}
                        </div>
                        <div>
                            <div className="flex flex-row justify-between">
                                <h3 className="font-semibold">{org}</h3>
                                <p className="text-right">{date}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="text-accent1">{role}</p>
                                <p className="text-accent2 text-right">{location}</p>
                            </div>
                            <p className="py-12">{description}</p>
                        </div>
                    </>
                )}
            </div>
        </FadeOnView>
    );
}

export interface ImageData {
    src: string;
    alt: string;
    width: number;
    height: number;
}
export default function Experience() {

    function handleClick() {
        return;
    }

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
                        At COMET, I led the creation of a new website to represent over 50 members, coordinating with graphics teams for UI design and converting ideas into CSS.
                        I also employed AWS Cloud Services for reliable hosting from wherever our competitions took us. In my spare time, I volunteered at several STEM events.
                    </>}
                    skills={["JavaScript", "CSS", "AWS", "Git", "UI/UX"]}
                    id="webdev"
                />
                <ExperienceCard
                    images={cometScoutingImageData}
                    org="More on Comet Robotics..."
                    role="Scouting Lead"
                    date=""
                    location=""
                    description = {
                    <>                       
                        As scouting lead, I developed a wireless data transfer system with QR Codes andOpenCV during competitions, 
                        ensuring that 10+ simultaneous users could consistently share their data. 
                        I evaluated robot performance with NumPy, Pandas, and Matplotlib to inform our game strategy, taking our team to district playoffs. </>}
                    skills ={["Python", "NumPy", "OpenCV", "Pandas", "Matplotlib"]}
                />
                <ExperienceCard
                    images={cgiImageData}
                    org="CGI Inc"
                    role="Cybersecurity Intern"
                    date="June 2024 - August 2024"
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
                    skills={["Git", "Linux", "Consulting", "Python"]}
                    alt
                    id="it"
                />  
                <ToggleSection>
                    <ExperienceCard 
                        images={aspireImageData}
                        org="Team Aspire"
                        role="Programmer"
                        date="August 2024 - June 2025"
                        location="Haymarket, VA"
                        description={<></>}
                        skills={["Java", "OpenCV", "Python"]}
                />
                    <ExperienceCard 
                        images={refImageData}
                        org="USA Hockey"
                        role="Ice Hockey Referee"
                        date="August 2021 - June 2024"
                        location="Ashburn, Virginia"
                        description = {<>   </>}
                        skills={["Conflict Resolution", "Problem-solving", "Communication"]}
                        alt
                    />
                </ToggleSection>
            </section>
        </section>
    ); 
}


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
            src: "/exp/comet-volunteer.jpg",
            alt: "Comet Volunteering",
            width: 6000,
            height: 4000,
        },
        {
            src: "/exp/frc-strategy.jpg",
            alt: "FRC Strategy Session",
            width: 5629,
            height: 3518,
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
            src: "/exp/ftc-bar-chart.png",
            alt: "FTC Scouting Stat Analysis",
            width: 3495,
            height: 1860,
        },
        {
            src: "/exp/ftc-scout.png",
            alt: "FTC Scouting App",
            width: 3785,
            height: 1957,
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
    const aspireImageData: ImageData[] = [
        {
            src: "/exp/aspire-1.jpg",
            alt: "ASPIRE Team",
            width: 1049,
            height: 600,
        },
        {
            src: "/exp/aspire-2.jpg",
            alt: "ASPIRE Robot",
            width: 6000,
            height: 4000,
        },
        {
            src: "/exp/aspire-project.jpg",
            alt: "ASPIRE Project",
            width: 1645,
            height: 2193,
        }
    ];

    const refImageData: ImageData[] = [
        {
        src:"/exp/reffing.jpg",
        alt: "Kj officiating a hockey game",
        width: 1607,
        height: 750
        }
    ];
