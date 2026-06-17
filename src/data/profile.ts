import { Github, Mail } from "lucide-react";

export const profile = {
  name: "김해원",
  title: "Frontend Developer",
  summary:
    "제품의 흐름을 이해하고, 사용자에게 필요한 화면과 상태 관리를 차분하게 구현하는 신입 프론트엔드 개발자입니다.",
  location: "Seoul, Korea",
  email: "haewonwon@example.com",
  github: "https://github.com/haewonwon",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/haewonwon",
      icon: Github,
    },
    {
      label: "Email",
      href: "mailto:haewonwon@example.com",
      icon: Mail,
    },
  ],
  strengths: [
    "React와 TypeScript 기반의 화면 구조 설계",
    "TanStack Query, Zustand 등을 활용한 클라이언트 상태 관리",
    "API 스펙과 실제 UI 흐름을 연결하는 개발 문서화",
    "팀 프로젝트에서 역할과 범위를 명확히 나누는 협업",
  ],
};
