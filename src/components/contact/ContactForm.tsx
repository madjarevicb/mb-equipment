"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  buildContactFormSchema,
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface Props {
  dict: Dictionary["contact"]["form"];
  initialMessage?: string;
  productLabel?: string | null;
  failedToSendLabel?: string;
  websiteHoneypotLabel?: string;
  locale?: Locale;
}

export default function ContactForm({ dict, initialMessage, productLabel, failedToSendLabel, websiteHoneypotLabel, locale }: Props) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState("");

  const schema = useMemo(
    () => (locale ? buildContactFormSchema(locale) : contactFormSchema),
    [locale],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      message: initialMessage ?? "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.error || failedToSendLabel || "Failed to send message");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : dict.errorFallback);
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gray-200 p-10">
        <p className="text-gold-text text-xs font-medium uppercase tracking-[0.3em] mb-4">
          {dict.successEyebrow}
        </p>
        <h3 className="font-display text-2xl font-bold text-text-primary leading-[1.1] mb-4">
          {dict.successHeading1}<br />
          <span className="italic font-normal">{dict.successHeading2}</span>
        </h3>
        <div className="w-12 h-px bg-gold/50 mb-4" />
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {dict.successBody}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-text-primary text-xs font-medium uppercase tracking-[0.15em] hover:text-red transition-colors duration-300"
        >
          {dict.successReset} &#8594;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {productLabel && (
        <div className="border-l border-gold/60 pl-5 py-1 mb-2">
          <p className="text-gold-text text-xs font-medium uppercase tracking-[0.3em] mb-2">
            &sect; {dict.askingAboutEyebrow}
          </p>
          <p className="font-display italic text-text-primary text-xl sm:text-2xl leading-tight">
            {productLabel}
          </p>
          <div className="w-10 h-px bg-gold/50 mt-3 mb-3" />
          <p className="text-text-secondary text-xs leading-relaxed">
            {dict.askingAboutHint}
          </p>
        </div>
      )}

      {/* Honeypot — hidden from users, bots fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">{websiteHoneypotLabel ?? "Website"}</label>
        <input type="text" id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
            {dict.nameLabel} <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full border px-4 py-3 text-sm transition-colors focus:border-navy focus:ring-1 focus:ring-navy/20 ${
              errors.name ? "border-red" : "border-gray-200 focus:border-gray-400"
            }`}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red text-xs mt-1.5">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
            {dict.emailLabel} <span className="text-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full border px-4 py-3 text-sm transition-colors focus:border-navy focus:ring-1 focus:ring-navy/20 ${
              errors.email ? "border-red" : "border-gray-200 focus:border-gray-400"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red text-xs mt-1.5">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
            {dict.phoneLabel}
          </label>
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            className="w-full border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-gray-400 focus:ring-1 focus:ring-navy/20"
            {...register("phone")}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
            {dict.companyLabel}
          </label>
          <input
            type="text"
            id="company"
            autoComplete="organization"
            className="w-full border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-gray-400 focus:ring-1 focus:ring-navy/20"
            {...register("company")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-text-primary mb-1.5">
          {dict.interestLabel}
        </label>
        <select
          id="interest"
          className="w-full border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-gray-400 focus:ring-1 focus:ring-navy/20 bg-white"
          {...register("interest")}
        >
          {dict.interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
          {dict.messageLabel} <span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full border px-4 py-3 text-sm transition-colors resize-none focus:ring-1 focus:ring-navy/20 ${
            errors.message ? "border-red" : "border-gray-200 focus:border-gray-400"
          }`}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-red text-xs mt-1.5">
            {errors.message.message}
          </p>
        )}
      </div>

      <p className="text-xs text-text-secondary">
        {dict.requiredNote}
      </p>

      {serverError && (
        <div role="alert" className="border border-red/20 bg-red/5 px-4 py-3">
          <p className="text-red text-sm">{serverError}</p>
        </div>
      )}

      <Button
        variant="primary"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? dict.submitSending : dict.submitIdle}
      </Button>
    </form>
  );
}
