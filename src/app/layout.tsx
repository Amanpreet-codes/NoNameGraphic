import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.css"
import NavbarComponent from "@/components/ui/NavbarComponent";
import FooterComponent from "@/components/ui/Footer";
import MobileBottomBar from "@/components/ui/MobileBottomBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "No Name Grapics",
  description: "Your Brand Deserves designs that resonate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComponent />
          {children}
        <FooterComponent />
        <MobileBottomBar />
      </body>
    </html>
  );
}
