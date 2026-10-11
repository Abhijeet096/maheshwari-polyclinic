"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Phone,
  User,
} from "lucide-react";

import {
  BOOKING_BENEFITS,
  CLINIC,
  CONSULTATION_TYPES,
  EVENING_HOURS,
  MORNING_HOURS,
} from "@/content/clinic";

const fieldBox = "bg-paper border-forest/15 relative flex items-center gap-3 rounded-2xl border px-4";
const fieldInput = "min-h-[54px] w-full min-w-0 bg-transparent text-[15.5px] outline-none placeholder:text-subtle";

function todayIso() {
  const india = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  return `${india.getFullYear()}-${String(india.getMonth() + 1).padStart(2, "0")}-${String(india.getDate()).padStart(2, "0")}`;
}

/**
 * "Book Your Appointment Today": actions and reassurance on the left, the request
 * form on the right, contact details underneath. There is no backend yet - the form
 * validates, then offers a prefilled WhatsApp message to the clinic.
 */
export function Appointment() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", type: "", concern: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.name.trim()) return setError("Please add your full name.");
    if (form.phone.replace(/\D/g, "").slice(-10).length < 10) return setError("Please enter a 10-digit mobile number.");
    if (!form.date) return setError("Please choose a preferred date.");
    if (!form.type) return setError("Please select a consultation type.");
    setSubmitted(true);
  }

  const dateLabel = form.date
    ? new Date(`${form.date}T00:00:00`).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })
    : "";

  const waLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
    `Hello, I'd like to book a ${form.type.toLowerCase()} on ${dateLabel}. Name: ${form.name}.${form.concern ? ` Concern: ${form.concern}` : ""}`
  )}`;

  return (
    <section id="book" className="from-ivory to-sage/50 scroll-mt-20 bg-gradient-to-b">
      <div className="container-page section-y">
        <div className="grid items-start gap-x-14 gap-y-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="bg-sage text-forest-soft inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-[13px] font-semibold tracking-[0.14em] uppercase">
              <CalendarDays className="size-[18px]" aria-hidden="true" />
              Appointment &amp; contact
            </span>
            <h2 className="display text-ink mt-6 text-[clamp(38px,5.2vw,68px)] leading-[1.03] tracking-[-0.02em]">
              Book Your
              <span className="text-forest-soft block">Appointment Today</span>
            </h2>
            <p className="text-muted mt-5 max-w-[30em] text-[19px] leading-[1.6]">
              Get expert consultation and personalised care from {CLINIC.doctor} at {CLINIC.name}.
            </p>

            <div className="mt-8 grid gap-3.5 sm:grid-cols-3">
              <a
                href="#appointment-form"
                className="bg-forest text-ivory hover:bg-forest-soft flex items-center gap-3 rounded-2xl p-4 transition-colors"
              >
                <CalendarDays className="size-6 flex-none" aria-hidden="true" />
                <span className="min-w-0 leading-tight">
                  <strong className="block text-[16px]">Book Appointment</strong>
                  <span className="text-ivory/75 text-[13px]">Choose date &amp; time</span>
                </span>
              </a>
              <a href={CLINIC.phoneHref} className="bg-paper border-forest/10 flex items-center gap-3 rounded-2xl border p-4">
                <span className="bg-sage text-forest grid size-10 flex-none place-items-center rounded-full">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 leading-tight">
                  <strong className="block text-[16px]">Call Now</strong>
                  <span className="text-subtle text-[13px]">{CLINIC.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paper border-forest/10 flex items-center gap-3 rounded-2xl border p-4"
              >
                <span className="bg-sage text-forest grid size-10 flex-none place-items-center rounded-full">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 leading-tight">
                  <strong className="block text-[16px]">Chat on WhatsApp</strong>
                  <span className="text-subtle text-[13px]">Quick response</span>
                </span>
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {BOOKING_BENEFITS.map((benefit) => (
                <li key={benefit.label} className="flex items-center gap-3">
                  <span className="bg-sage text-forest grid size-11 flex-none place-items-center rounded-full">
                    <benefit.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-muted text-[14.5px] leading-snug">{benefit.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="appointment-form"
            className="bg-paper/95 scroll-mt-24 rounded-[28px] border border-forest/10 p-[clamp(22px,3vw,34px)] shadow-[0_30px_60px_rgba(16,42,32,0.12)]"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="bg-sage text-forest grid size-14 flex-none place-items-center rounded-2xl">
                    <CalendarDays className="size-7" aria-hidden="true" />
                  </span>
                  <span className="leading-snug">
                    <h3 className="text-ink text-[22px] font-semibold">Book an Appointment</h3>
                    <span className="text-subtle text-[15px]">Fill in your details and our team will get back to you.</span>
                  </span>
                </div>

                <div className="mt-2 grid gap-3.5 sm:grid-cols-2">
                  <label className={fieldBox}>
                    <User className="text-subtle size-[18px] flex-none" aria-hidden="true" />
                    <input
                      className={fieldInput}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Full name *"
                      aria-label="Full name"
                      autoComplete="name"
                    />
                  </label>
                  <label className={fieldBox}>
                    <Phone className="text-subtle size-[18px] flex-none" aria-hidden="true" />
                    <input
                      className={fieldInput}
                      type="tel"
                      inputMode="numeric"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value.replace(/[^\d+ ]/g, ""))}
                      placeholder="Phone number *"
                      aria-label="Phone number"
                      autoComplete="tel"
                    />
                  </label>
                  <label className={fieldBox}>
                    <Mail className="text-subtle size-[18px] flex-none" aria-hidden="true" />
                    <input
                      className={fieldInput}
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="Email (optional)"
                      aria-label="Email (optional)"
                      autoComplete="email"
                    />
                  </label>
                  <label className={fieldBox}>
                    <CalendarDays className="text-subtle size-[18px] flex-none" aria-hidden="true" />
                    <input
                      className={fieldInput}
                      type="date"
                      min={todayIso()}
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      aria-label="Preferred date"
                    />
                  </label>
                </div>

                <label className={fieldBox}>
                  <MessageSquareText className="text-subtle size-[18px] flex-none" aria-hidden="true" />
                  <select
                    className={`${fieldInput} appearance-none ${form.type ? "" : "text-subtle"}`}
                    value={form.type}
                    onChange={(e) => update("type", e.target.value)}
                    aria-label="Consultation type"
                  >
                    <option value="">Select consultation type *</option>
                    {CONSULTATION_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="text-subtle pointer-events-none size-[18px] flex-none" aria-hidden="true" />
                </label>

                <label className={`${fieldBox} items-start py-3.5`}>
                  <MessageSquareText className="text-subtle mt-0.5 size-[18px] flex-none" aria-hidden="true" />
                  <textarea
                    className={`${fieldInput} min-h-[88px] resize-none`}
                    value={form.concern}
                    onChange={(e) => update("concern", e.target.value)}
                    placeholder="Briefly describe your concern (optional)"
                    aria-label="Your concern (optional)"
                  />
                </label>

                {error && (
                  <p role="alert" className="text-danger text-[14.5px] font-medium">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="bg-forest text-ivory hover:bg-forest-soft flex items-center justify-center gap-2.5 rounded-full px-4 py-4 text-[17px] font-semibold transition-colors"
                >
                  <CalendarDays className="size-5" aria-hidden="true" />
                  Request Appointment
                  <ArrowRight className="size-[18px]" aria-hidden="true" />
                </button>
                <p className="text-subtle flex items-center justify-center gap-2 text-sm">
                  <Lock className="size-3.5" aria-hidden="true" />
                  Your information is safe and confidential.
                </p>
              </form>
            ) : (
              <div className="py-8 text-center" role="status">
                <span className="bg-sage text-forest inline-grid size-[76px] place-items-center rounded-full">
                  <Check className="size-9" aria-hidden="true" />
                </span>
                <h3 className="display text-ink mt-5 text-[32px] leading-[1.15]">
                  Thank you, {form.name.trim().split(" ")[0] || "friend"}.
                </h3>
                <p className="text-muted mx-auto mt-3 max-w-[26em] text-[16.5px] leading-[1.65]">
                  We&apos;ll call <strong className="text-body">{form.phone}</strong> to confirm your{" "}
                  <strong className="text-body">{form.type.toLowerCase()}</strong> on{" "}
                  <strong className="text-body">{dateLabel}</strong>.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-forest text-ivory inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold"
                  >
                    <MessageCircle className="size-[19px]" aria-hidden="true" />
                    Also send on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", date: "", type: "", concern: "" });
                    }}
                    className="border-forest text-forest rounded-full border-[1.5px] px-5 py-3 font-semibold"
                  >
                    Book another
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact strip */}
        <ul className="bg-paper mt-14 grid gap-x-8 gap-y-6 rounded-3xl border border-forest/10 p-7 shadow-[0_1px_2px_rgba(16,42,32,0.04)] sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex gap-4">
            <span className="bg-forest text-ivory grid size-12 flex-none place-items-center rounded-full">
              <MapPin className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-snug">
              <strong className="block text-[16.5px]">Our Location</strong>
              <span className="text-muted text-[14.5px]">{CLINIC.address}</span>
            </span>
          </li>
          <li className="flex gap-4">
            <span className="bg-forest text-ivory grid size-12 flex-none place-items-center rounded-full">
              <Clock className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-snug">
              <strong className="block text-[16.5px]">Clinic Hours</strong>
              <span className="text-muted text-[14.5px]">
                Mon – Sun: {MORNING_HOURS}
                <br />
                {EVENING_HOURS}
              </span>
            </span>
          </li>
          <li className="flex gap-4">
            <span className="bg-forest text-ivory grid size-12 flex-none place-items-center rounded-full">
              <Phone className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-snug">
              <strong className="block text-[16.5px]">Call Us</strong>
              <a href={CLINIC.phoneHref} className="text-muted block text-[14.5px]">
                {CLINIC.phoneDisplay}
              </a>
              <span className="text-subtle text-[13.5px]">For appointments &amp; queries</span>
            </span>
          </li>
          <li className="flex gap-4">
            <span className="bg-forest text-ivory grid size-12 flex-none place-items-center rounded-full">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 leading-snug">
              <strong className="block text-[16.5px]">Email Us</strong>
              <a href={`mailto:${CLINIC.email}`} className="text-muted block text-[14.5px] break-all">
                {CLINIC.email}
              </a>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
