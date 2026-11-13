import Code from "@/views/Code";
import { meta } from "@/lib/meta";
import { getDict } from "@/lib/i18n";

export const metadata = meta("he", "/code", getDict("he").repos.pageTitle, getDict("he").repos.pageSub);
export default function Page() {
  return <Code lang="he" />;
}
