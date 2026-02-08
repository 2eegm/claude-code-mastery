// 데이터 임포트
import {
  profileData,
  skills,
  experiences,
  projects,
  education,
  certifications
} from './data.js';

// 소개 섹션 렌더링
export function renderAbout() {
  const aboutBio = document.getElementById('about-bio');
  if (aboutBio) {
    aboutBio.textContent = profileData.bio;
  }
}

// 기술 스택 렌더링
export function renderSkills(category = 'languages') {
  const container = document.getElementById('skill-content');
  if (!container) return;

  const skillsData = skills[category];

  if (Array.isArray(skillsData) && skillsData[0]?.level !== undefined) {
    // 레벨이 있는 경우: 프로그레스 바로 표시
    container.innerHTML = skillsData.map(skill => `
      <div class="mb-6 animate-on-scroll">
        <div class="flex justify-between mb-2">
          <span class="font-medium text-gray-700 dark:text-gray-300">${skill.name}</span>
          <span class="text-primary-600 dark:text-primary-400 font-semibold">${skill.level}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div class="skill-bar bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-1000 ease-out"
               data-width="${skill.level}"
               style="width: 0%"></div>
        </div>
      </div>
    `).join('');
  } else {
    // 레벨이 없는 경우: 뱃지로 표시
    container.innerHTML = `
      <div class="flex flex-wrap justify-center gap-3">
        ${skillsData.map(tool => `
          <span class="skill-badge animate-on-scroll">${tool}</span>
        `).join('')}
      </div>
    `;
  }
}

// 경력 섹션 렌더링
export function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  container.innerHTML = experiences.map((exp, index) => `
    <div class="card animate-on-scroll relative pl-8 md:pl-12">
      <!-- 타임라인 인디케이터 -->
      <div class="absolute left-0 top-6 w-4 h-4 bg-primary-500 rounded-full"></div>
      ${index < experiences.length - 1 ? '<div class="absolute left-1.5 top-10 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-transparent"></div>' : ''}

      <div class="mb-4">
        <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">${exp.position}</h3>
        <p class="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">${exp.company}</p>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">${exp.period}</p>
        <p class="text-gray-700 dark:text-gray-300 mb-4">${exp.description}</p>
      </div>

      <!-- 주요 성과 -->
      <div class="mb-4">
        <h4 class="font-semibold text-gray-800 dark:text-gray-100 mb-2">주요 성과:</h4>
        <ul class="space-y-2">
          ${exp.achievements.map(achievement => `
            <li class="flex items-start">
              <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700 dark:text-gray-300">${achievement}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- 기술 스택 태그 -->
      <div class="flex flex-wrap gap-2">
        ${exp.tags.map(tag => `<span class="skill-badge">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// 프로젝트 카드 생성 함수
function createProjectCard(project) {
  return `
    <div class="card animate-on-scroll project-card" data-category="${project.category.join(' ')}">
      <!-- 프로젝트 이미지 -->
      <div class="relative overflow-hidden rounded-lg mb-4 -mx-6 -mt-6">
        <img src="${project.image}" alt="${project.title}"
             class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
             loading="lazy">
        ${project.demo ? `
          <div class="absolute top-4 right-4">
            <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Live Demo
            </span>
          </div>
        ` : ''}
      </div>

      <!-- 프로젝트 정보 -->
      <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">${project.title}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">${project.description}</p>

      <!-- 기능 목록 -->
      <div class="mb-4">
        <ul class="space-y-1">
          ${project.features.slice(0, 3).map(feature => `
            <li class="flex items-start text-sm text-gray-600 dark:text-gray-400">
              <svg class="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span>${feature}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- 기술 스택 태그 -->
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.tags.map(tag => `<span class="skill-badge text-xs">${tag}</span>`).join('')}
      </div>

      <!-- 링크 버튼 -->
      <div class="flex gap-3 mt-auto">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer"
           class="btn-secondary flex-1 text-center text-sm py-2">
          <svg class="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
          </svg>
          GitHub
        </a>
        ${project.demo ? `
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer"
             class="btn-primary flex-1 text-center text-sm py-2">
            <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Demo
          </a>
        ` : ''}
      </div>
    </div>
  `;
}

// 프로젝트 섹션 렌더링
export function renderProjects(filteredProjects = projects) {
  const container = document.getElementById('project-container');
  if (!container) return;

  container.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
}

// 학력 섹션 렌더링
export function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container) return;

  container.innerHTML = education.map(edu => `
    <div class="card animate-on-scroll">
      <div class="flex items-start mb-4">
        <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m0-7l9 5v-5m-9 0l-9 5v5"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">${edu.degree}</h3>
          <p class="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-1">${edu.school}</p>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">${edu.period}</p>
          <p class="text-gray-700 dark:text-gray-300 mb-3">${edu.description}</p>
        </div>
      </div>

      ${edu.achievements && edu.achievements.length > 0 ? `
        <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 class="font-semibold text-gray-800 dark:text-gray-100 mb-2">주요 활동:</h4>
          <ul class="space-y-1">
            ${edu.achievements.map(achievement => `
              <li class="flex items-start text-gray-700 dark:text-gray-300">
                <svg class="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>${achievement}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `).join('');
}

// 자격증 섹션 렌더링
export function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  container.innerHTML = certifications.map(cert => `
    <div class="card animate-on-scroll">
      <div class="flex items-start">
        <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-1">${cert.name}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">${cert.issuer}</p>
          <p class="text-xs text-gray-500 dark:text-gray-500">발급일: ${cert.date}</p>
          ${cert.credentialId ? `<p class="text-xs text-gray-500 dark:text-gray-500 mt-1">ID: ${cert.credentialId}</p>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// SNS 아이콘 정의
const socialIcons = {
  email: {
    name: 'Email',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>`,
    color: 'from-red-500 to-orange-500'
  },
  github: {
    name: 'GitHub',
    icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
    </svg>`,
    color: 'from-gray-700 to-gray-900'
  },
  linkedin: {
    name: 'LinkedIn',
    icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
    </svg>`,
    color: 'from-blue-600 to-blue-800'
  },
  youtube: {
    name: 'YouTube',
    icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844a10.5 10.5 0 014.96-.824c1.28 0 2.384.178 3.5.824 1.91-1.296 2.75-1.026 2.75-1.026.545 1.378.201 2.397.098 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.36.31.681.92.681 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
    </svg>`,
    color: 'from-red-600 to-red-700'
  },
  instagram: {
    name: 'Instagram',
    icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>`,
    color: 'from-purple-600 via-pink-600 to-orange-600'
  },
  twitter: {
    name: 'Twitter',
    icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>`,
    color: 'from-blue-400 to-blue-600'
  }
};

// 연락/SNS 링크 섹션 렌더링
export function renderContact() {
  const container = document.getElementById('contact-container');
  if (!container) return;

  const contactLinks = [];

  // Email
  if (profileData.email) {
    contactLinks.push({
      url: `mailto:${profileData.email}`,
      type: 'email',
      label: profileData.email
    });
  }

  // GitHub
  if (profileData.github) {
    contactLinks.push({
      url: profileData.github,
      type: 'github',
      label: 'GitHub'
    });
  }

  // LinkedIn
  if (profileData.linkedin) {
    contactLinks.push({
      url: profileData.linkedin,
      type: 'linkedin',
      label: 'LinkedIn'
    });
  }

  // YouTube
  if (profileData.youtube) {
    contactLinks.push({
      url: profileData.youtube,
      type: 'youtube',
      label: 'YouTube'
    });
  }

  // Instagram
  if (profileData.instagram) {
    contactLinks.push({
      url: profileData.instagram,
      type: 'instagram',
      label: 'Instagram'
    });
  }

  // Twitter
  if (profileData.twitter) {
    contactLinks.push({
      url: profileData.twitter,
      type: 'twitter',
      label: 'Twitter'
    });
  }

  container.innerHTML = contactLinks.map(link => {
    const social = socialIcons[link.type];
    return `
      <a href="${link.url}"
         target="_blank"
         rel="noopener noreferrer"
         class="group card text-center animate-on-scroll hover:scale-105">
        <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
          <div class="text-white">
            ${social.icon}
          </div>
        </div>
        <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-1">${social.name}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          연결하기
        </p>
      </a>
    `;
  }).join('');
}

// 모든 컨텐츠 렌더링
export function renderContent() {
  renderAbout();
  renderSkills('languages'); // 기본값: 언어
  renderExperience();
  renderProjects();
  renderEducation();
  renderCertifications();
  renderContact();
}
