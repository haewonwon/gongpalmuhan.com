import { ProjectCard } from '@/components/project/ProjectCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';
import type { Locale } from '@/i18n/config';

export const metadata = {
  title: 'Projects',
};

type ProjectsPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  return (
    <div>
      <SectionTitle
        title="Projects"
        description={`프론트엔드 구조 설계부터 실제 운영과 AI-native 개발까지, \n경험을 통해 배운 것들을 정리했습니다.`}
      />
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} locale={locale} project={project} trimFirstBorder />
        ))}
      </div>
    </div>
  );
}
