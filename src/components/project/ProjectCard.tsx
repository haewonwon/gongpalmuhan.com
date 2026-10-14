import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/data/projects';
import type { Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  locale: Locale;
  project: Project;
  trimFirstBorder?: boolean;
};

export function ProjectCard({ locale, project, trimFirstBorder = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group border-t border-(--color-rule-storm) py-5 last:border-b',
        trimFirstBorder && 'first:border-t-0 first:pt-0',
      )}
    >
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="min-w-0">
          <p className="text-(length:--text-caption) text-(--color-muted-ink)">
            {project.period} · {project.team} · {project.role}
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-normal text-(--color-ink)">
            <a
              className="underline decoration-(--color-rule-rain) underline-offset-4 transition-colors duration-(--dur-fast) hover:text-(--color-graphite) hover:decoration-(--color-graphite) group-hover:text-(--color-graphite)"
              href={`/${locale}/projects/${project.slug}`}
            >
              {project.title}
            </a>
          </h2>
          <p className="mt-2 max-w-2xl leading-7 text-(--color-muted-ink)">{project.description}</p>
        </div>
        <a
          aria-label={`${project.title} 상세 보기`}
          className="inline-flex size-9 shrink-0 items-center justify-center border border-(--color-rule-rain) text-(--color-ink) transition-colors duration-(--dur-fast) hover:bg-(--color-paper-mark) hover:text-(--color-graphite)"
          href={`/${locale}/projects/${project.slug}`}
        >
          <ArrowRight size={17} aria-hidden />
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
        {project.stack.slice(0, 6).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </article>
  );
}
