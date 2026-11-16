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
  /** 상세 상단에 보여줄 주요 작업 */
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'brifo',
    title: 'BRIFO',
    summary: 'AI 사원의 보고서를 읽고 게임처럼 투자 판단을 연습하는 웹 서비스',
    period: '2026.06 ~ 2026.08',
    affiliation: 'UMC INHA 10기',
    team: '10명 (FE 3, BE 5, PM 1, 디자인 1)',
    role: '프론트엔드 리드, 아키텍처 설계',
    status: '웹 배포',
    award: '우수상 (3등)',
    contribution:
      'API 응답을 검증하고 화면에서 쓸 모델로 바꾸는 공통 코드를 만들었습니다. 팀원들과 같은 규칙으로 40개 API 경로를 연결했습니다.',
    highlights: [
      'Orval로 OpenAPI 명세에 맞는 요청 함수와 타입, Zod 스키마를 생성했습니다. 응답은 공통 코드에서 검증하고 화면 모델로 바꿔 TanStack Query 캐시에 저장했습니다.',
      '사원 목록과 상세 화면, 결정 일기, 마이페이지를 구현하고 API를 연결했습니다.',
      '운영 중 날짜가 9시간 어긋나는 원인을 찾아 KST 기준 응답 규칙을 정리했습니다.',
      'Husky와 GitHub Actions로 커밋과 PR 단계에서 코드를 검사하도록 구성했습니다.',
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
    role: '프론트엔드 단독 구현',
    status: 'TestFlight 배포',
    award: '우수상 (2등)',
    contribution:
      'React Native 앱의 화면 구현부터 소셜 로그인, API 연동, 배포까지 혼자 맡았습니다. 변경한 파일에 따라 Preview Build와 EAS Update를 나눠 실행하도록 구성했습니다.',
    highlights: [
      '디자인 토큰과 공통 UI를 만들고 로그인과 온보딩 화면을 구현했습니다.',
      '카카오 로그인과 Google Sign-In을 연동하고 Orval로 OpenAPI 명세에 맞는 API 요청 코드를 생성했습니다.',
      'GitHub Actions에서 변경한 파일을 확인해 Preview Build나 EAS Update를 실행하도록 했습니다.',
      '앱에 돌아오거나 화면을 다시 열 때 서버 데이터가 갱신되지 않던 문제를 수정했습니다.',
    ],
    stack: ['React Native', 'TypeScript', 'Expo / EAS', 'TanStack Query', 'GitHub Actions'],
    links: [{ kind: 'repo', label: 'GitHub', href: 'https://github.com/unplan-tave/unplan-app' }],
    featured: true,
  },
  {
    slug: 'dreampath-innoworks',
    title: 'DreamPath / InnoLAB',
    summary: 'AI와 대화하며 결과를 시각화하는 웹 서비스 2종',
    period: '2025.12',
    affiliation: '주식회사 프랜더 (프론트엔드 인턴)',
    team: '개발팀',
    role: '프론트엔드 구현',
    status: '서비스 운영 중',
    contribution:
      'Django 화면을 React로 분리하고 다국어 UI를 적용했습니다. 차시별 채팅 구현을 통합하고 데이터 조회, AI 요청 구성, 트랜잭션 경계를 개선했습니다.',
    highlights: [
      'Django 화면을 React로 분리하고 로그인 상태와 진행도를 연결했습니다. 영어, 일본어, 중국어, 스페인어 UI를 적용했습니다.',
      '두 서비스의 차시별 채팅 클래스와 스트리밍 함수를 각각 9개에서 1개로 통합했습니다.',
      'DreamPath의 학생 조회 범위를 학급 단위로 좁히고 프롬프트의 현재 답변 중복을 제거했습니다.',
      'InnoLAB의 외부 이미지 생성을 대화 저장 트랜잭션에서 분리했습니다.',
    ],
    stack: ['React', 'TypeScript', 'Django', 'GitHub Actions'],
    links: [
      { kind: 'service', label: 'DreamPath', href: 'https://multi.dreampathai.kr/en' },
      { kind: 'service', label: 'InnoLAB', href: 'https://multi.innoworks.kr/en' },
    ],
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
