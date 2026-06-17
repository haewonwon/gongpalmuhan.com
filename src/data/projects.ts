export type Project = {
  slug: string;
  title: string;
  description: string;
  period: string;
  team: string;
  role: string;
  stack: string[];
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "unplan-app",
    title: "unplan-app",
    description: "AI 기반 스마트 스케줄러 모바일 앱",
    period: "2026.05 - 진행 중",
    team: "팀 프로젝트",
    role: "Frontend",
    stack: ["React Native", "Expo", "TypeScript", "TanStack Query", "Zustand", "Axios", "Orval"],
    github: "https://github.com/unplan-tave/unplan-app",
    featured: true,
  },
  {
    slug: "clubfair-2026",
    title: "clubfair-2026",
    description: "2026 동아리 박람회 실시간 성향 매칭 및 이벤트 관리 플랫폼",
    period: "2026.01 - 2026.03",
    team: "팀 프로젝트",
    role: "Frontend / 운영 기여",
    stack: ["React", "TypeScript", "Supabase", "Zustand", "TanStack Query", "Styled-components", "Vercel"],
    github: "https://github.com/IBAS-DEV-PROJECT/clubfair-2026",
    featured: true,
  },
  {
    slug: "mandalart",
    title: "mandalart",
    description: "만다라트 기반 목표 관리 웹 애플리케이션",
    period: "2025.12 - 진행 중",
    team: "개인 프로젝트",
    role: "Full-stack / Frontend 중심",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "React Query"],
    github: "https://github.com/haewonwon/mandalart",
    featured: true,
  },
  {
    slug: "brelio",
    title: "brelio",
    description: "경제 뉴스 요약 및 학습 트래킹 웹 서비스",
    period: "2025.11 - 진행 중",
    team: "개인 프로젝트",
    role: "Full-stack",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "GCP Cloud Run",
    ],
    github: "https://github.com/haewonwon/brelio",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
