import Home from "@/components/home";
import About from "@/components/about";
import Experience from "@/components/experience";

export default function Page() {

  return (
    <>
      <div className="px-8 flex flex-col items-center w-full">
        <Home />
        <About />
        <Experience />
      </div>
    </>
  );
}
