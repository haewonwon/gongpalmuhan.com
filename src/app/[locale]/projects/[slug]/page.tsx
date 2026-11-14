import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx/MdxContent";
import { ProjectMeta } from "@/components/project/ProjectMeta";
import { LinkButton } from "@/components/ui/LinkButton";
import { projects } from "@/data/projects";
import { enabledLocales, type Locale } from "@/i18n/config";
import { getProjectMdx } from "@/lib/mdx";

type ProjectDetailPageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return enabledLocales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const result = await getProjectMdx(slug, locale);

  if (!result) {
    notFound();
  }

  const { project, source } = result;

  return (
    <article>
      <ProjectMeta project={project} />
      <MdxContent source={source} />
      <div className="mt-14 border-t border-(--color-rule-storm) pt-6">
        <LinkButton href={`/${locale}/projects`}>프로젝트 목록으로</LinkButton>
      </div>
    </article>
  );
}
