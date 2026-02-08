// 네비게이션 기능 초기화
export function initNavigation() {
  setupScrollListener();
  setupSmoothScroll();
  setupMobileMenu();
  updateActiveSection();
}

// 스크롤 리스너 설정
function setupScrollListener() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    // 스크롤 100px 이상 시 네비게이션 배경 추가
    if (window.scrollY > 100) {
      navbar.classList.add('bg-white', 'dark:bg-gray-800', 'shadow-lg');
    } else {
      navbar.classList.remove('bg-white', 'dark:bg-gray-800', 'shadow-lg');
    }

    // 활성 섹션 업데이트
    updateActiveSection();
  });
}

// 스무스 스크롤 설정
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');

      // # 만 있는 경우 (홈으로)
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        // 네비게이션 높이 고려하여 스크롤
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // 모바일 메뉴 닫기
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          document.getElementById('menu-icon').classList.remove('hidden');
          document.getElementById('close-icon').classList.add('hidden');
        }
      }
    });
  });
}

// 활성 섹션 하이라이트 업데이트
function updateActiveSection() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const scrollY = window.pageYOffset;
  const navbarHeight = document.getElementById('navbar').offsetHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbarHeight - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      // 모든 네비게이션 링크에서 active 클래스 제거
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });

      // 현재 섹션 링크에 active 클래스 추가
      const activeLinks = document.querySelectorAll(`a[href="#${sectionId}"]`);
      activeLinks.forEach(link => {
        if (link.classList.contains('nav-link')) {
          link.classList.add('active');
        }
      });
    }
  });
}

// 모바일 메뉴 설정
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
      // 메뉴 닫기
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    } else {
      // 메뉴 열기
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // 메뉴 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });
}
