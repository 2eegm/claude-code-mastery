# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

이 프로젝트는 **한국어 우선** 개발 환경을 사용합니다:

- **기본 응답 언어**: 한국어로 대화하고 설명합니다
- **코드 주석**: 한국어로 작성합니다
- **커밋 메시지**: 한국어로 작성합니다 (예: "로그인 기능 추가", "버그 수정: 사용자 인증 오류")
- **문서화**: README, 가이드, API 문서 등은 한국어로 작성합니다
- **변수명/함수명**: 영어를 사용합니다 (국제 코딩 표준 준수)

## 프로젝트 개요

HTML, CSS, JavaScript, Tailwind CSS를 활용한 반응형 개발자 웹 이력서 프로젝트

### 기술 스택
- **HTML5**: 시맨틱 태그 활용, SEO 친화적 구조
- **CSS**: Tailwind CSS (유틸리티 우선), 커스텀 CSS, 애니메이션
- **JavaScript**: Vanilla JS (ES6+), 프레임워크 없음
- **Tailwind CSS**: 반응형 디자인, 커스텀 테마

## 프로젝트 구조

```
/
├── index.html           # 메인 이력서 페이지
├── css/
│   └── style.css       # 커스텀 CSS 스타일
├── js/
│   └── main.js         # 메인 JavaScript 로직
├── assets/
│   ├── images/         # 이미지 파일
│   └── icons/          # 아이콘 파일
├── ROADMAP.md          # 프로젝트 로드맵
└── CLAUDE.md           # 이 파일
```

## 개발 가이드

### Tailwind CSS 설정

#### CDN 방식 (빠른 시작)
```html
<script src="https://cdn.tailwindcss.com"></script>
```

#### npm 방식 (프로덕션 권장)
```bash
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
```

### 로컬 개발 서버 실행

정적 파일이므로 다음 방법 중 하나를 사용:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 패키지)
npx http-server -p 8000

# VS Code Live Server 확장 사용
```

브라우저에서 `http://localhost:8000` 접속

## 아키텍처 및 구현 원칙

### 페이지 구조
이력서는 단일 페이지 애플리케이션(SPA) 형태로 구성되며, 다음 섹션들이 포함됩니다:

1. **헤더**: 이름, 직무, 연락처 정보
2. **소개**: 자기소개 및 관심 분야
3. **기술 스택**: 프로그래밍 언어, 프레임워크, 도구 (시각적 표현)
4. **경력**: 타임라인 형식의 경력 사항
5. **프로젝트**: 포트폴리오 프로젝트 (필터링 기능)
6. **학력**: 학력 사항
7. **자격증/수상**: 자격증 및 수상 경력
8. **푸터**: SNS 링크, 저작권

### JavaScript 구조

`js/main.js`는 다음 기능을 담당:

- **네비게이션**: 스무스 스크롤, 활성 섹션 표시, 모바일 햄버거 메뉴
- **애니메이션**: 스크롤 기반 페이드인, 프로그레스 바, 타이핑 효과
- **인터랙션**: 다크모드 토글, 프로젝트 필터링
- **기타**: PDF 다운로드 기능

### CSS/디자인 원칙

- **모바일 우선(Mobile-first)**: 작은 화면부터 디자인 후 확장
- **반응형 브레이크포인트**: Tailwind 기본값 사용 (sm, md, lg, xl, 2xl)
- **다크모드**: `dark:` 유틸리티 클래스 활용
- **접근성**: ARIA 레이블, 키보드 네비게이션, 스크린 리더 지원

## 배포

### 권장 호스팅 플랫폼

1. **GitHub Pages**: 무료, 간편한 배포
   ```bash
   # gh-pages 브랜치에 배포
   git subtree push --prefix . origin gh-pages
   ```

2. **Netlify**: 자동 배포, 커스텀 도메인 지원
   - 저장소 연결 후 자동 배포 설정

3. **Vercel**: 빠른 배포, 글로벌 CDN
   - `vercel` CLI 또는 GitHub 연동

## 참고사항

- 프로젝트 진행 상황은 [ROADMAP.md](ROADMAP.md)의 체크리스트를 참조하세요
- 모든 코드는 시맨틱하고 접근 가능하게 작성합니다
- 이미지는 WebP 포맷 사용 및 Lazy loading 적용을 권장합니다
- 크로스 브라우저 호환성을 위해 Chrome, Firefox, Safari, Edge에서 테스트합니다
