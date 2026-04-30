import { z } from "zod";
import type { Locale } from "@/i18n/config";

const MESSAGES = {
  en: {
    nameMin: "Name must be at least 2 characters",
    emailInvalid: "Please enter a valid email address",
    messageMin: "Message must be at least 10 characters",
  },
  sr: {
    nameMin: "Ime mora imati najmanje 2 karaktera",
    emailInvalid: "Unesite ispravnu email adresu",
    messageMin: "Poruka mora imati najmanje 10 karaktera",
  },
} as const;

export const contactFormSchema = z.object({
  name: z.string().min(2, { error: MESSAGES.en.nameMin }).max(100),
  email: z.string().email({ error: MESSAGES.en.emailInvalid }).max(254),
  phone: z.string().optional(),
  company: z.string().max(200).optional(),
  interest: z.enum(["hotels", "residential", "processing", "demo", "partnership", "other"]).optional(),
  message: z.string().min(10, { error: MESSAGES.en.messageMin }).max(5000),
  website: z.string().max(0).optional(), // honeypot
});

export function buildContactFormSchema(locale: Locale) {
  const m = MESSAGES[locale] ?? MESSAGES.en;
  return z.object({
    name: z.string().min(2, { error: m.nameMin }).max(100),
    email: z.string().email({ error: m.emailInvalid }).max(254),
    phone: z.string().optional(),
    company: z.string().max(200).optional(),
    interest: z.enum(["hotels", "residential", "processing", "demo", "partnership", "other"]).optional(),
    message: z.string().min(10, { error: m.messageMin }).max(5000),
    website: z.string().max(0).optional(),
  });
}

export type ContactFormData = z.infer<typeof contactFormSchema>;
