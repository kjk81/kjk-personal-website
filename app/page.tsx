import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="p-24 flex flex-col md:flex-row justify-center h-screen gap-8">
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
            <ul className="space-y-8 list-none text-3xl md:text-2xl text-center font-semibold text-foreground/90">
              <h2 className="md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_1.34s_forwards]">
                Computer Science Student at Georgia Tech
              </h2>
              <h2 className="md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_2.04s_forwards]">
                Risk Taker
              </h2>
              <h2 className="md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_2.74s_forwards]">
                Road Runner
              </h2>
              <h2 className="md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_3.44s_forwards]">
                Entrepeneur
              </h2>
              <h2 className="md:opacity-0 md:motion-safe:animate-[fade-in_1s_ease-in-out_1_4.14s_forwards]">
                = unemployed
              </h2>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
