import { getDict, type Lang } from "@/lib/i18n";
import { PageHero, SectionHead } from "@/components/ui";
import { ArticleRow, GuideCard } from "@/components/cards";
import { byKind, type Article } from "@/content/articles";

/** Hebrew shows Hebrew items; English shows English first, then Hebrew-only items. */
const forLang = (list: Article[], lang: Lang) =>
  lang === "he" ? list.filter((a) => a.he) : [...list.filter((a) => a.en), ...list.filter((a) => !a.en)];

export default function Writing({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const articles = forLang(byKind("article"), lang);
  const guides = forLang(byKind("guide"), lang);
  return (
    <>
      <PageHero eyebrow={d.writing.eyebrow} title={d.writing.title} sub={d.writing.sub} />
      <section id="articles" className="mx-auto max-w-6xl scroll-mt-28 px-5">
        <SectionHead eyebrow={d.writing.articlesEyebrow} title={d.writing.articlesTitle} sub={d.writing.articlesSub} />
        <div className="border-t border-line">
          {articles.map((a, i) => <ArticleRow key={a.slug} a={a} lang={lang} d={d} i={i} />)}
        </div>
      </section>
      <section id="guides" className="mx-auto mt-24 max-w-6xl scroll-mt-28 px-5">
        <SectionHead eyebrow={d.writing.guidesEyebrow} title={d.writing.guidesTitle} sub={d.writing.guidesSub} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((a, i) => <GuideCard key={a.slug} a={a} lang={lang} d={d} i={i} />)}
        </div>
      </section>
    </>
  );
}
