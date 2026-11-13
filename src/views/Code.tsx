import { getDict, SITE, type Lang } from "@/lib/i18n";
import { Btn, PageHero } from "@/components/ui";
import { CtaBlock, RepoCard } from "@/components/cards";
import { repos } from "@/content/repos";

export default function Code({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <>
      <PageHero eyebrow={d.repos.eyebrow} title={d.repos.pageTitle} sub={d.repos.pageSub} />
      <section className="mx-auto max-w-6xl px-5 pb-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r, i) => <RepoCard key={r.name} repo={r} lang={lang} t={d.repos} i={i} />)}
        </div>
        <div className="reveal mt-10 flex justify-center"><Btn href={SITE.github} external variant="ghost">{d.repos.profile}</Btn></div>
      </section>
      <CtaBlock lang={lang} d={d} />
    </>
  );
}
