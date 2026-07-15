// Canonical Skill Normalization Registry for CareerInfinity AI
export const CANONICAL_SKILLS = {
  'html': { id: 'html', displayName: 'HTML', aliases: ['html5', 'html 5', 'hypertext markup language'] },
  'css': { id: 'css', displayName: 'CSS', aliases: ['css3', 'css 3', 'cascading style sheets'] },
  'javascript': { id: 'javascript', displayName: 'JavaScript', aliases: ['js', 'ecmascript', 'javascript.js'] },
  'typescript': { id: 'typescript', displayName: 'TypeScript', aliases: ['ts', 'typescript.js'] },
  'react': { id: 'react', displayName: 'React', aliases: ['react.js', 'reactjs'] },
  'nodejs': { id: 'nodejs', displayName: 'Node.js', aliases: ['node', 'node.js', 'express.js'] },
  'postgresql': { id: 'postgresql', displayName: 'PostgreSQL', aliases: ['postgres'] },
  'mongodb': { id: 'mongodb', displayName: 'MongoDB', aliases: ['mongo'] },
  'ai': { id: 'ai', displayName: 'Artificial Intelligence', aliases: ['artificial intelligence'] },
  'ml': { id: 'ml', displayName: 'Machine Learning', aliases: ['machine learning'] },
  'git': { id: 'git', displayName: 'Git', aliases: [] },
  'github': { id: 'github', displayName: 'GitHub', aliases: [] },
  'spring-boot': { id: 'spring-boot', displayName: 'Spring Boot', aliases: ['spring'] },
  'tailwindcss': { id: 'tailwindcss', displayName: 'TailwindCSS', aliases: ['tailwind', 'tailwind css'] },
  'vue': { id: 'vue', displayName: 'Vue.js', aliases: ['vue.js', 'vuejs'] },
  'express': { id: 'express', displayName: 'Express', aliases: ['express.js'] }
};

// Map of all lowercase aliases and canonical IDs to canonical IDs
const SKILL_MAP = {};
Object.keys(CANONICAL_SKILLS).forEach(id => {
  const item = CANONICAL_SKILLS[id];
  SKILL_MAP[id] = id;
  SKILL_MAP[item.displayName.toLowerCase()] = id;
  item.aliases.forEach(alias => {
    SKILL_MAP[alias.toLowerCase()] = id;
  });
});

export function normalizeSkill(skill) {
  const value = String(skill || '').trim().toLowerCase();
  if (!value) return '';
  
  // Return canonical ID if registered, otherwise return normalized lowercase string
  return SKILL_MAP[value] || value;
}

export function getSkillDisplayName(skill) {
  const canonicalId = normalizeSkill(skill);
  if (CANONICAL_SKILLS[canonicalId]) {
    return CANONICAL_SKILLS[canonicalId].displayName;
  }
  // Title case fallback for unregistered skills
  return String(skill || '').trim().replace(/\b\w/g, c => c.toUpperCase());
}

export function normalizeSkillList(skills = []) {
  const normalized = skills.map(normalizeSkill).filter(Boolean);
  return [...new Set(normalized)];
}

export function skillsMatch(left, right) {
  const leftNorm = normalizeSkill(left);
  const rightNorm = normalizeSkill(right);
  return leftNorm && rightNorm && leftNorm === rightNorm;
}
