import Home from "@/components/home";
import About from "@/components/about";

export default function Page() {

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <Home />
        <About />
      </div>
    </>
  );
}
