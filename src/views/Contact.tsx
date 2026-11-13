import { getDict, SITE, type Lang } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";

export default function Contact({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <>
      <PageHero eyebrow={d.contact.eyebrow} title={d.contact.title} sub={d.contact.sub} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="reveal hairline rounded-2xl p-6 sm:p-8"><ContactForm t={d.contact} /></div>
        <aside className="reveal space-y-4">
          <div className="hairline rounded-2xl p-6">
            <p className="text-sm text-muted">{d.contact.direct}</p>
            <a href={`mailto:${SITE.email}`} className="mt-2 flex items-center gap-2 font-mono text-sm hover:text-accent"><Icon name="mail" className="size-4" />{SITE.email}</a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 font-mono text-sm hover:text-accent"><Icon name="linkedin" className="size-4" />linkedin/sharon-ben-haim</a>
          </div>
          <div className="hairline rounded-2xl p-6 text-sm text-muted">{d.footer.office}</div>
        </aside>
      </section>
    </>
  );
}
