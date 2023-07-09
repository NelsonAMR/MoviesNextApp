import { Footer, Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MoviesProvider from "@/context/MoviesProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies App",
  description: "Created with Next.js, TypeScript and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MoviesProvider>
          <Header />
          {children}
          <Footer />
        </MoviesProvider>
      </body>
    </html>
  );
}
