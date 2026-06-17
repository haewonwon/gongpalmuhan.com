export type Project = {
  slug: string;
  title: string;
  description: string;
  period: string;
  team: string;
  role: string;
  stack: string[];
  github?: string;
  demo?: string;
  links?: {
    label: string;
    href: string;
  }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'dreampath-innoworks',
    title: 'DreamPath / InnoWorks',
    description: 'AI 기반 대화형 시각화 프로그램',
    period: '2025.12',
    team: '인턴십 프로젝트',
    role: 'Frontend',
    stack: ['React', 'TypeScript', 'Django', 'GitHub Actions'],
    links: [
      { label: 'DreamPath', href: 'https://multi.dreampathai.kr/en' },
      { label: 'InnoWorks', href: 'https://multi.innoworks.kr/en' },
    ],
    featured: true,
  },
  {
    slug: 'clubfair-2026',
    title: '응답하라1995',
    description: '동아리 박람회 실시간 성향 매칭 및 이벤트 관리 플랫폼',
    period: '2026.01 - 2026.03',
    team: '팀 프로젝트',
    role: 'Frontend',
    stack: [
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'TanStack Query',
      'Zustand',
      'Styled-components',
    ],
    github: 'https://github.com/IBAS-DEV-PROJECT/clubfair-2026',
    featured: true,
  },
  {
    slug: 'unplan-app',
    title: 'Unplan',
    description: '스마트 스케줄러 모바일 앱',
    period: '2026.05 - 진행 중',
    team: '팀 프로젝트',
    role: 'Mobile Frontend',
    stack: ['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'Zustand'],
    github: 'https://github.com/unplan-tave/unplan-app',
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
