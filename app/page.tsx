import Home from "@/components/home";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Page() {

  return (
    <>
      <div className="p-8 flex flex-col items-center w-full">
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}
