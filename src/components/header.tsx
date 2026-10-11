import Link from "next/link";
import { CalendarCheck } from "lucide-react";

import { CLINIC, NAV } from "@/content/clinic";
import { LogoMark } from "@/components/ui";

export function Header() {
  return (
    <header className="bg-ivory/90 sticky top-0 z-30 border-b border-forest/10 backdrop-blur-md">
      <div className="container-page flex items-center gap-3 py-3.5 sm:gap-6">
        <Link href="#top" className="flex flex-none items-center gap-3 text-forest">
          <LogoMark className="size-11" />
          <span className="flex flex-col leading-[1.05]">
            <span className="display text-[23px]">Maheshwari</span>
            <span className="text-subtle text-[12px] tracking-[0.14em] uppercase">Polyclinic</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 flex-1 justify-center gap-7 text-[15px] font-medium lg:flex"
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-body hover:text-forest-soft transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="bg-forest text-ivory hover:bg-forest-soft ml-auto inline-flex flex-none items-center gap-2.5 rounded-[10px] px-4 py-3 text-[15px] font-semibold whitespace-nowrap transition-colors sm:px-5 lg:ml-0"
        >
          <CalendarCheck className="size-[18px]" aria-hidden="true" />
          <span className="hidden sm:inline">Book Appointment</span>
          <span className="sm:hidden">Book</span>
        </a>
      </div>
      <span className="sr-only">{CLINIC.name}</span>
    </header>
  );
}
