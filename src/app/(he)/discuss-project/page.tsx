import Contact from "@/views/Contact";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("he", "/discuss-project", getDict("he").contact.title, getDict("he").contact.sub);
export default function Page() {
  return <Contact lang="he" />;
}
