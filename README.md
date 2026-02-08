# 개발자 웹 이력서 프로젝트

HTML, CSS, JavaScript, Tailwind CSS를 활용한 반응형 개발자 웹 이력서입니다.

## 🎯 프로젝트 소개

이 프로젝트는 개발자를 위한 현대적이고 반응형인 웹 이력서 템플릿입니다. 다크모드, 애니메이션 효과, 프로젝트 필터링 등 다양한 인터랙티브 기능을 포함하고 있습니다.

## ✨ 주요 기능

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 모든 화면 크기에 최적화
- 모바일 햄버거 메뉴
- 유동적인 그리드 레이아웃

### 🌓 다크모드
- 라이트/다크 모드 전환
- 로컬 스토리지에 테마 저장
- 시스템 테마 자동 감지

### ✨ 애니메이션 효과
- 스크롤 기반 페이드인 애니메이션
- 프로그레스 바 애니메이션
- 타이핑 효과
- 부드러운 스무스 스크롤

### 🔍 프로젝트 필터링
- 전체/프론트엔드/백엔드 카테고리별 필터링
- 실시간 프로젝트 카드 업데이트

### 🔗 SNS 통합
- GitHub, LinkedIn, YouTube, Instagram, Twitter 등
- 다양한 연락 채널 제공
- 아이콘 호버 효과

### 📊 섹션 구성
- **히어로**: 프로필 이미지, 타이핑 효과, CTA 버튼
- **소개**: 자기소개
- **기술 스택**: 탭 네비게이션, 프로그레스 바
- **경력**: 타임라인 레이아웃
- **프로젝트**: 필터링 가능한 프로젝트 그리드
- **학력**: 학력 및 주요 활동
- **자격증**: 자격증 및 수상 경력
- **연락**: SNS 링크

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 태그 활용
- **CSS**: Tailwind CSS (유틸리티 우선 접근)
- **JavaScript**: Vanilla JS (ES6+ 모듈)
- **빌드 도구**: Tailwind CSS CLI

## 📁 프로젝트 구조

```
d:\workspace\claude-code-mastery\
├── index.html                 # 메인 HTML 파일
├── package.json               # npm 설정 파일
├── tailwind.config.js         # Tailwind CSS 설정
├── ROADMAP.md                 # 프로젝트 로드맵
├── CLAUDE.md                  # 개발 가이드
├── README.md                  # 이 파일
├── src/
│   └── input.css             # Tailwind CSS 입력 파일
├── css/
│   └── style.css             # 빌드된 CSS 파일
├── js/
│   ├── main.js               # 메인 진입점
│   ├── data.js               # 샘플 데이터
│   ├── render.js             # 렌더링 로직
│   ├── navigation.js         # 네비게이션 기능
│   ├── animations.js         # 애니메이션 효과
│   ├── darkmode.js           # 다크모드 토글
│   └── filter.js             # 프로젝트 필터링
└── assets/
    ├── images/               # 이미지 파일
    │   └── projects/         # 프로젝트 썸네일
    └── icons/                # 아이콘 파일
```

## 🚀 시작하기

### 1. 저장소 클론

```bash
git clone <repository-url>
cd claude-code-mastery
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
# Tailwind CSS watch 모드 (터미널 1)
npm run dev

# 로컬 서버 실행 (터미널 2)
# Python 사용
python -m http.server 8000

# 또는 Node.js http-server 사용
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

### 4. 프로덕션 빌드

```bash
npm run build
```

## 📝 커스터마이징

### 1. 개인 정보 수정

`js/data.js` 파일에서 다음 데이터를 수정하세요:

- `profileData`: 이름, 직무, 연락처, SNS 링크 등
- `skills`: 기술 스택 및 레벨
- `experiences`: 경력 사항
- `projects`: 프로젝트 목록
- `education`: 학력
- `certifications`: 자격증 및 수상

### 2. 컬러 팔레트 변경

`tailwind.config.js` 파일에서 `primary`, `secondary` 컬러를 변경하세요:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // 메인 컬러
    // ...
  },
  secondary: {
    500: '#d946ef',  // 보조 컬러
    // ...
  }
}
```

### 3. 이미지 추가

- 프로필 이미지: `index.html`의 히어로 섹션에서 SVG를 이미지 태그로 교체
- 프로젝트 썸네일: `assets/images/projects/` 폴더에 이미지 추가 후 `data.js`에서 경로 업데이트

## 🌐 배포

### GitHub Pages

1. GitHub 저장소 생성 및 푸시
2. Settings > Pages > Source에서 main 브랜치 선택
3. 배포된 URL 확인

### Netlify

1. Netlify에 GitHub 저장소 연결
2. Build command: `npm run build`
3. Publish directory: `.` (루트)
4. Deploy 버튼 클릭

### Vercel

1. Vercel에 프로젝트 import
2. Framework Preset: Other
3. Build Command: `npm run build`
4. Deploy

## 📊 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 🎨 디자인 특징

- **모던한 그라데이션**: Primary와 Secondary 컬러의 부드러운 그라데이션
- **카드 디자인**: 그림자와 호버 효과가 있는 현대적인 카드 레이아웃
- **마이크로 인터랙션**: 버튼 호버, 아이콘 회전 등의 섬세한 애니메이션
- **타이포그래피**: Noto Sans KR 폰트 사용으로 한글 가독성 최적화

## 🔧 개발 명령어

```bash
# 개발 모드 (CSS watch)
npm run dev

# 프로덕션 빌드
npm run build

# Browserslist 업데이트
npx update-browserslist-db@latest
```

## 📄 라이센스

MIT License

## 👤 제작자

**김개발**
- GitHub: [@developer](https://github.com/developer)
- Email: developer@example.com

## 🙏 감사의 말

- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크
- [Google Fonts](https://fonts.google.com/) - Noto Sans KR 폰트 제공
- [Heroicons](https://heroicons.com/) - 아이콘 디자인 영감

---

Made with ❤️ using Tailwind CSS & Vanilla JavaScript
