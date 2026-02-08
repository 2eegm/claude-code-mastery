// 개발자 기본 정보
export const profileData = {
  name: "이규민",
  title: "웹 풀스택 개발자",
  email: "pelix210@gmail.com",
  phone: "010-4154-6758",
  github: "",
  linkedin: "",
  youtube: "",
  instagram: "",
  twitter: "",
  location: "대한민국",
  bio: "5년 6개월 경력의 SI 프로젝트 전문 웹 풀스택 개발자입니다. Spring 프레임워크와 React 기반의 기업 맞춤형 IT 시스템 개발을 주도하고 있습니다. 레거시 시스템 현대화와 성능 최적화에 강점을 가지고 있으며, 효율적인 아키텍처 설계를 통해 개발 생산성을 향상시키는 것을 추구합니다."
};

// 기술 스택
export const skills = {
  languages: [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "ES6", level: 80 },
    { name: "SQL", level: 85 }
  ],
  frontend: [
    { name: "React", level: 85 },
    { name: "JSP", level: 90 },
    { name: "jQuery", level: 75 },
    { name: "HTML/CSS", level: 85 }
  ],
  backend: [
    { name: "Spring Boot", level: 95 },
    { name: "Spring Framework", level: 95 },
    { name: "MyBatis", level: 90 },
    { name: "Spring Security", level: 85 },
    { name: "OAuth2", level: 80 }
  ],
  tools: [
    "Git", "Redmine", "Jenkins", "Visual Studio Code", "Eclipse",
    "DBeaver", "PostgreSQL", "MySQL", "MariaDB", "Tibero", "MSSQL"
  ]
};

// 경력 사항
export const experiences = [
  {
    company: "엠에스링크앤솔루션",
    position: "프로젝트사업부 주임",
    period: "2020.08 - 재직중",
    description: "기업 맞춤형 IT 시스템 개발 및 SI 프로젝트 수행",
    achievements: [
      "레거시 시스템(Spring/JSP) → React 전환으로 신규 사업 추가 시간 80% 단축",
      "300개 서비스 클래스를 3개로 통합하여 유지보수성 대폭 향상",
      "생성형 AI 기반 콘텐츠 플랫폼 구축 (OAuth2 인증, 자동 결제 API)",
      "10개 이상의 대규모 SI 프로젝트 성공적 완료 (공공/민간 분야)"
    ],
    tags: ["Spring Boot", "React", "JSP", "PostgreSQL", "MySQL", "OAuth2"]
  }
];

// 프로젝트
export const projects = [
  {
    id: 1,
    title: "경기도 시장 상권 진흥원",
    description: "레거시 시스템(Spring/JSP)을 React 기반으로 전환하여 신규 사업 추가 시간을 80% 단축한 프로젝트입니다. 300개의 서비스 클래스를 3개로 통합하여 유지보수성을 대폭 향상시켰습니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f97316;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23ea580c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g1)'/%3E%3C/svg%3E",
    tags: ["React", "JSP", "Spring", "MySQL"],
    category: ["frontend", "backend"],
    github: "",
    demo: null,
    features: [
      "레거시 시스템 React 전환",
      "300개 → 3개 서비스 클래스 통합",
      "신규 사업 추가 시간 80% 단축",
      "유지보수성 대폭 향상"
    ]
  },
  {
    id: 2,
    title: "프롬프트뱅크",
    description: "생성형 AI 기반 콘텐츠 플랫폼으로, OAuth2 인증 시스템과 자동 결제 API를 구축한 프로젝트입니다. 안전하고 편리한 사용자 경험을 제공합니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fb923c;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23f97316;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g2)'/%3E%3C/svg%3E",
    tags: ["Spring", "React", "PostgreSQL", "OAuth2"],
    category: ["frontend", "backend"],
    github: "",
    demo: null,
    features: [
      "생성형 AI 콘텐츠 플랫폼",
      "OAuth2 인증 시스템",
      "자동 결제 API 구축",
      "사용자 관리 시스템"
    ]
  },
  {
    id: 3,
    title: "PMS (프로젝트 관리 시스템)",
    description: "React와 Spring Boot 기반의 프로젝트 관리 시스템입니다. 효율적인 프로젝트 추적 및 관리 기능을 제공합니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fdba74;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23fb923c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g3)'/%3E%3C/svg%3E",
    tags: ["React", "Spring Boot", "MariaDB"],
    category: ["frontend", "backend"],
    github: "",
    demo: null,
    features: [
      "프로젝트 진행 상황 추적",
      "일정 및 작업 관리",
      "팀원 협업 기능",
      "실시간 대시보드"
    ]
  },
  {
    id: 4,
    title: "한국야금 견적관리시스템",
    description: "기업 맞춤형 견적 관리 시스템 구축 프로젝트입니다. 효율적인 견적 작성 및 관리 프로세스를 제공합니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fed7aa;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23fdba74;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g4)'/%3E%3C/svg%3E",
    tags: ["Spring", "JSP", "MySQL"],
    category: ["frontend", "backend"],
    github: "",
    demo: null,
    features: [
      "견적 자동 작성 기능",
      "고객 관리 시스템",
      "견적 이력 추적",
      "보고서 생성"
    ]
  },
  {
    id: 5,
    title: "HTS 고도화",
    description: "기존 HTS(Home Trading System) 시스템의 성능 개선 및 기능 고도화 프로젝트입니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23c2410c;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23ea580c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g5)'/%3E%3C/svg%3E",
    tags: ["Spring Boot", "React", "PostgreSQL"],
    category: ["frontend", "backend"],
    github: "",
    demo: null,
    features: [
      "시스템 성능 최적화",
      "사용자 인터페이스 개선",
      "실시간 데이터 처리",
      "보안 강화"
    ]
  },
  {
    id: 6,
    title: "LG에너지솔루션 사내망 게시판",
    description: "LG에너지솔루션 사내 커뮤니케이션을 위한 게시판 시스템 구축 프로젝트입니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239a3412;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23c2410c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g6)'/%3E%3C/svg%3E",
    tags: ["Spring", "JSP", "Oracle"],
    category: ["frontend", "backend"],
    github: "",
    demo: null,
    features: [
      "사내 공지사항 관리",
      "부서별 게시판",
      "파일 첨부 기능",
      "권한별 접근 제어"
    ]
  },
  {
    id: 7,
    title: "LG화학 환경안전 시스템",
    description: "LG화학의 환경안전 관리를 위한 통합 시스템 구축 프로젝트입니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f97316;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23fb923c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g7)'/%3E%3C/svg%3E",
    tags: ["Spring Boot", "React", "MySQL"],
    category: ["frontend", "backend"],
    github: "",
    demo: null,
    features: [
      "환경 데이터 모니터링",
      "안전 점검 관리",
      "사고 이력 추적",
      "보고서 자동 생성"
    ]
  },
  {
    id: 8,
    title: "LG화학 배치관리 시스템",
    description: "생산 배치 관리를 위한 시스템으로, 효율적인 생산 계획 및 추적 기능을 제공합니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ea580c;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23c2410c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g8)'/%3E%3C/svg%3E",
    tags: ["Spring", "JSP", "MSSQL"],
    category: ["backend"],
    github: "",
    demo: null,
    features: [
      "배치 스케줄링",
      "생산 이력 관리",
      "품질 관리 통합",
      "실시간 모니터링"
    ]
  },
  {
    id: 9,
    title: "SPOC 시스템",
    description: "통합 업무 관리 시스템으로, 다양한 업무 프로세스를 효율적으로 관리합니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g9' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fdba74;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23f97316;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g9)'/%3E%3C/svg%3E",
    tags: ["Spring", "JSP", "Tibero"],
    category: ["frontend", "backend"],
    github: "",
    demo: null,
    features: [
      "업무 프로세스 자동화",
      "문서 관리 시스템",
      "결재 시스템",
      "통계 및 분석"
    ]
  },
  {
    id: 10,
    title: "화성시청 스마트시티",
    description: "화성시의 스마트시티 구축을 위한 통합 플랫폼 개발 프로젝트입니다. 도시 인프라 관리 및 시민 서비스를 제공합니다.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Cdefs%3E%3ClinearGradient id='g10' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fed7aa;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23ea580c;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23g10)'/%3E%3C/svg%3E",
    tags: ["Spring Boot", "React", "PostgreSQL"],
    category: ["frontend", "backend"],
    github: "",
    demo: null,
    features: [
      "스마트 인프라 관리",
      "시민 서비스 포털",
      "데이터 분석 대시보드",
      "IoT 센서 통합"
    ]
  }
];

// 학력
export const education = [
  {
    school: "학점은행제",
    degree: "정보보호학",
    period: "졸업: 2024.08",
    description: "학점: 2.5/4.5",
    achievements: []
  }
];

// 자격증 및 수상
export const certifications = [
  {
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2024.06",
    credentialId: ""
  }
];
