// 애니메이션 효과 초기화
export function initAnimations() {
  setupIntersectionObserver();
  initTypingEffect();
}

// Intersection Observer 설정 (스크롤 기반 페이드인)
function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // 프로그레스 바 애니메이션
        if (entry.target.querySelector('.skill-bar')) {
          animateSkillBars(entry.target);
        }

        // 한 번만 애니메이션 실행하도록 관찰 중지
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 관찰할 요소 등록
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // 동적으로 추가되는 요소를 위한 MutationObserver
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.classList.contains('animate-on-scroll')) {
          observer.observe(node);
        }
        if (node.nodeType === 1) {
          node.querySelectorAll?.('.animate-on-scroll').forEach(el => {
            observer.observe(el);
          });
        }
      });
    });
  });

  // body의 변경사항 관찰
  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// 스킬 프로그레스 바 애니메이션
function animateSkillBars(container) {
  const skillBars = container.querySelectorAll('.skill-bar');

  skillBars.forEach((bar, index) => {
    const targetWidth = bar.getAttribute('data-width');

    // 순차적으로 애니메이션 실행
    setTimeout(() => {
      bar.style.width = targetWidth + '%';
    }, index * 100);
  });
}

// 타이핑 효과
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  const typingCursor = document.getElementById('typing-cursor');

  if (!typingElement) return;

  const text = typingElement.getAttribute('data-text');
  let index = 0;

  // 초기 텍스트 비우기
  typingElement.textContent = '';

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // 100ms 간격으로 타이핑
    } else {
      // 타이핑 완료 후 커서 깜빡임 유지
      if (typingCursor) {
        typingCursor.style.display = 'inline-block';
      }
    }
  }

  // 페이지 로드 후 약간의 딜레이 후 시작
  setTimeout(() => {
    type();
  }, 500);
}
