export type ProfileLinkIcon = 'github' | 'mail';

export type ProfileLink = {
  label: string;
  href: string;
  icon: ProfileLinkIcon;
};

export const profile = {
  name: '김해원',
  title: 'Frontend Developer',
  summary:
    '설계와 문서화를 바탕으로 개발 흐름을 정리하고, \n사용자의 경험이 조금 더 나아지는 방향을 고민하는 프론트엔드 개발자, 김해원입니다.',
  location: 'Incheon, Korea',
  email: 'haewonwon@example.com',
  github: 'https://github.com/haewonwon',
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/haewonwon',
      icon: 'github',
    },
    {
      label: 'Email',
      href: 'mailto:khcw1029@daum.net',
      icon: 'mail',
    },
  ] satisfies ProfileLink[],
  strengths: [
    'React와 TypeScript 기반의 읽고 확장하기 쉬운 UI 구조를 설계합니다.',
    'TanStack Query와 Zustand로 서버 상태와 클라이언트 상태의 책임을 나눕니다.',
    'API 스펙, 화면 흐름, 구현 기준을 문서화해 개발 방향을 정리합니다.',
    '결정 사항과 컨벤션을 공유하며 팀이 같은 방향으로 협업하도록 돕습니다.',
  ],
};
