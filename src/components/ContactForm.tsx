"use client";
import { useState } from "react";
import type { Dict } from "@/lib/i18n";

type T = Dict["contact"];
const empty = { name: "", company: "", email: "", phone: "", projectIdea: "" };

export default function ContactForm({ t }: { t: T }) {
  const [data, setData] = useState(empty);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err" | "fail">("idle");
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setData({ ...data, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone) return setState("err");
    setState("sending");
    try {
      const [{ db }, { collection, addDoc, serverTimestamp }, emailjs] = await Promise.all([
        import("@/lib/firebase"), import("firebase/firestore"), import("@emailjs/browser"),
      ]);
      await addDoc(collection(db, "contacts"), { ...data, createdAt: serverTimestamp(), source: "sbh-v2" });
      await emailjs.send("service_nh3qpeo", "template_cl95ncj", {
        from_name: `${data.name} - ${data.company} ( ${data.phone} - ${data.email} )`,
        to_name: "SBH",
        message: data.projectIdea || "No message entered",
      }, { publicKey: "rKj7eMi6MOmYV3Te9" });
      setData(empty);
      setState("ok");
    } catch (err) {
      console.error(err);
      setState("fail");
    }
  };

  const field = "w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-[15px] outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-[var(--glow)]";
  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <input className={field} placeholder={t.name + " *"} value={data.name} onChange={set("name")} autoComplete="name" />
      <input className={field} placeholder={t.company} value={data.company} onChange={set("company")} autoComplete="organization" />
      <input className={field} type="email" placeholder={t.email + " *"} value={data.email} onChange={set("email")} autoComplete="email" dir="ltr" />
      <input className={field} type="tel" placeholder={t.phone + " *"} value={data.phone} onChange={set("phone")} autoComplete="tel" dir="ltr" />
      <textarea className={`${field} min-h-36 sm:col-span-2`} placeholder={t.idea} value={data.projectIdea} onChange={set("projectIdea")} />
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button disabled={state === "sending"} className="rounded-full bg-accent-fill px-6 py-3 text-sm font-semibold text-on-accent transition hover:shadow-[0_0_0_6px_var(--glow)] disabled:opacity-60">
          {state === "sending" ? t.sending : t.submit}
        </button>
        <p role="status" className={`text-sm ${state === "ok" ? "text-accent" : "text-red-500"}`}>
          {state === "ok" ? t.ok : state === "err" ? t.err : state === "fail" ? t.fail : ""}
        </p>
      </div>
    </form>
  );
}
