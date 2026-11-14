/**
 * 프로젝트 메타데이터의 단일 출처입니다.
 * 카드(ProjectCard)와 상세 상단(ProjectMeta)이 모두 이 값을 사용하고,
 * 상세 본문만 src/content/projects/<locale>/<slug>.mdx 에서 관리합니다.
 *
 * 기간, 팀 구성, 역할, 수상은 이력서(2026)와 같은 표기를 유지합니다.
 */

export type ProjectLinkKind = 'service' | 'repo' | 'docs';

export type ProjectLink = {
  kind: ProjectLinkKind;
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  /** 서비스 목적 한 문장 */
  summary: string;
  period: string;
  /** 소속 프로그램/회사 */
  affiliation?: string;
  /** 팀 규모와 직군 구성 */
  team: string;
  role: string;
  /** 배포/운영 상태 */
  status?: string;
  /** 팀 단위 수상 */
  award?: string;
  /** 카드에 보여줄 본인 기여 1~2문장 */
  contribution: string;
  /** 상세 상단의 핵심 기여 요약 */
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'brifo',
    title: 'BRIFO',
    summary: 'AI 사원의 분석으로 투자 결정을 연습하는 게이미피케이션 웹 서비스',
    period: '2026.06 ~ 2026.08',
    affiliation: 'UMC INHA 10기',
    team: '10명 (FE 3, BE 5, 디자인 1, PM 1)',
    role: 'FE 리드, 프론트엔드 아키텍처 설계',
    status: '웹 배포',
    award: '우수상 (3등)',
    contribution:
      'Orval 생성 범위를 요청 함수, DTO 타입, Zod 스키마로 좁히고, 응답 검증과 화면 모델 변환을 queryFn에 두는 연동 규칙을 만들어 팀원들과 40개 API 경로에 적용했습니다.',
    highlights: [
      'OpenAPI → Orval → Zod 검증 → Mapper → TanStack Query로 이어지는 공통 API 계층 설계와 구현',
      '사원, 결정 일기, 마이페이지 화면 구현과 API 연동',
      '운영 중 발생한 9시간 시간대 오류의 원인 분석과 KST 응답 계약 정리',
      'Husky와 GitHub Actions로 커밋/PR 단계 품질 검사 구성',
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'Orval', 'Zod'],
    links: [
      { kind: 'service', label: '서비스', href: 'https://brifo.ai.kr' },
      { kind: 'repo', label: 'GitHub', href: 'https://github.com/Team-BRIFO/BRIFO-front' },
    ],
    featured: true,
  },
  {
    slug: 'unplan-app',
    title: 'Unplan',
    summary: '컨디션과 생활 패턴에 맞춰 하루를 조정하는 스케줄러 앱',
    period: '2026.05 ~ 2026.07',
    affiliation: 'TAVE 17기',
    team: '6명 (FE 1, BE 3, 디자인 2)',
    role: '프론트엔드 단독 담당',
    status: 'TestFlight 배포 (현재 내려감)',
    award: '우수상 (2등)',
    contribution:
      'React Native 앱의 화면, 소셜 로그인, API 연동, 배포를 혼자 맡았고, 변경 경로에 따라 Preview Build와 EAS Update를 나눠 실행하는 미리보기 배포를 구성했습니다.',
    highlights: [
      '디자인 토큰, 공통 UI, 로그인/온보딩 화면 구현',
      '카카오/구글 로그인과 OpenAPI(Orval) 기반 API 클라이언트 연결',
      'GitHub Actions에서 변경 경로를 검사해 Preview Build와 EAS Update를 분기',
      '앱 복귀나 화면 재진입 시 서버 상태가 갱신되지 않던 문제 수정',
    ],
    stack: ['React Native', 'TypeScript', 'Expo / EAS', 'TanStack Query', 'GitHub Actions'],
    links: [{ kind: 'repo', label: 'GitHub', href: 'https://github.com/unplan-tave/unplan-app' }],
    featured: true,
  },
  {
    slug: 'dreampath-innoworks',
    title: 'DreamPath / InnoWorks',
    summary: '같은 구조로 만든 AI 기반 대화형 시각화 웹 서비스 2종',
    period: '2025.12',
    affiliation: '주식회사 프랜더 (프론트엔드 인턴)',
    team: '개발팀 3명 (FE 1)',
    role: '프론트엔드 단독 담당',
    status: '서비스 운영 중',
    contribution:
      'Django 풀스택 구조를 Django 백엔드와 React 프론트엔드로 분리하고 영어, 일본어, 중국어, 스페인어 UI를 적용했습니다.',
    highlights: [
      'Django 풀스택 구조에서 React 프론트엔드 분리',
      '영어, 일본어, 중국어, 스페인어 다국어 UI 적용',
      'AI 응답을 서비스 화면에 HTML로 렌더링',
      'GitHub Actions 기반 배포 자동화',
    ],
    stack: ['React', 'TypeScript', 'Django', 'GitHub Actions'],
    links: [
      { kind: 'service', label: 'DreamPath', href: 'https://multi.dreampathai.kr/en' },
      { kind: 'service', label: 'InnoWorks', href: 'https://multi.innoworks.kr/en' },
    ],
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
