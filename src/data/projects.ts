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
    role: 'Web Frontend',
    stack: ['React', 'TypeScript', 'Django', 'GitHub Actions'],
    links: [
      { label: 'DreamPath', href: 'https://multi.dreampathai.kr/en' },
      { label: 'InnoWorks', href: 'https://multi.innoworks.kr/en' },
    ],
    featured: true,
  },
  {
    slug: 'unplan-app',
    title: 'Unplan',
    description: '컨디션과 생활 패턴에 맞춰 하루를 조정하는 스마트 스케줄러 모바일 앱',
    period: '2026.05 - 2026.07',
    team: '팀 프로젝트',
    role: 'Mobile Frontend',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Axios',
      'Orval',
    ],
    github: 'https://github.com/unplan-tave/unplan-app',
    featured: true,
  },
  {
    slug: 'brifo',
    title: 'BRIFO',
    description: 'AI 사원의 분석을 바탕으로 투자 결정을 학습하는 게이미피케이션 플랫폼',
    period: '2026.06 - 2026.08',
    team: '팀 프로젝트',
    role: 'Web Frontend',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'Axios',
      'Orval',
      'Zod',
    ],
    github: 'https://github.com/Team-BRIFO',
    demo: 'https://brifo.ai.kr',
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
