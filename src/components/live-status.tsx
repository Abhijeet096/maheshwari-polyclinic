"use client";

import { useEffect, useState } from "react";

/** Minutes past midnight in India, so the chip is right for visitors in any timezone. */
function indiaMinutes(date: Date): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return (get("hour") % 24) * 60 + get("minute");
}

function statusFor(minutes: number) {
  if (minutes >= 420 && minutes < 480) return { open: true, title: "Open now", note: "Morning OPD until 8:00 am" };
  if (minutes >= 960 && minutes < 1260) return { open: true, title: "Open now", note: "Evening OPD until 9:00 pm" };
  if (minutes >= 480 && minutes < 960) return { open: false, title: "OPD opens 4:00 pm", note: "Emergency care open now" };
  return { open: false, title: "OPD opens 7:00 am", note: "Emergency care open now" };
}

/** Rendered only after mount: server output stays stable and the chip never shows a wrong time. */
export function LiveStatus() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;
  const status = statusFor(indiaMinutes(now));
  const dot = status.open ? "bg-[#2f8a5f]" : "bg-gold";

  return (
    <div className="bg-paper flex items-center gap-3 rounded-2xl px-[18px] py-3 shadow-[0_18px_40px_rgba(16,42,32,0.14)]">
      <span className="relative size-3 flex-none" aria-hidden="true">
        <span className={`absolute inset-0 rounded-full ${dot}`} />
        <span className={`absolute -inset-[5px] rounded-full opacity-20 ${dot}`} />
      </span>
      <span className="leading-tight">
        <strong className="block text-[15px]">{status.title}</strong>
        <span className="text-subtle text-[13.5px]">{status.note}</span>
      </span>
    </div>
  );
}
