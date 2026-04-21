import { redirect } from "next/navigation";
import type { Locale } from "@/i18n/config";

export const dynamic = "force-static";

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/business/hotels-restaurants`);
}
