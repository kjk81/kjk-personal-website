import Image from "next/image";

export default function Home() {
  return (
    <div id="home" className="pt-12 flex flex-col md:flex-row justify-center h-screen gap-8">
          <div className="max-w-md">
            <Image
              src="/profile.jpg"
              alt="Hero Image"
              width={1310}
              height={1747}
              className="self-center motion-safe:animate-fade-in w-full h-auto object-contain rounded-full"
            />
          </div>
          <div>
            <h1 className="py-16 self-start px-20 text-7xl md: text-5xl text-center font-bold text-foreground md:motion-safe:animate-[name-slide-in_1.34s_ease-in-out_1]">
              KJ Kastning
            </h1>
            <ul className="space-y-8 list-none text-3xl md:text-2xl text-center text-foreground/90">
              <h2 className="font-semibold md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_1.34s_forwards]">
                Computer Science Student at Georgia Tech
              </h2>
              <h3 className="md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_2.04s_forwards]">
                I love to design websites
              </h3>
              <h3 className="md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_2.74s_forwards]">
                develop games
              </h3>
              <h3 className="md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_3.44s_forwards]">
                create applications
              </h3>
              <h3 className="md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_4.14s_forwards]">
                and train neural networks
              </h3>
            </ul>
          </div>
        </div>
  );
}