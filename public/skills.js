// Canonical skill names used by parsing and role matching. This is intentionally
// conservative: aliases are normalized, but an unrecognised user-entered skill
// is preserved rather than being guessed.
const SKILL_ALIASES = {
  'react.js': 'React',
  react: 'React',
  'node.js': 'Node.js',
  node: 'Node.js',
  nodejs: 'Node.js',
  'express.js': 'Express',
  express: 'Express',
  postgres: 'PostgreSQL',
  postgresql: 'PostgreSQL',
  ml: 'Machine Learning',
  'machine learning': 'Machine Learning',
  ai: 'Artificial Intelligence',
  'artificial intelligence': 'Artificial Intelligence',
  'vue.js': 'Vue.js',
  vue: 'Vue.js',
  'spring boot': 'Spring Boot',
  spring: 'Spring Boot',
  'tailwind css': 'TailwindCSS',
  tailwind: 'TailwindCSS',
  tailwindcss: 'TailwindCSS',
  'cascading style sheets': 'CSS',
  css: 'CSS',
  html: 'HTML'
};

export function normalizeSkill(skill) {
  const value = String(skill || '').trim();
  if (!value) return '';
  return SKILL_ALIASES[value.toLowerCase()] || value;
}

export function normalizeSkillList(skills = []) {
  const normalized = skills.map(normalizeSkill).filter(Boolean);
  return [...new Map(normalized.map(skill => [skill.toLowerCase(), skill])).values()];
}

export function skillsMatch(left, right) {
  return normalizeSkill(left).toLowerCase() === normalizeSkill(right).toLowerCase();
}
