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

---

## 코드 품질 원칙

### 불변성 (Immutability)

- **ALWAYS** 새 객체를 생성할 것, **NEVER** 기존 객체를 직접 수정하지 말 것
- 스프레드 연산자로 업데이트: `return { ...obj, field: newValue }`

### 파일/함수 크기

- 함수는 **50줄 이하** 유지
- 파일은 **800줄 이하** 유지 (200~400줄 권장)
- 중첩(nesting) 깊이는 **4단계 이하**

### 에러 처리

- 모든 레벨에서 에러를 명시적으로 처리할 것
- async/await + try-catch 패턴 사용
- 사용자 노출 메시지는 친화적으로, 서버 사이드는 상세 로깅

### 입력 검증

- 시스템 경계(user input, API 응답, 외부 데이터)에서 반드시 검증
- Zod로 스키마 기반 검증 적용

### Console.log

- 프로덕션 코드에 `console.log` 금지
- 필요시 적절한 로깅 라이브러리 사용

---

## Git 워크플로우

### 커밋 메시지 형식

```
<type>: <description>

<optional body>
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`

### PR 워크플로우

1. 전체 커밋 히스토리 검토 (마지막 커밋만 보지 말 것)
2. `git diff [base-branch]...HEAD`로 전체 변경사항 확인
3. 상세한 PR 설명 작성
4. 테스트 플랜 포함

---

## 보안 가이드라인

### 커밋 전 필수 체크리스트

- [ ] 하드코딩된 시크릿 없음 (API 키, 비밀번호, 토큰)
- [ ] 모든 사용자 입력 검증됨
- [ ] XSS 방지 (HTML 출력 시 sanitize)
- [ ] 인증/인가 확인됨
- [ ] 에러 메시지에 민감 정보 노출 없음

### 시크릿 관리

```typescript
// NEVER: 하드코딩
const apiKey = "sk-proj-xxxxx"

// ALWAYS: 환경변수 사용
const apiKey = process.env.NEXT_PUBLIC_API_KEY
if (!apiKey) throw new Error('API key not configured')
```

### 보안 이슈 발견 시

1. 즉시 중단
2. `security-reviewer` 에이전트 사용
3. CRITICAL 이슈 수정 후 작업 재개
4. 노출된 시크릿 즉시 교체

---

## 개발 워크플로우

복잡한 기능 구현 순서:

1. **계획** — `planner` 에이전트로 구현 계획 수립, 코드 작성 전 확인
2. **구현** — 계획에 따라 단계적으로 구현
3. **리뷰** — `code-reviewer` 에이전트로 즉시 리뷰
4. **커밋** — 위 Git 워크플로우 따라 커밋

---

## 에이전트 활용

다음 상황에서 즉시 에이전트를 사용할 것:

| 상황 | 에이전트 |
|------|---------|
| 복잡한 기능 구현 시작 | `planner` |
| 코드 작성 직후 | `code-reviewer` |
| 빌드/타입 에러 발생 | `build-error-resolver` |
| 보안 관련 코드 변경 | `security-reviewer` |
| Dead code 제거 필요 | `refactor-cleaner` |

**병렬 실행 원칙**: 독립적인 작업은 순차 실행이 아닌 병렬 실행을 우선할 것.
예) 보안 분석 + 타입 체크 + 린트는 동시에 실행 가능.

---

## 토큰 최적화

### 모델 선택 전략

| 작업 유형 | 모델 | 이유 |
|---------|------|------|
| 복잡한 계획 수립, 아키텍처 설계 | Opus | 높은 추론 능력 필요 |
| 일반 개발, 코드 리뷰, 디버깅 | Sonnet (기본) | 품질과 비용 균형 |
| 빌드 에러 수정, 기계적 반복 작업 | Haiku | 빠르고 저렴함 |

`CLAUDE_CODE_SUBAGENT_MODEL=haiku` — 서브에이전트는 Haiku로 실행 (비용 절감)

### 컨텍스트 윈도우 관리

- `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=50` — 컨텍스트 50% 도달 시 자동 압축
- `MAX_THINKING_TOKENS=10000` — 확장 사고 토큰 상한 제한
- 긴 작업은 세션을 분리하거나 중간 요약을 남길 것
- `includeCoAuthoredBy: false` — 커밋 메시지에 Claude 공동 저자 표시 생략
