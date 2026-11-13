import Code from "@/views/Code";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("en", "/en/code", getDict("en").repos.pageTitle, getDict("en").repos.pageSub);
export default function Page() {
  return <Code lang="en" />;
}
