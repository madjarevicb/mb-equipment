import { redirect } from "next/navigation";

export default async function CookingRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/equipment/thermal-processing`);
}
