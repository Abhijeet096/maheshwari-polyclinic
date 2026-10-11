"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, HeartHandshake, Quote, UserRound } from "lucide-react";

import { STORIES } from "@/content/clinic";
import { SectionIntro } from "@/components/ui";

/**
 * Three equal cards. On wide screens all three are visible, so nothing is ever
 * half-clipped. Below that it becomes a one-card-at-a-time swipe carousel with
 * snap points, arrows and page dots. Photos are slots until authorised images exist.
 */
export function Stories() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  function goTo(next: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (next + STORIES.length) % STORIES.length;
    const card = track.children[clamped] as HTMLElement | undefined;
    track.scrollTo({ left: card?.offsetLeft ?? 0, behavior: "smooth" });
    setIndex(clamped);
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = (track.children[0] as HTMLElement).offsetWidth;
    setIndex(Math.round(track.scrollLeft / Math.max(cardWidth, 1)));
  }

  return (
    <section id="stories" className="bg-sand scroll-mt-20">
      <div className="container-page section-y">
        <SectionIntro
          icon={HeartHandshake}
          label="Patient stories"
          subtitle="Stories of hope, healing and better lives, shared by our patients and their families."
        >
          Real People. Real <em className="text-forest-soft">Recoveries.</em>
        </SectionIntro>

        <ul
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {STORIES.map((story) => (
            <li key={story.title} className="w-full flex-none snap-start lg:w-auto">
              <article className="bg-paper flex h-full flex-col overflow-hidden rounded-3xl shadow-[0_24px_50px_rgba(16,42,32,0.08)]">
                <div className="from-sage to-[#d5e1d8] text-forest/45 relative grid aspect-[16/10] place-items-center bg-linear-to-br">
                  <UserRound className="size-14" aria-hidden="true" strokeWidth={1.25} />
                  <span className="bg-paper/95 text-forest absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase">
                    <story.icon className="size-4" aria-hidden="true" />
                    {story.category}
                  </span>
                  <span className="text-forest/55 absolute bottom-3 left-4 text-xs tracking-wide">Authorised patient photo</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="display text-ink text-[24px] leading-[1.15]">{story.title}</h3>
                    <Quote className="text-sage size-9 flex-none fill-current" aria-hidden="true" />
                  </div>
                  <p className="text-muted mt-3.5 text-[16px] leading-[1.6]">&ldquo;{story.quote}&rdquo;</p>
                  <div className="mt-auto flex items-center gap-3.5 border-t border-forest/10 pt-5">
                    <span className="bg-sage text-forest grid size-11 place-items-center rounded-full">
                      <UserRound className="size-5" aria-hidden="true" />
                    </span>
                    <span className="leading-snug">
                      <strong className="block text-[15.5px]">{story.who}</strong>
                      <span className="text-subtle text-sm">{story.detail}</span>
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous story"
            className="bg-paper text-forest grid size-12 place-items-center rounded-full shadow-[0_6px_16px_rgba(16,42,32,0.1)]"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2" aria-hidden="true">
            {STORIES.map((story, i) => (
              <span
                key={story.title}
                className={`h-2.5 rounded-full transition-all ${i === index ? "bg-forest w-6" : "bg-forest/25 w-2.5"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next story"
            className="bg-paper text-forest grid size-12 place-items-center rounded-full shadow-[0_6px_16px_rgba(16,42,32,0.1)]"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
