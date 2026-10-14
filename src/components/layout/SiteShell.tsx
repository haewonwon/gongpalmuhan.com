import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import type { Locale } from "@/i18n/config";

type SiteShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteShell({ locale, children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-(--color-paper) text-(--color-ink)">
      <Header locale={locale} />
      <Sidebar locale={locale} />
      <main className="mx-auto w-full max-w-(--content-max) px-5 pb-20 pt-24 md:px-10 lg:px-12 xl:ml-(--sidebar-width) xl:mr-auto xl:pt-14">
        {children}
      </main>
    </div>
  );
}
