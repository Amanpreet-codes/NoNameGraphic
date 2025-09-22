"use client"

import { usePathname } from "next/navigation";
import NavbarComponent from "@/components/ui/NavbarComponent";
import FooterComponent from "@/components/ui/Footer";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import ContactFooter from "@/components/ui/ContactFooter";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContactPage = pathname.startsWith('/contact');
  
  return (
    <>
      <NavbarComponent />
      {children}
      {isContactPage ? <ContactFooter /> : <FooterComponent />}
      <MobileBottomBar />
    </>
  );
}