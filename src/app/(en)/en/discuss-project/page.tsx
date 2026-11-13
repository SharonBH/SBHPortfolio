import Contact from "@/views/Contact";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("en", "/en/discuss-project", getDict("en").contact.title, getDict("en").contact.sub);
export default function Page() {
  return <Contact lang="en" />;
}
