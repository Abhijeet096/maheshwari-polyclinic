import Image from "next/image";
import { ArrowRight, Award, Monitor, Stethoscope } from "lucide-react";

import { HIGHLIGHTS, QUALIFICATIONS, SERVICES, TECHNOLOGY } from "@/content/clinic";
import { Eyebrow, SectionIntro } from "@/components/ui";

export function Highlights() {
  return (
    <section aria-label="Why patients choose us" className="bg-sage">
      <div className="container-page grid gap-x-9 gap-y-6 py-[30px] sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <span className="border-forest-soft text-forest grid size-[50px] flex-none place-items-center rounded-full border-[1.5px]">
              <item.icon className="size-[23px]" aria-hidden="true" />
            </span>
            <span className="leading-snug">
              <strong className="text-ink block text-[16.5px]">{item.title}</strong>
              <span className="text-muted text-[14.5px]">{item.body}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-20">
      <div className="container-page section-y">
        <SectionIntro
          icon={Stethoscope}
          label="Our services"
          subtitle="From routine consultations to critical care, we provide personalised, evidence-based medical services for individuals and families."
        >
          Comprehensive Medical Care for a <em className="text-forest-soft">Healthier Tomorrow</em>
        </SectionIntro>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.title}>
              <a
                href="#book"
                className="bg-paper group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-forest/10 p-7 shadow-[0_1px_2px_rgba(16,42,32,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(16,42,32,0.1)]"
              >
                {/* Soft oversized icon stands in for the photograph until approved images exist. */}
                <service.icon
                  className="text-sage pointer-events-none absolute -right-6 -bottom-6 size-40 transition-transform duration-300 group-hover:scale-105"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <span className="bg-sage text-forest relative grid size-14 place-items-center rounded-2xl">
                  <service.icon className="size-7" aria-hidden="true" />
                </span>
                <strong className="display text-ink relative mt-5 text-[24px] leading-[1.15]">{service.title}</strong>
                <span className="text-muted relative mt-3 max-w-[22em] text-[15.5px] leading-[1.6]">{service.body}</span>
                <span className="text-forest relative mt-auto flex items-center gap-3 pt-6 text-[15.5px] font-semibold">
                  Learn more
                  <span className="bg-sage grid size-8 place-items-center rounded-full transition-colors group-hover:bg-forest group-hover:text-ivory">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <a
            href="#book"
            className="bg-forest text-ivory hover:bg-forest-soft inline-flex items-center gap-3 rounded-full py-3 pr-3 pl-7 text-base font-semibold transition-colors"
          >
            View All Services
            <span className="border-ivory/50 grid size-8 place-items-center rounded-full border">
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-forest text-ivory scroll-mt-20">
      <div className="container-page section-y grid items-center gap-x-[clamp(40px,6vw,96px)] gap-y-14 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[520px] pb-6 lg:max-w-none">
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-3xl border border-gold-light/25">
            <Image
              src="/images/dr-munesh.png"
              alt="Portrait of Dr. Munesh Maheshwari"
              fill
              sizes="(min-width: 1024px) 560px, 92vw"
              className="object-cover object-[40%_20%]"
            />
          </div>
          <div className="bg-ivory text-ink absolute right-4 bottom-0 flex items-center gap-3.5 rounded-[18px] px-[22px] py-[18px] shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            <Award className="text-gold-deep size-8" aria-hidden="true" />
            <span className="leading-tight">
              <strong className="display block text-[22px]">FCCS · USA</strong>
              <span className="text-subtle text-[13.5px]">Critical care certified</span>
            </span>
          </div>
        </div>

        <div>
          <Eyebrow light>About the doctor</Eyebrow>
          <h2 className="display mt-4 text-[clamp(36px,4.6vw,58px)] leading-[1.06]">Dr. Munesh Maheshwari</h2>
          <p className="display text-gold-light mt-2.5 text-[19px] italic">Physician &amp; Critical Care Specialist</p>
          <p className="text-ivory/85 mt-6 max-w-[34em] text-[17.5px] leading-[1.75]">
            With more than 26 years of practice, Dr. Maheshwari is one of Jaipur&apos;s most trusted physicians. His
            international training at Johns Hopkins University Hospital and FCCS certification shape a practice built on
            precise diagnosis, clear explanation, and treatment that is never more than you need.
          </p>
          <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {QUALIFICATIONS.map((q) => (
              <li
                key={q.label}
                className="bg-ivory/[0.06] border-ivory/10 flex items-center gap-3 rounded-[14px] border px-4 py-3.5"
              >
                <q.icon className="text-gold-light size-[22px] flex-none" aria-hidden="true" />
                <span className="text-[15px] leading-snug">{q.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Technology() {
  return (
    <section aria-label="Modern clinic technology" className="bg-sand">
      <div className="container-page section-y">
        <SectionIntro
          icon={Monitor}
          label="Modern clinic technology"
          subtitle="Powered by modern clinic technology, we deliver a seamless, safe and efficient healthcare experience."
        >
          Technology for <em className="text-forest-soft">Better Care</em>
        </SectionIntro>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TECHNOLOGY.map((item) => (
            <li key={item.title}>
              <article className="bg-paper flex h-full flex-col overflow-hidden rounded-[22px] border border-forest/10 shadow-[0_1px_2px_rgba(16,42,32,0.04)]">
                <div className="from-sage to-[#d5e1d8] relative grid h-36 place-items-center bg-linear-to-br">
                  <item.icon className="text-forest/35 size-16" strokeWidth={1.1} aria-hidden="true" />
                  <span className="bg-paper text-forest absolute bottom-0 left-6 grid size-14 translate-y-1/2 place-items-center rounded-2xl shadow-[0_8px_20px_rgba(16,42,32,0.12)]">
                    <item.icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className="bg-sage text-forest-soft absolute right-5 bottom-0 grid size-11 translate-y-1/2 place-items-center rounded-full text-sm font-semibold">
                    {item.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-11">
                  <h3 className="display text-ink text-[23px] leading-[1.15]">{item.title}</h3>
                  <p className="text-muted mt-3 text-[15.5px] leading-[1.6]">{item.body}</p>
                  <a href="#book" className="text-forest mt-auto flex items-center gap-3 pt-6 text-[15.5px] font-semibold">
                    Learn more
                    <span className="bg-sage grid size-8 place-items-center rounded-full">
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
