"use client";

import { useState } from "react";
import { ArrowRight, Globe, MapPin, ShieldCheck, Trophy, Users } from "lucide-react";

import { CREDENTIAL_COUNTS, CREDENTIALS, type CredentialKind } from "@/content/clinic";
import { SectionIntro } from "@/components/ui";

type Filter = "all" | CredentialKind;

const TABS: { key: Filter; label: string; icon: typeof Globe; count: number }[] = [
  { key: "all", label: "All", icon: Trophy, count: CREDENTIAL_COUNTS.all },
  { key: "certification", label: "Certifications", icon: ShieldCheck, count: CREDENTIAL_COUNTS.certification },
  { key: "international", label: "International Conferences", icon: Globe, count: CREDENTIAL_COUNTS.international },
  { key: "national", label: "National Conferences", icon: Users, count: CREDENTIAL_COUNTS.national },
];

const KIND_STYLE: Record<CredentialKind, { label: string; card: string; chip: string; year: string }> = {
  certification: {
    label: "Certification",
    card: "bg-gradient-to-br from-[#fbf4e3] to-paper border-[#ecdcb2]",
    chip: "bg-[#f4ead2] text-[#7d5a1e]",
    year: "bg-[#f4ead2] text-[#7d5a1e]",
  },
  international: {
    label: "International conference",
    card: "bg-gradient-to-br from-[#e8f0fb] to-paper border-[#cfe0f5]",
    chip: "bg-[#dce8f8] text-[#2c5b94]",
    year: "bg-[#dce8f8] text-[#2c5b94]",
  },
  national: {
    label: "National conference",
    card: "bg-gradient-to-br from-[#e6f1e8] to-paper border-[#cde3d2]",
    chip: "bg-sage text-forest-soft",
    year: "bg-sage text-forest-soft",
  },
};

export function Credentials() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = CREDENTIALS.filter((item) => filter === "all" || item.kind === filter);

  return (
    <section aria-label="Credentials and achievements">
      <div className="container-page section-y">
        <SectionIntro
          icon={Trophy}
          label="Credentials & achievements"
          subtitle="Continuous learning and active participation in national and international conferences to deliver the best possible care to patients."
        >
          Professional Credentials &amp; <em className="text-forest-soft">Achievements</em>
        </SectionIntro>

        <div role="tablist" aria-label="Filter credentials" className="mt-10 flex flex-wrap justify-center gap-3">
          {TABS.map((tab) => {
            const selected = filter === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setFilter(tab.key)}
                className={`inline-flex items-center gap-2.5 rounded-full border px-5 py-3 text-[15px] font-medium transition-colors ${
                  selected ? "bg-forest text-ivory border-forest" : "bg-paper text-body border-forest/10 hover:border-forest/30"
                }`}
              >
                <tab.icon className="size-[18px]" aria-hidden="true" />
                {tab.label}
                <span
                  className={`grid min-w-7 place-items-center rounded-full px-2 py-0.5 text-[13px] font-semibold ${
                    selected ? "bg-ivory text-forest" : "bg-sage text-forest-soft"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => {
            const style = KIND_STYLE[item.kind];
            return (
              <li key={item.title}>
                <article className={`flex h-full flex-col rounded-[20px] border p-6 ${style.card}`}>
                  <span
                    className={`inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase ${style.chip}`}
                  >
                    <item.icon className="size-4" aria-hidden="true" />
                    {style.label}
                  </span>
                  <h3 className="display text-ink mt-4 text-[22px] leading-[1.2]">{item.title}</h3>
                  <p className="text-muted mt-2 text-[15px] leading-[1.55]">{item.detail}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
                    <span className="text-subtle flex items-center gap-2">
                      <MapPin className="text-forest size-4 flex-none" aria-hidden="true" />
                      {item.place}
                    </span>
                    <span className={`rounded-full px-3 py-1 font-semibold ${style.year}`}>{item.year}</span>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="text-subtle mt-6 text-center text-sm">
          A selection of {CREDENTIAL_COUNTS.all} conferences, certifications and workshops. The full list is available on request.
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="#book"
            className="bg-forest text-ivory hover:bg-forest-soft inline-flex items-center gap-3 rounded-full py-3 pr-3 pl-7 text-base font-semibold transition-colors"
          >
            Ask for the full list
            <span className="border-ivory/50 grid size-8 place-items-center rounded-full border">
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
