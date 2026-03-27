import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { error: "Name must be at least 2 characters" }).max(100),
  email: z.string().email({ error: "Please enter a valid email address" }).max(254),
  phone: z.string().optional(),
  company: z.string().max(200).optional(),
  interest: z.enum(["hotels", "residential", "processing", "demo", "partnership", "other"]).optional(),
  message: z.string().min(10, { error: "Message must be at least 10 characters" }).max(5000),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
