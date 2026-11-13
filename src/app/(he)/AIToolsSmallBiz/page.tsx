import ArticleView from "@/views/ArticleView";
import { articles } from "@/content/articles";
import { meta } from "@/lib/meta";

const a = articles.find((x) => x.slug === "ai-tools-small-business")!;
export const metadata = meta("he", a.hePath, a.he!.title, a.he!.excerpt, false);
export default function Page() {
  return <ArticleView a={a} lang="he" />;
}
