import Image from "next/image";
import { CalendarDays, Medal, Phone } from "lucide-react";

import { CLINIC } from "@/content/clinic";
import { ArrowIcon, ButtonLink, Stars } from "@/components/ui";
import { LiveStatus } from "@/components/live-status";

export function Hero() {
  return (
    <section className="bg-linear-to-b from-ivory to-sand">
      <div className="container-page grid items-center gap-x-[clamp(32px,5vw,72px)] gap-y-12 py-[clamp(40px,6vw,80px)] pb-[clamp(56px,6vw,96px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div>
          <span className="bg-sage text-forest-soft inline-flex items-center gap-2 rounded-full px-3.5 py-[7px] text-[12.5px] font-semibold tracking-[0.12em] whitespace-nowrap uppercase">
            <span className="bg-gold size-[7px] rounded-full" />
            Physician &amp; critical care
          </span>

          <h1 className="display text-ink mt-6 text-[clamp(40px,4.9vw,68px)] leading-[1.02] tracking-[-0.02em]">
            <span className="block">Experienced care.</span>
            <span className="block">
              A doctor{" "}
              <span className="text-forest-soft relative inline-block italic">
                who listens.
                <svg
                  viewBox="0 0 300 16"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute bottom-[-10px] left-[4%] h-3.5 w-[96%]"
                >
                  <path d="M2 12 C 80 2, 200 2, 298 9" fill="none" stroke="#b88a3e" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h1>

          <p className="text-forest mt-9 text-[22px] font-semibold">
            {CLINIC.doctor}{" "}
            <span className="text-subtle font-normal">- {CLINIC.title}</span>
          </p>
          <p className="text-muted mt-3.5 max-w-[32em] text-lg leading-[1.65]">
            26+ years of compassionate, evidence-based medicine in Jaipur, from everyday illness to serious, complex
            conditions. Trained at Johns Hopkins University Hospital; FCCS-certified, USA.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-[18px] gap-y-3">
            <Stars className="text-xl" />
            <span className="text-lg font-bold">{CLINIC.rating}</span>
            <span className="bg-body/20 h-5 w-px" aria-hidden="true" />
            <span className="text-muted text-base">
              <strong className="text-body">{CLINIC.reviewCount}</strong> Google reviews
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <ButtonLink href="#book" className="px-7 py-4 text-[17px] shadow-[0_10px_24px_rgba(20,61,46,0.22)]">
              <CalendarDays className="size-5" aria-hidden="true" />
              Book an Appointment
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={CLINIC.phoneHref} variant="outline" className="bg-paper/60 px-6 py-4 text-[17px]">
              <Phone className="size-5" aria-hidden="true" />
              Call Clinic
            </ButtonLink>
          </div>
        </div>

        {/* Portrait. Badges sit on the wall (top-left) and below the frame, never over the face. */}
        <div className="relative mx-auto w-full max-w-[560px] pb-8 lg:max-w-none">
          <div className="bg-sage absolute bottom-0 left-0 h-[80%] w-[72%] rounded-[28px]" aria-hidden="true" />
          <div className="relative ml-6 aspect-[540/526] overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(16,42,32,0.18)]">
            <Image
              src="/images/dr-munesh.png"
              alt="Dr. Munesh Maheshwari at his clinic desk"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 92vw"
              className="object-cover"
            />
            <div className="bg-paper/95 absolute top-3 left-3 flex items-center gap-2.5 rounded-2xl px-3 py-2.5 shadow-[0_18px_40px_rgba(16,42,32,0.14)] backdrop-blur-sm sm:top-5 sm:left-5 sm:max-w-[210px] sm:gap-3.5 sm:px-4 sm:py-3">
              <span className="grid size-8 flex-none place-items-center rounded-xl bg-[#f4ead2] text-gold-deep sm:size-11">
                <Medal className="size-5 sm:size-6" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <strong className="display text-ink block text-lg whitespace-nowrap sm:text-2xl">26+ Years</strong>
                <span className="text-subtle hidden text-[13px] sm:block">treating patients in Jaipur &amp; abroad</span>
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <LiveStatus />
          </div>
        </div>
      </div>
    </section>
  );
}
