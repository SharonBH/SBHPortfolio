import About from "@/views/About";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("he", "/about", getDict("he").about.title, getDict("he").about.p[0]);
export default function Page() {
  return <About lang="he" />;
}
