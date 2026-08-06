import { permanentRedirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  // 308 permanent redirect consolidates crawl signals onto the default locale.
  permanentRedirect(`/${defaultLocale}`);
}
