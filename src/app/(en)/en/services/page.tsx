import Services from "@/views/Services";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("en", "/en/services", getDict("en").services.title, getDict("en").services.sub);
export default function Page() {
  return <Services lang="en" />;
}
