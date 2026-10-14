import { FileText } from "lucide-react";
import type { Locale } from "@/i18n/config";

const getNavItems = (locale: Locale) => [
  { href: `/${locale}`, label: "Home" },
  { href: `/${locale}/projects`, label: "Projects" },
  { href: `/${locale}/profile`, label: "Profile" },
];

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const navItems = getNavItems(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-(--color-rule-storm) bg-(--color-surface) xl:hidden">
      <div className="flex h-16 items-center justify-between px-5">
        <a className="flex items-center gap-2 text-sm font-semibold" href={`/${locale}`}>
          <FileText size={18} aria-hidden />
          김해원
        </a>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              className="rounded-(--radius-small) px-2.5 py-2 text-sm text-(--color-muted-ink) transition-colors duration-(--dur-fast) hover:bg-(--color-paper-mark) hover:text-(--color-ink)"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
