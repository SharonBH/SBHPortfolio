import AILab from "@/views/AILab";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("en", "/en/ai", getDict("en").ai.title, getDict("en").ai.sub);
export default function Page() {
  return <AILab lang="en" />;
}
