import { ArrowUpRight } from 'lucide-react';
import type { ProjectLink } from '@/data/projects';
import { cn } from '@/lib/utils';

type ProjectLinksProps = {
  links: ProjectLink[];
  className?: string;
};

/** 서비스, 저장소, 문서 링크. 카드와 상세 상단에서 같은 모양으로 씁니다. */
export function ProjectLinks({ links, className }: ProjectLinksProps) {
  if (!links.length) {
    return null;
  }

  return (
    <ul className={cn('flex flex-wrap gap-x-4 gap-y-1.5', className)}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            className="inline-flex items-center gap-1 text-sm font-medium text-(--color-ink) underline decoration-(--color-rule-storm-strong) underline-offset-4 transition-colors duration-(--dur-fast) hover:text-(--color-graphite) hover:decoration-(--color-graphite)"
            href={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
            <ArrowUpRight size={14} aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
