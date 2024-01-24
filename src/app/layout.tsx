import Footer from "@/components/footer";
import Header from "@/components/header";
import '@/styles/globals.css'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Favicon from '/public/images/flag.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Piece",
  description: ":D",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-cyan-200">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
