"use client"

import { Exo_2, Titillium_Web } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/ui/NavbarComponent";
import FooterComponent from "@/components/ui/Footer";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import { usePathname } from "next/navigation";
import ContactFooter from "@/components/ui/ContactFooter";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const titillium = Titillium_Web({ subsets: ["latin"], variable: "--font-titillium", weight: ["400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContactPage = pathname.startsWith('/contact');
  return (
    <html lang="en">
      <body
        className={`${titillium.variable} ${exo2.variable} antialiased`}
      >
        <NavbarComponent />
          {children}
        {isContactPage? <ContactFooter /> : <FooterComponent />}
        <MobileBottomBar />
      </body>
    </html>
  );
}
