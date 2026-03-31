"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import Button from "@/components/ui/Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
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
        throw new Error(json?.error || "Failed to send message");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gray-200 p-10">
        <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-4">
          Message Sent
        </p>
        <h3 className="font-display text-2xl font-bold text-text-primary leading-[1.1] mb-4">
          Thank you for<br />
          <span className="italic font-normal">reaching out.</span>
        </h3>
        <div className="w-12 h-px bg-gold/50 mb-4" />
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          We have received your message and will respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-text-primary text-xs font-medium uppercase tracking-[0.15em] hover:text-red transition-colors duration-300"
        >
          Send another message &#8594;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot — hidden from users, bots fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
            Full Name <span className="text-red">*</span>
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
            Email <span className="text-red">*</span>
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
            Phone
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
            Company
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
          Interest Area
        </label>
        <select
          id="interest"
          className="w-full border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-gray-400 focus:ring-1 focus:ring-navy/20 bg-white"
          {...register("interest")}
        >
          <option value="">Select one...</option>
          <option value="hotels">Hotels &amp; Restaurants</option>
          <option value="residential">Residential</option>
          <option value="processing">Food Processing</option>
          <option value="demo">Demo Request</option>
          <option value="partnership">Partnership</option>
          <option value="other">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
          Message <span className="text-red">*</span>
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
        Fields marked with * are required. We respond within one business day.
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
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
