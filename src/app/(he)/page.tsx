import Home from "@/views/Home";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("he", "/", undefined, undefined);
export default function Page() {
  return <Home lang="he" />;
}
