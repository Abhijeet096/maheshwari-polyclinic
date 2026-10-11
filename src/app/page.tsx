import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About, Highlights, Services, Technology } from "@/components/sections-a";
import { Credentials } from "@/components/credentials";
import { Stories } from "@/components/stories";
import { Reviews } from "@/components/reviews";
import { HoursLocation } from "@/components/hours-location";
import { Appointment } from "@/components/appointment";
import { ContactDock, Footer } from "@/components/contact-footer";

export default function HomePage() {
  return (
    <div id="top" className="overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <About />
        <Credentials />
        <Stories />
        <Reviews />
        <Technology />
        <HoursLocation />
        <Appointment />
      </main>
      <Footer />
      <ContactDock />
    </div>
  );
}
