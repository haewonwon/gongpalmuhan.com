import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { ProjectMeta } from "@/components/project/ProjectMeta";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";
import { projects } from "@/data/projects";
import { getProjectMdx } from "@/lib/mdx";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const result = await getProjectMdx(slug);

  if (!result) {
    notFound();
  }

  const { project, source } = result;

  return (
    <article>
      <div className="mb-10 border-b border-(--color-rule-storm) pb-7">
        <p className="mb-3 text-(length:--text-caption) font-medium text-(--color-graphite)">
          {project.team} · {project.period}
        </p>
        <h1 className="max-w-3xl text-(length:--text-title) font-semibold leading-tight tracking-normal text-(--color-ink)">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-(length:--text-lede) leading-8 text-(--color-muted-ink)">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5">
          {project.stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={project.github} external>
            GitHub
          </LinkButton>
          <LinkButton href="/projects">목록으로</LinkButton>
        </div>
      </div>

      <ProjectMeta project={project} />

      <div className="prose-content mt-8">
        <MDXRemote components={MDXComponents} source={source} />
      </div>
    </article>
  );
}
