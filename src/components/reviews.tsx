import { ArrowRight, Star, Users } from "lucide-react";

import { CLINIC, REVIEWS } from "@/content/clinic";
import { SectionIntro, Stars } from "@/components/ui";

function GoogleG({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.7-2.1 5-4.4 6.5v5.4h7.1c4.2-3.8 6.6-9.5 6.6-15.9z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.4c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.6C8.1 41.1 15.5 46 24 46z" />
      <path fill="#FBBC05" d="M11.8 28.4c-.4-1.3-.7-2.7-.7-4.4s.3-3 .7-4.4v-5.6H4.5C3 17 2 20.400 2 24s1 7 2.500 10l7.300-5.600z" />
      <path fill="#EA4335" d="M24 10.600c3.200 0 6.100 1.100 8.400 3.300l6.300-6.300C34.900 4.100 29.900 2 24 2 15.500 2 8.100 6.900 4.500 14l7.300 5.600c1.700-5.200 6.500-9 12.200-9z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section id="reviews" aria-label="Google reviews" className="scroll-mt-20">
      <div className="container-page section-y">
        <SectionIntro
          icon={Star}
          label="Google reviews"
          subtitle="Real experiences from patients and families who have trusted Maheshwari Polyclinic for their care."
        >
          Trusted by <em className="text-forest-soft">{CLINIC.reviewCount} Patients</em>
        </SectionIntro>

        <div className="bg-paper mx-auto mt-12 grid max-w-4xl items-center gap-6 rounded-[22px] border border-forest/10 px-8 py-6 shadow-[0_1px_2px_rgba(16,42,32,0.04)] sm:grid-cols-[auto_1fr] sm:gap-10">
          <div className="text-center sm:text-left">
            <strong className="text-ink text-[56px] leading-none font-bold">{CLINIC.rating}</strong>
            <Stars className="mt-2 justify-center text-xl sm:justify-start" />
            <span className="text-muted mt-1.5 block text-sm">Based on {CLINIC.reviewCount} Google reviews</span>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 sm:border-l sm:border-forest/10 sm:pl-10">
            <li className="flex items-center gap-4">
              <span className="bg-sage text-forest grid size-14 flex-none place-items-center rounded-full">
                <Users className="size-6" aria-hidden="true" />
              </span>
              <span className="leading-snug">
                <strong className="block text-[17px]">{CLINIC.reviewCount}</strong>
                <span className="text-muted text-[15px]">Patient reviews</span>
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-sage text-forest grid size-14 flex-none place-items-center rounded-full">
                <GoogleG />
              </span>
              <span className="leading-snug">
                <strong className="block text-[17px]">{CLINIC.rating} average</strong>
                <span className="text-muted text-[15px]">Rating on Google</span>
              </span>
            </li>
          </ul>
        </div>

        <ul className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
          {REVIEWS.map((review) => (
            <li key={review.name}>
              <figure className="bg-paper flex h-full flex-col rounded-[22px] border border-forest/10 p-7 shadow-[0_18px_40px_rgba(16,42,32,0.06)]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <span className="bg-forest text-paper grid size-12 place-items-center rounded-full text-base font-bold">
                      {review.initials}
                    </span>
                    <span className="leading-snug">
                      <strong className="block text-[16.5px]">{review.name}</strong>
                      <span className="text-subtle text-sm">{review.when}</span>
                    </span>
                  </div>
                  <span className="flex items-center gap-2">
                    <GoogleG />
                    <Stars className="text-base" />
                  </span>
                </div>
                <blockquote className="text-muted mt-5 text-[17px] leading-[1.65]">&ldquo;{review.text}&rdquo;</blockquote>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-forest/10 pt-5">
                  {review.tags.map((tag) => (
                    <span key={tag} className="bg-sage text-forest-soft rounded-full px-3.5 py-1.5 text-[13.5px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <a
            href={CLINIC.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest text-ivory hover:bg-forest-soft inline-flex items-center gap-3 rounded-full py-3 pr-3 pl-7 text-base font-semibold transition-colors"
          >
            Read All {CLINIC.reviewCount} Reviews on Google
            <span className="border-ivory/50 grid size-8 place-items-center rounded-full border">
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
