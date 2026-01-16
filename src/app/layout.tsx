import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/ui/preloader";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollToTop from "@/components/sections/scrollToTop";
import BootstrapForBrowser from "@/components/sections/bootstrapForBrowser";

export const metadata: Metadata = {
  title: "HumanusX - Empowering Hospitality Worldwide",
  description: "HumanusX - Empowering Hospitality Worldwide",
  keywords: "hospitality solutions, hotel digital agency, hospitality marketing, hotel revenue management, hospitality artificial intelligence, direct bookings, hotel revenue optimization, digital marketing for hotels, hotel chatbots, hospitality digital transformation, soluciones para hostelería, marketing hotelero, agencia digital hotelera, revenue management hotelero, inteligencia artificial en hostelería, reservas directas, optimización de ingresos hoteleros, marketing digital para hoteles, chatbots para hoteles, gestión digital hotelera"

};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
