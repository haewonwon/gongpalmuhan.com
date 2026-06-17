import { Github, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-(--sidebar-width) border-r border-(--color-rule-storm) bg-(--color-surface) px-5 py-6 xl:block">
      <div className="flex h-full flex-col">
        <a
          href="/"
          className="block border-l-2 border-(--color-storm) px-3 py-2 transition-colors duration-(--dur-fast) hover:bg-(--color-paper-mark)"
        >
          <p className="text-base font-semibold text-(--color-ink)">{profile.name}</p>
          <p className="mt-1 text-sm text-(--color-muted-ink)">{profile.title}</p>
        </a>

        <nav className="mt-10 border-t border-(--color-rule-rain) pt-4">
          {navItems.map((item) => (
            <a
              className="block border-b border-(--color-rule-graphite) px-1 py-2.5 text-sm text-(--color-muted-ink) transition-colors duration-(--dur-fast) hover:text-(--color-ink)"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 border-t border-(--color-rule-rain) pt-6">
          <p className="flex items-center gap-2 text-sm text-(--color-muted-ink)">
            <MapPin size={15} aria-hidden />
            {profile.location}
          </p>
          {profile.links.map((link) => (
            <a
              key={link.href}
              className="mt-3 flex items-center gap-2 text-sm text-(--color-muted-ink) transition-colors duration-(--dur-fast) hover:text-(--color-graphite)"
              href={link.href}
            >
              {link.icon === 'github' ? (
                <Github size={15} aria-hidden />
              ) : (
                <Mail size={15} aria-hidden />
              )}
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-auto text-xs leading-5 text-(--color-faint-ink)">gongpalmuhan.com</p>
      </div>
    </aside>
  );
}
