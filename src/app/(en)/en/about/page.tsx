import About from "@/views/About";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("en", "/en/about", getDict("en").about.title, getDict("en").about.p[0]);
export default function Page() {
  return <About lang="en" />;
}
