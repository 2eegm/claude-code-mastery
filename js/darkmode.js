// 다크모드 기능 초기화
export function initDarkMode() {
  loadSavedTheme();
  setupToggleButton();
  setupMobileToggleButton();
}

// 저장된 테마 불러오기
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const html = document.documentElement;

  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else if (savedTheme === 'light') {
    html.classList.remove('dark');
  } else {
    // 저장된 테마가 없으면 시스템 설정 따르기
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}

// 데스크톱 토글 버튼 설정
function setupToggleButton() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  if (!darkModeToggle) return;

  darkModeToggle.addEventListener('click', () => {
    toggleDarkMode();
  });
}

// 모바일 토글 버튼 설정
function setupMobileToggleButton() {
  const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');

  if (!mobileDarkModeToggle) return;

  mobileDarkModeToggle.addEventListener('click', () => {
    toggleDarkMode();
  });
}

// 다크모드 토글 함수
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');

  if (isDark) {
    // 라이트 모드로 전환
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    // 다크 모드로 전환
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

// 시스템 테마 변경 감지
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // 사용자가 수동으로 설정하지 않았다면 시스템 설정 따르기
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      const html = document.documentElement;
      if (e.matches) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  });
}
