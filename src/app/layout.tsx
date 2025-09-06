import type { Metadata } from "next";
import "flowbite";
import { Exo_2, Titillium_Web } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/ui/NavbarComponent";
import FooterComponent from "@/components/ui/Footer";
import MobileBottomBar from "@/components/ui/MobileBottomBar";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const titillium = Titillium_Web({ subsets: ["latin"], variable: "--font-titillium", weight: ["400"] });

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
        className={`${titillium.variable} ${exo2.variable} antialiased`}
      >
        <NavbarComponent />
          {children}
        <FooterComponent />
        <MobileBottomBar />
      </body>
    </html>
  );
}
