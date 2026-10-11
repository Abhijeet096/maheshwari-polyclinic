import { ArrowRight, Building2, CalendarDays, Clock, MapPin, MessageCircle, Navigation, Phone, Siren } from "lucide-react";

import { CLINIC, EVENING_HOURS, MORNING_HOURS, WEEK } from "@/content/clinic";
import { SectionIntro } from "@/components/ui";

export function HoursLocation() {
  return (
    <section id="hours" className="bg-sage/60 scroll-mt-20">
      <div className="container-page section-y">
        <SectionIntro
          icon={MapPin}
          label="Clinic hours & location"
          subtitle="Convenient location, comfortable facilities and flexible timings to serve you better."
        >
          Visit Our Clinic in <em className="text-forest-soft">Jaipur</em>
        </SectionIntro>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-[1.05fr_0.95fr_1fr]">
          {/* Timings */}
          <article className="bg-paper flex flex-col overflow-hidden rounded-3xl shadow-[0_24px_50px_rgba(16,42,32,0.08)]">
            <header className="bg-forest text-ivory flex items-center gap-4 p-6">
              <span className="bg-ivory/10 grid size-14 flex-none place-items-center rounded-full">
                <Clock className="size-7" aria-hidden="true" />
              </span>
              <span className="leading-snug">
                <h3 className="display text-[24px]">Clinic Timings</h3>
                <span className="text-ivory/80 text-[15px]">We are here for your health</span>
              </span>
            </header>
            <table className="w-full flex-1 text-left text-[15px]">
              <caption className="sr-only">Opening hours by day</caption>
              <thead className="sr-only">
                <tr>
                  <th>Day</th>
                  <th>Morning</th>
                  <th>Evening</th>
                </tr>
              </thead>
              <tbody>
                {WEEK.map((day) => (
                  <tr key={day} className="border-b border-forest/10 last:border-0">
                    <th scope="row" className="text-ink px-6 py-3 font-medium">
                      {day}
                    </th>
                    <td className="text-muted py-3 whitespace-nowrap">{MORNING_HOURS}</td>
                    <td className="text-muted py-3 pr-6 whitespace-nowrap">{EVENING_HOURS}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="bg-sage/70 text-body m-4 flex items-start gap-3 rounded-2xl p-4 text-[15px] leading-snug">
              <Siren className="text-forest mt-0.5 size-6 flex-none" aria-hidden="true" />
              <span>
                For <strong>emergency support</strong>, please call our clinic number directly for immediate assistance.
              </span>
            </p>
          </article>

          {/* Address */}
          <article className="bg-paper flex flex-col rounded-3xl p-6 shadow-[0_24px_50px_rgba(16,42,32,0.08)]">
            <div className="flex items-center gap-4">
              <span className="bg-sage text-forest grid size-14 flex-none place-items-center rounded-full">
                <MapPin className="size-7" aria-hidden="true" />
              </span>
              <span className="leading-snug">
                <h3 className="display text-ink text-[24px]">Clinic Address</h3>
                <span className="text-muted text-[15px]">Gopalpura Bypass, Jaipur</span>
              </span>
            </div>
            <div className="bg-sand mt-5 flex items-start gap-4 rounded-2xl p-5">
              <span className="bg-sage text-forest grid size-12 flex-none place-items-center rounded-xl">
                <Building2 className="size-6" aria-hidden="true" />
              </span>
              <span className="leading-snug">
                <strong className="display text-ink block text-[20px]">{CLINIC.addressName}</strong>
                <span className="text-muted mt-1 block text-[15.5px] leading-[1.55]">{CLINIC.address}</span>
              </span>
            </div>
            <div className="mt-auto flex flex-col gap-3 pt-6">
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 2xl:grid-cols-2">
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest text-ivory hover:bg-forest-soft flex items-center justify-between gap-3 rounded-2xl px-5 py-4 font-semibold transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Navigation className="size-5" aria-hidden="true" />
                    Get Directions
                  </span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={CLINIC.phoneHref}
                  className="bg-sage text-forest flex items-center justify-between gap-3 rounded-2xl px-5 py-4 font-semibold"
                >
                  <span className="flex items-center gap-2.5">
                    <Phone className="size-5" aria-hidden="true" />
                    Call Now
                  </span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage text-forest flex items-center justify-between gap-3 rounded-2xl px-5 py-4 font-semibold"
              >
                <span className="flex items-center gap-2.5">
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Chat on WhatsApp
                </span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* Map */}
          <div className="bg-paper relative min-h-[360px] overflow-hidden md:col-span-2 xl:col-span-1 rounded-3xl shadow-[0_24px_50px_rgba(16,42,32,0.08)]">
            <iframe
              title="Map to Maheshwari Polyclinic"
              src={CLINIC.mapsEmbed}
              loading="lazy"
              className="absolute inset-0 block size-full border-0 [filter:saturate(0.6)_sepia(0.12)]"
            />
            <span className="bg-paper/95 text-forest absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-[0_8px_20px_rgba(16,42,32,0.15)]">
              <CalendarDays className="size-4" aria-hidden="true" />
              Open all 7 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
