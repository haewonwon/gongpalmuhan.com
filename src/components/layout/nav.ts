import { profile } from '@/data/profile';
import type { Locale } from '@/i18n/config';

export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

/** Header(모바일)와 Sidebar(데스크톱)가 같은 목록을 사용합니다. */
export const getNavItems = (locale: Locale): NavItem[] => [
  { href: `/${locale}`, label: 'Home' },
  { href: `/${locale}/projects`, label: 'Projects' },
  { href: `/${locale}/profile`, label: 'Profile' },
  { href: profile.resume, label: 'Resume', external: true },
];
