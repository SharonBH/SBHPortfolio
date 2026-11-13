import AILab from "@/views/AILab";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("he", "/ai", getDict("he").ai.title, getDict("he").ai.sub);
export default function Page() {
  return <AILab lang="he" />;
}
