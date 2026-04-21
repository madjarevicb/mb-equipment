import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(`/${locale}/about/company-overview`);
}
