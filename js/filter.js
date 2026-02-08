// 프로젝트 데이터 임포트
import { projects } from './data.js';
import { renderProjects } from './render.js';

// 프로젝트 필터링 기능 초기화
export function initProjectFilter() {
  setupFilterButtons();
}

// 필터 버튼 설정
function setupFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // 모든 버튼에서 active 클래스 제거
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // 클릭된 버튼에 active 클래스 추가
      button.classList.add('active');

      // 프로젝트 필터링 및 렌더링
      filterProjects(filter);
    });
  });
}

// 프로젝트 필터링
function filterProjects(category) {
  let filteredProjects = projects;

  if (category !== 'all') {
    // 선택된 카테고리를 포함하는 프로젝트만 필터링
    filteredProjects = projects.filter(project =>
      project.category.includes(category)
    );
  }

  // 필터링된 프로젝트 렌더링
  renderProjects(filteredProjects);

  // 애니메이션 재적용을 위해 약간의 딜레이 후 스크롤 이벤트 트리거
  setTimeout(() => {
    window.dispatchEvent(new Event('scroll'));
  }, 100);
}
