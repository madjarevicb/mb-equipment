import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Business Solutions",
  alternates: { canonical: "/business/hotels-restaurants" },
};

export default function BusinessPage() {
  redirect("/business/hotels-restaurants");
}
