import Services from "@/views/Services";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("he", "/services", getDict("he").services.title, getDict("he").services.sub);
export default function Page() {
  return <Services lang="he" />;
}
