import { FileText } from "lucide-react";
import { getNavItems } from "@/components/layout/nav";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const navItems = getNavItems(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-(--color-rule-storm) bg-(--color-surface) xl:hidden">
      <div className="flex h-16 items-center justify-between gap-2 px-4 sm:px-5">
        <a
          aria-label={`${profile.name} 홈`}
          className="flex shrink-0 items-center gap-2 text-sm font-semibold"
          href={`/${locale}`}
        >
          <FileText size={18} aria-hidden />
          {/* 360px 미만에서는 메뉴 4개가 들어가도록 이름을 숨기고 아이콘만 둡니다. */}
          <span className="hidden min-[360px]:inline">{profile.name}</span>
        </a>
        <nav aria-label="주요 메뉴" className="flex items-center">
          {navItems.map((item) => (
            <a
              className="rounded-(--radius-small) px-2 py-2 text-sm text-(--color-muted-ink) transition-colors duration-(--dur-fast) hover:bg-(--color-paper-mark) hover:text-(--color-ink) sm:px-2.5"
              href={item.href}
              key={item.href}
              rel={item.external ? "noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
