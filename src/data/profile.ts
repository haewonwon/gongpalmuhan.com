/**
 * 프로필·경력 정보의 단일 출처입니다.
 * 기간·소속·역할은 이력서(public/kim-haewon-resume.pdf)와 같은 표기를 유지합니다.
 */

export type ProfileLinkIcon = 'github' | 'mail' | 'resume';

export type ProfileLink = {
  label: string;
  href: string;
  icon: ProfileLinkIcon;
  external: boolean;
};

export type TimelineItem = {
  title: string;
  detail?: string;
  period: string;
  bullets?: string[];
  /** 관련 프로젝트 상세 slug */
  projectSlugs?: string[];
};

const resume = '/kim-haewon-resume.pdf';
const github = 'https://github.com/haewonwon';
const email = 'khcw1029@daum.net';

export const profile = {
  name: '김해원',
  title: '웹 프론트엔드 개발자',
  /** 이력서 상단 소개와 같은 문장입니다. */
  summary:
    'React와 TypeScript로 웹 서비스를 개발합니다.\nAPI 명세가 바뀌어도 화면을 덜 고치도록 연동 규칙을 정해 팀원들과 40개 API 경로에 적용했습니다.',
  location: 'Incheon, Korea',
  email,
  github,
  resume,
  links: [
    { label: '이력서', href: resume, icon: 'resume', external: true },
    { label: 'GitHub', href: github, icon: 'github', external: true },
    { label: 'Email', href: `mailto:${email}`, icon: 'mail', external: false },
  ] satisfies ProfileLink[],
  experience: [
    {
      title: '주식회사 프랜더',
      detail: '프론트엔드 인턴 · 개발팀 3명 (FE 1명)',
      period: '2025.09 - 2025.12',
      bullets: [
        'DreamPath와 InnoWorks의 Django 풀스택 구조를 Django 백엔드와 React 프론트엔드로 분리하고 영어, 일본어, 중국어, 스페인어 UI를 적용했습니다.',
        '고객사 웹 서비스는 동영상과 이미지가 빌드에 포함돼 결과물이 447MB였고 배포에 약 15분이 걸렸습니다. 미디어를 서버 디렉터리로 옮겨 Nginx alias로 제공하고, 빌드 결과물을 약 5MB로 줄였습니다. 폴더 교체 방식으로 무중단 배포를 구현했습니다.',
      ],
      projectSlugs: ['dreampath-innoworks'],
    },
    {
      title: 'CU 군포장미점',
      detail: '매장 근무 (아르바이트)',
      period: '2024.03 - 2025.06',
      bullets: [
        '교대 때 말로 전하던 내용이 빠지는 일이 있어 메모를 남기기 시작했고, 이후 앞뒤 근무자도 메모로 인수인계했습니다.',
      ],
    },
  ] satisfies TimelineItem[],
  activities: [
    {
      title: 'UMC INHA 10기',
      detail: '프론트엔드',
      period: '2026.03 - 2026.08',
      projectSlugs: ['brifo'],
    },
    {
      title: 'TAVE 17기',
      detail: '프론트엔드',
      period: '2026.03 - 2026.07',
      projectSlugs: ['unplan-app'],
    },
    {
      title: '스테이지어스 프론트엔드 부트캠프 15기',
      detail: '수료',
      period: '2023.05 - 2024.02',
    },
  ] satisfies TimelineItem[],
  education: [
    {
      title: '인하대학교',
      detail: '경영학(주전공) / 소프트웨어융합공학(연계전공)',
      period: '2021.03 - 2027.02 (졸업 예정)',
    },
  ] satisfies TimelineItem[],
  certificates: [
    { title: 'SQL 개발자(SQLD)', period: '2026.03' },
    { title: '데이터분석준전문가(ADsP)', period: '2025.02' },
  ] satisfies TimelineItem[],
  archiving: [
    {
      label: 'Velog',
      description: '공부 기록 및 회고',
      href: 'https://velog.io/@haewonwon/posts',
    },
  ],
};
