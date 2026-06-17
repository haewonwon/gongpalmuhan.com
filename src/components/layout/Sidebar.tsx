import { Github, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[var(--sidebar-width)] border-r border-[color:var(--color-rule-storm)] bg-[color:var(--color-surface)] px-5 py-6 md:block">
      <div className="flex h-full flex-col">
        <a href="/" className="block border-l-2 border-[color:var(--color-storm)] px-3 py-2 transition-colors duration-[var(--dur-fast)] hover:bg-[color:var(--color-paper-mark)]">
          <p className="text-base font-semibold text-[color:var(--color-ink)]">{profile.name}</p>
          <p className="mt-1 text-sm text-[color:var(--color-muted-ink)]">{profile.title}</p>
        </a>

        <nav className="mt-10 border-t border-[color:var(--color-rule-storm)] pt-4">
          {navItems.map((item) => (
            <a
              className="block border-b border-[color:var(--color-rule-graphite)] px-1 py-2.5 text-sm text-[color:var(--color-muted-ink)] transition-colors duration-[var(--dur-fast)] hover:text-[color:var(--color-ink)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 border-t border-[color:var(--color-rule-rain)] pt-5">
          <p className="flex items-center gap-2 text-sm text-[color:var(--color-muted-ink)]">
            <MapPin size={15} aria-hidden />
            {profile.location}
          </p>
          <a className="mt-3 flex items-center gap-2 text-sm text-[color:var(--color-muted-ink)] hover:text-[color:var(--color-graphite)]" href={profile.github}>
            <Github size={15} aria-hidden />
            GitHub
          </a>
          <a className="mt-3 flex items-center gap-2 text-sm text-[color:var(--color-muted-ink)] hover:text-[color:var(--color-graphite)]" href={`mailto:${profile.email}`}>
            <Mail size={15} aria-hidden />
            Email
          </a>
        </div>

        <p className="mt-auto text-xs leading-5 text-[color:var(--color-faint-ink)]">gongpalmuhan.com</p>
      </div>
    </aside>
  );
}
