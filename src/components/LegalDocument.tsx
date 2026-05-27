import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

export default function LegalDocument({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        返回 FitCalc
      </Link>

      <article className="mb-6 rounded-2xl border border-surface-border bg-surface-card/80 p-6 shadow-card backdrop-blur-sm sm:p-8">
        <header className="mb-8 border-b border-surface-border pb-6">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">{title}</h1>
          <p className="mt-2 text-sm text-gray-500">
            适用网站：fitcalc.com.cn · 最后更新：{lastUpdated}
          </p>
        </header>
        <div className="space-y-8 text-sm leading-relaxed text-gray-300">
          {children}
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-base font-semibold text-white">{title}</h2>
      <div className="space-y-3 text-gray-300">{children}</div>
    </section>
  );
}

export { Section };
