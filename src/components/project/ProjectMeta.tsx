import { Badge } from "@/components/ui/Badge";
import { ProjectLinks } from "@/components/project/ProjectLinks";
import type { Project } from "@/data/projects";

type ProjectMetaProps = {
  project: Project;
};

/** 프로젝트 상세 상단 요약: 제목, 목적, 기본 정보, 핵심 기여, 링크를 한 블록으로 보여줍니다. */
export function ProjectMeta({ project }: ProjectMetaProps) {
  const facts = [
    { label: "기간", value: project.period },
    { label: "팀 구성", value: project.team },
    { label: "역할", value: project.role },
    { label: "상태", value: [project.status, project.award].filter(Boolean).join(" · ") },
  ].filter((fact) => fact.value);

  return (
    <header className="mb-10 border-b border-(--color-rule-storm) pb-8">
      {project.affiliation ? (
        <p className="mb-3 text-(length:--text-caption) font-medium text-(--color-graphite)">
          {project.affiliation}
        </p>
      ) : null}
      <h1 className="max-w-3xl text-(length:--text-title) font-semibold leading-tight tracking-normal text-(--color-ink)">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-(length:--text-lede) leading-8 text-(--color-muted-ink)">
        {project.summary}
      </p>

      <dl className="mt-7 grid gap-x-6 gap-y-4 border-y border-(--color-rule-graphite) py-5 sm:grid-cols-2">
        {facts.map((fact) => (
          <div className="border-l border-(--color-rule-storm) pl-3" key={fact.label}>
            <dt className="text-xs font-medium text-(--color-muted-ink)">{fact.label}</dt>
            <dd className="mt-1 text-sm font-medium text-(--color-ink)">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="highlights-heading" className="mt-6">
        <h2 id="highlights-heading" className="text-sm font-semibold text-(--color-ink)">
          핵심 기여
        </h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7 text-(--color-muted-ink)">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1.5">
        {project.stack.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>

      <ProjectLinks className="mt-5" links={project.links} />
    </header>
  );
}
