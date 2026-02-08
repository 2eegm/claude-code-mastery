// 모듈 임포트
import { renderContent, renderSkills } from './render.js';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initDarkMode } from './darkmode.js';
import { initProjectFilter } from './filter.js';

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 개발자 웹 이력서 초기화 중...');

  // 1. 다크모드 먼저 초기화 (깜빡임 방지)
  initDarkMode();

  // 2. 컨텐츠 렌더링
  renderContent();

  // 3. 기술 스택 탭 이벤트 설정
  setupSkillTabs();

  // 4. 네비게이션 초기화
  initNavigation();

  // 5. 애니메이션 초기화
  initAnimations();

  // 6. 프로젝트 필터링 초기화
  initProjectFilter();

  console.log('✅ 개발자 웹 이력서 로드 완료!');
});

// 기술 스택 탭 설정
function setupSkillTabs() {
  const skillTabs = document.querySelectorAll('.skill-tab');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-tab');

      // 모든 탭에서 active 클래스 제거
      skillTabs.forEach(t => t.classList.remove('active'));

      // 클릭된 탭에 active 클래스 추가
      tab.classList.add('active');

      // 해당 카테고리의 스킬 렌더링
      renderSkills(category);

      // 애니메이션 재적용
      setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
      }, 100);
    });
  });
}
