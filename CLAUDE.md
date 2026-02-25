# CLAUDE.md - Jiyu Archive

Notion 기반 블로그. Next.js 15 (App Router) + React 19 + TypeScript + Vanilla Extract CSS.

## 프로젝트 구조 (FSD)

```
src/
├── app/          # Next.js 라우팅, 페이지 조합, API 라우트
├── entity/       # 도메인 타입 (PostSummary, PostCategory 등)
├── feature/      # 비즈니스 로직 (NotionAdapter, 날짜 포맷)
├── shared/       # 공용 유틸, UI 컴포넌트, Notion API 클라이언트, SEO 설정
├── views/        # 페이지별 컴포넌트 (postList, posts)
└── widgets/      # 레이아웃 컴포넌트 (Header, Layout)
```

**의존성 방향**: app → views/widgets → feature → entity → shared (상위→하위만 참조)

## 명령어

- `yarn dev` — 개발 서버
- `yarn build` — 프로덕션 빌드
- `yarn lint` — ESLint 실행
- 커밋 시 Husky + lint-staged로 `eslint --fix` 자동 실행 (ts, tsx 대상)

## 코드 컨벤션

### TypeScript

- strict 모드, `any` 사용 금지 (`@typescript-eslint/no-explicit-any: error`)
- 경로 alias: `@/*` → `./src/*`
- Props 타입은 `interface Props`로 정의

### 네이밍

- 변수: camelCase 또는 UPPER_CASE
- 함수/컴포넌트: PascalCase (컴포넌트), camelCase (유틸)
- 인터페이스/타입: PascalCase

### Import 순서 (ESLint `import/order` 적용)

1. react, react/** (external, 최상위)
2. next, next/** (external)
3. 기타 외부 라이브러리
4. `@/*` 내부 모듈
5. 상대 경로 (parent/sibling)

그룹 간 빈 줄 필수, 알파벳 순 정렬.

### 스타일링 (Vanilla Extract)

- 컴포넌트당 `.css.ts` 파일 1개
- `import * as styles from './Component.css'` 패턴 사용
- 반응형: `responsiveStyle({ tablet?, desktop? })` 헬퍼 사용 (481px, 769px 브레이크포인트)
- 모바일 퍼스트

### Prettier

- 싱글 쿼트, 세미콜론, 탭 너비 2, printWidth 100, trailing comma all

## 주요 패턴

- **Notion 데이터 흐름**: `notionAPI.getPageData()` → `NotionAdapter`로 변환 → 도메인 타입으로 사용
- **렌더링**: `react-notion-x`의 `NotionRenderer`로 Notion 콘텐츠 렌더링
- **SSG/ISR**: `generateStaticParams()`로 정적 생성, `/api/revalidate` 엔드포인트로 ISR
- **요청 중복 제거**: React `cache()`로 같은 요청 중복 방지
- **동적 import**: Code 블록은 `dynamic(() => import(...), { ssr: false })`

## 환경 변수

- `NEXT_PUBLIC_NOTION_API_BASE_URL` — Notion API 엔드포인트
- `NEXT_PUBLIC_NOTION_DATABASE_ID` — Notion 데이터베이스 ID
- `NEXT_PUBLIC_REVALIDATE_SECRET_KEY` — ISR 재검증 시크릿
- `NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_KEY` — Google Search Console 인증 키
