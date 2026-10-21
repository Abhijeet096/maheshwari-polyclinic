import { ArrowRight, Clock, Heart, Leaf, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { CLINIC, EVENING_HOURS, FOOTER, MORNING_HOURS } from "@/content/clinic";
import { LogoMark } from "@/components/ui";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="display text-ivory text-[22px]">{children}</h3>
      <span className="bg-gold-light mt-3 block h-[2px] w-8" aria-hidden="true" />
    </div>
  );
}

function ContactRow({ icon: Icon, children }: { icon: typeof MapPin; children: React.ReactNode }) {
  return (
    <li className="flex gap-3.5">
      <span className="border-gold-light/40 text-ivory grid size-11 flex-none place-items-center rounded-full border bg-ivory/5">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="leading-snug">{children}</span>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest text-ivory/80 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 0% 100%, rgba(29,90,67,0.55), transparent 70%), radial-gradient(ellipse 500px 360px at 100% 0%, rgba(29,90,67,0.5), transparent 70%)",
        }}
      />
      <div className="container-page relative pt-16 pb-8">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.75fr_0.95fr_1.4fr_1fr]">
          <div>
            <div className="text-ivory flex items-center gap-3.5">
              <LogoMark className="size-16 flex-none" />
              <span className="display text-[34px] leading-[0.98]">
                Maheshwari
                <br />
                Polyclinic
              </span>
            </div>
            <p className="text-ivory/70 mt-3 text-[11.5px] font-medium tracking-[0.22em] uppercase">{CLINIC.tagline}</p>
            <p className="mt-7 max-w-[22em] text-[16px] leading-[1.6]">
              Providing comprehensive and compassionate healthcare for individuals and families in Jaipur. Your health is
              our priority.
            </p>
            <ul className="mt-7 grid grid-cols-4 gap-2.5">
              {FOOTER.pillars.map((pillar) => (
                <li key={pillar.label} className="flex flex-col items-center gap-2 text-center">
                  <span className="border-gold-light/40 grid size-[52px] place-items-center rounded-full border bg-ivory/5">
                    <pillar.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="text-[12.5px] leading-tight">{pillar.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links" className="flex flex-col gap-5">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="flex flex-col gap-3.5 text-[16px]">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-ivory transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-5">
            <FooterHeading>Our Services</FooterHeading>
            <ul className="flex flex-col gap-3.5 text-[16px]">
              {FOOTER.services.map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-ivory transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#services" className="text-ivory mt-1 inline-flex items-center gap-2.5 font-semibold">
              View All Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <FooterHeading>Contact Information</FooterHeading>
            <ul className="flex flex-col gap-4 text-[15px]">
              <ContactRow icon={MapPin}>
                <strong className="text-ivory block text-[15.5px]">{CLINIC.addressName}</strong>
                {CLINIC.address}
              </ContactRow>
              <ContactRow icon={Phone}>
                <a href={CLINIC.phoneHref} className="text-ivory block text-[15.5px] font-medium">
                  {CLINIC.phoneDisplay}
                </a>
                <span className="text-ivory/65">For appointments &amp; queries</span>
              </ContactRow>
              <ContactRow icon={Mail}>
                <a href={`mailto:${CLINIC.email}`} className="text-ivory block text-[15.5px] font-medium break-words">
                  {CLINIC.email}
                </a>
              </ContactRow>
              <ContactRow icon={Clock}>
                <span className="text-ivory block text-[15.5px] font-medium">Mon – Sun</span>
                <span className="text-ivory/80">
                  {MORNING_HOURS}
                  <br />
                  {EVENING_HOURS}
                </span>
              </ContactRow>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <FooterHeading>Follow Us</FooterHeading>
            <p className="text-[15.5px] leading-snug">Reach us quickly for appointments, directions and questions.</p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-ivory text-forest grid size-11 place-items-center rounded-full"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
              </a>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Google Maps"
                className="bg-ivory text-forest grid size-11 place-items-center rounded-full"
              >
                <MapPin className="size-5" aria-hidden="true" />
              </a>
            </div>
            <div className="bg-ivory/[0.08] border-ivory/10 rounded-[20px] border p-5">
              <div className="flex items-center gap-3">
                <Leaf className="text-gold-light size-8 flex-none" aria-hidden="true" />
                <span className="display text-ivory text-[19px] leading-tight">
                  Better Health
                  <br />
                  Brighter Tomorrows
                </span>
              </div>
              <hr className="border-ivory/15 my-4" />
              <p className="text-[14.5px] leading-snug">With you at every step of your health journey.</p>
            </div>
          </div>
        </div>

        <div className="border-ivory/15 text-ivory/70 mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t pt-6 pb-16 text-[14px] sm:pb-14">
          <span className="flex flex-col gap-1">
            <span>© 2026 {CLINIC.name}. All rights reserved.</span>
            <span className="text-ivory/55 text-[13px]">
              Website by Stively Technologies · Frontend by Soumya Tidke
            </span>
          </span>
          <span className="display text-ivory flex items-center gap-2.5 text-[17px]">
            <Heart className="size-5" aria-hidden="true" />
            Care Today for a Healthier Tomorrow
          </span>
        </div>
      </div>
    </footer>
  );
}

/** One quiet contact control instead of two competing floating buttons. */
export function ContactDock() {
  return (
    <div className="bg-paper fixed right-4 bottom-4 z-40 flex items-center gap-1 rounded-full border border-forest/10 p-1.5 shadow-[0_16px_40px_rgba(16,42,32,0.2)] sm:right-5 sm:bottom-5">
      <a
        href={CLINIC.phoneHref}
        aria-label="Call clinic"
        className="bg-forest text-ivory hover:bg-forest-soft inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[15px] font-semibold transition-colors"
      >
        <Phone className="size-[18px]" aria-hidden="true" />
        Call
      </a>
      <a
        href={`https://wa.me/${CLINIC.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="text-forest hover:bg-sage grid size-11 place-items-center rounded-full transition-colors"
      >
        <MessageCircle className="size-[23px]" aria-hidden="true" />
      </a>
    </div>
  );
}
