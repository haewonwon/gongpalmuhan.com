## dowhateverican

혼자 이것저것 해보려고 만든 **개인 실험용 Next.js 프로젝트**입니다.  
규칙도, 완성 목표도 딱히 없고 그냥 그때그때 해보고 싶은 걸 올리는 공간입니다.

---

## 스택

- **Next.js(App Router) + TypeScript**
- **FSD(Feature-Sliced Design)** 느낌의 디렉터리 구조 (`src/entities`, `features`, `widgets`, `views`, `shared` 등)
- **Tailwind CSS v4**
- 패키지 매니저는 **pnpm**

---

## 어떻게 돌리는지 (나용 메모)

```bash
pnpm install   # 한 번만
pnpm dev       # 개발 서버
```

브라우저에서 [`http://localhost:3000`](http://localhost:3000) 열기.

가끔 필요하면:

```bash
pnpm build
pnpm start
pnpm lint
```

---

## 대충 구조

```text
app/      # Next.js 엔트리 (layout, page 등)
src/
  app/      # 전역 설정/스타일 넣을 곳
  entities/
  features/
  widgets/
  views/
  shared/
public/
```

지금은 거의 텅 비어 있는 스켈레톤이라, 하고 싶은 대로 만들어 갈 예정.

---

## 이 레포에서 할 것들 (아마도)

- Next.js App Router 가지고 이것저것 실험
- FSD 구조 감 익히기
- Supabase, Tailwind, 기타 라이브러리 테스트

생각나는 대로 막 써보고, 필요하면 README도 그때그때 고칠 예정.
