import { CalendarDays, Github, UserRound, UsersRound } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  const items = [
    { icon: CalendarDays, label: "기간", value: project.period },
    { icon: UsersRound, label: "형태", value: project.team },
    { icon: UserRound, label: "역할", value: project.role },
  ];

  return (
    <dl className="grid gap-4 border-y border-[color:var(--color-rule-graphite)] py-5 sm:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div className="border-l border-[color:var(--color-rule-storm)] pl-3" key={item.label}>
            <dt className="flex items-center gap-1.5 text-xs font-medium text-[color:var(--color-muted-ink)]">
              <Icon size={14} aria-hidden />
              {item.label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-[color:var(--color-ink)]">{item.value}</dd>
          </div>
        );
      })}
      <div className="border-l border-[color:var(--color-rule-rain)] pl-3 sm:col-span-3">
        <dt className="flex items-center gap-1.5 text-xs font-medium text-[color:var(--color-muted-ink)]">
          <Github size={14} aria-hidden />
          GitHub
        </dt>
        <dd className="mt-1 break-words text-sm">
          <a className="text-[color:var(--color-ink)] underline decoration-[color:var(--color-storm-soft)] underline-offset-4 hover:text-[color:var(--color-graphite)] hover:decoration-[color:var(--color-graphite)]" href={project.github} target="_blank" rel="noreferrer">
            {project.github}
          </a>
        </dd>
      </div>
    </dl>
  );
}
