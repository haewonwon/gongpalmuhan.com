import { ArrowRight } from 'lucide-react';
import { ProjectLinks } from '@/components/project/ProjectLinks';
import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/data/projects';
import type { Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  locale: Locale;
  project: Project;
  trimFirstBorder?: boolean;
  /** 홈처럼 섹션 제목(h2) 아래에 놓일 때는 h3를 사용합니다. */
  headingLevel?: 'h2' | 'h3';
};

export function ProjectCard({
  locale,
  project,
  trimFirstBorder = false,
  headingLevel = 'h2',
}: ProjectCardProps) {
  const Heading = headingLevel;
  const detailHref = `/${locale}/projects/${project.slug}`;

  return (
    <article
      className={cn(
        'group border-t border-(--color-rule-storm) py-6 last:border-b',
        trimFirstBorder && 'first:border-t-0 first:pt-0',
      )}
    >
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="min-w-0">
          <p className="text-(length:--text-caption) text-(--color-muted-ink)">
            {project.period} · {project.team}
          </p>
          <Heading className="mt-1 text-xl font-semibold tracking-normal text-(--color-ink)">
            <a
              className="underline decoration-(--color-rule-rain) underline-offset-4 transition-colors duration-(--dur-fast) hover:text-(--color-graphite) hover:decoration-(--color-graphite) group-hover:text-(--color-graphite)"
              href={detailHref}
            >
              {project.title}
            </a>
          </Heading>
          <p className="mt-2 max-w-2xl leading-7 text-(--color-muted-ink)">{project.summary}</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-(--color-ink)">
            <span className="font-semibold">{project.role}</span>
            <span aria-hidden> — </span>
            {project.contribution}
          </p>
        </div>
        <a
          aria-label={`${project.title} 상세 보기`}
          className="hidden size-9 shrink-0 items-center justify-center border border-(--color-rule-rain) text-(--color-ink) transition-colors duration-(--dur-fast) hover:bg-(--color-paper-mark) hover:text-(--color-graphite) sm:inline-flex"
          href={detailHref}
        >
          <ArrowRight size={17} aria-hidden />
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
        {project.stack.slice(0, 5).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <ProjectLinks className="mt-3" links={project.links} />
    </article>
  );
}
