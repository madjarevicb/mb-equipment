import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about/company-overview" },
};

export default function AboutPage() {
  redirect("/about/company-overview");
}
