import { ProjectCard } from "@/components/project/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <SectionTitle
        eyebrow="Projects"
        title="프로젝트"
        description="프론트엔드 구현, 상태 관리, API 연동, 배포 경험을 중심으로 정리한 프로젝트 목록입니다."
      />
      <div className="mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
