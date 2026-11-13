import Writing from "@/views/Writing";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("he", "/writing", getDict("he").writing.title, getDict("he").writing.sub);
export default function Page() {
  return <Writing lang="he" />;
}
