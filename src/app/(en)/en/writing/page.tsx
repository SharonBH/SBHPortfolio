import Writing from "@/views/Writing";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("en", "/en/writing", getDict("en").writing.title, getDict("en").writing.sub);
export default function Page() {
  return <Writing lang="en" />;
}
