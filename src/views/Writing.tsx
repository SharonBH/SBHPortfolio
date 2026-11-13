import { getDict, type Lang } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { ArticleRow } from "@/components/cards";
import { sortedArticles } from "@/content/articles";

export default function Writing({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const list = lang === "he" ? sortedArticles.filter((a) => a.he) : [...sortedArticles.filter((a) => a.en), ...sortedArticles.filter((a) => !a.en)];
  return (
    <>
      <PageHero eyebrow={d.writing.eyebrow} title={d.writing.title} sub={d.writing.sub} />
      <section className="mx-auto max-w-6xl px-5">
        <div className="border-t border-line">
          {list.map((a, i) => <ArticleRow key={a.slug} a={a} lang={lang} d={d} i={i} />)}
        </div>
      </section>
    </>
  );
}
