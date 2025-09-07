import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
});

const vt = VT323({
  subsets: ["latin"],
  weight: ['400'],
}); 

export const metadata: Metadata = {
  title: "Kj Kastning - Dreamer",
  description: "Personal Website and Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt.className} antialiased`}
      >
        
        <div className="grid grid-cols-1 md:grid-cols-[200_1fr] gap-4 p-4">
          <NavBar />
          <div className={`md:col-start-2 md:col-end-3 text-xl md:text-3xl`}>
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
