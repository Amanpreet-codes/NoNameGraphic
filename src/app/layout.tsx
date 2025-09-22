import type { Metadata } from "next";
import { Exo_2, Titillium_Web } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const titillium = Titillium_Web({ subsets: ["latin"], variable: "--font-titillium", weight: ["400"] });

export const metadata: Metadata = {
  title: "No Name Graphics - Graphic Design Agency in India",
  description: "Your Brand Deserves designs that resonate",
  icons: {
    icon: "/Logo.svg",
    shortcut: "/Logo.svg",
    apple: "/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${titillium.variable} ${exo2.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
