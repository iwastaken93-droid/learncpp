import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Starfield } from "@/components/Starfield";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C++ Space Academy",
  description: "Learn C++ across the galaxy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-50 min-h-screen selection:bg-indigo-500/30 overflow-x-hidden`}>
        <Starfield />
        <NavBar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
