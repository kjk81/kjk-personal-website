import Link from "next/link";
export default function Footer() {
    return (
        <footer className="border-t-foreground border-t-[2px] w-full h-fit flex flex-col justify-center items-center py-16">
            <p>by Kj Kastning</p>
            <p>reach me at kjk@skyhopper.net</p>
            <Link href="/kjkastningresume.pdf" className="hover:underline">resume</Link>
        </footer>
    );
}