// Automated Integration and Unit Tests for CareerInfinity AI Intelligence Layer
import { normalizeSkill, skillsMatch, normalizeSkillList } from './skills.js';
import { computeResumeScore, computeCareerReadiness } from './profile-engine.js';
import { JOBS } from './jobs-data.js';

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    passedTests++;
    console.log(`✅ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`❌ FAIL: ${message}`);
  }
}

console.log("==================================================");
console.log("RUNNING SKILL NORMALIZATION TESTS");
console.log("==================================================");

// 1. Alias Matching Tests
assert(normalizeSkill('HTML5') === 'html', "HTML5 normalizes to html");
assert(normalizeSkill('HTML 5') === 'html', "HTML 5 normalizes to html");
assert(normalizeSkill('CSS3') === 'css', "CSS3 normalizes to css");
assert(normalizeSkill('React.js') === 'react', "React.js normalizes to react");
assert(normalizeSkill('ReactJS') === 'react', "ReactJS normalizes to react");
assert(normalizeSkill('JS') === 'javascript', "JS normalizes to javascript");
assert(normalizeSkill('TypeScript') !== 'javascript', "TypeScript does NOT normalize to javascript");
assert(normalizeSkill('GitHub') !== 'git', "GitHub does NOT normalize to git");
assert(normalizeSkill('ML') === 'ml', "ML normalizes to ml");
assert(normalizeSkill('Artificial Intelligence') === 'ai', "Artificial Intelligence normalizes to ai");
assert(normalizeSkill('Postgres') === 'postgresql', "Postgres normalizes to postgresql");

// 2. Pairwise Match Tests
assert(skillsMatch('HTML5', 'HTML'), "HTML5 matches HTML");
assert(skillsMatch('CSS3', 'CSS'), "CSS3 matches CSS");
assert(skillsMatch('ReactJS', 'React.js'), "ReactJS matches React.js");
assert(!skillsMatch('TypeScript', 'JavaScript'), "TypeScript and JavaScript are distinct");
assert(!skillsMatch('Git', 'GitHub'), "Git and GitHub are distinct");

console.log("\n==================================================");
console.log("RUNNING PROFILE MATCHING & SCORING TESTS");
console.log("==================================================");

// Controlled Profiles
const frontendProfile = {
  name: "Ananya Sharma",
  email: "ananya@example.com",
  skills: normalizeSkillList(['HTML5', 'CSS3', 'JavaScript', 'React', 'Git']),
  experience: "Frontend Developer Intern at XYZ. Led building 3 interactive React dashboards increasing click-through by 12%. Used Git.",
  education: "B.Tech Computer Science, graduation 2026",
  projects: "Portfolio Website: Optimized layout for mobile, achieving 98% Lighthouse performance.",
  raw_text: "Ananya Sharma \n ananya@example.com \n Phone: 9876543210 \n GitHub: github.com/ananya \n Led building 3 interactive React dashboards increasing click-through by 12%. HTML5, CSS3, JavaScript, React."
};

const aimlProfile = {
  name: "Rohit Kumar",
  email: "rohit@example.com",
  skills: normalizeSkillList(['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch']),
  experience: "Research Assistant at AI Lab. Spearheaded building NLP classification models, improving F1 score by 15% on 20k rows of text data.",
  education: "M.Tech Artificial Intelligence, CGPA 9.5",
  projects: "Image Classifier: Implemented Convolutional Neural Networks on PyTorch.",
  raw_text: "Rohit Kumar \n rohit@example.com \n Phone: 9988776655 \n Spearheaded building NLP classification models, improving F1 score by 15%. Python, PyTorch, TensorFlow."
};

// 3. Job Match Calculations
const frontendJob = JOBS.find(j => j.title === "Frontend Developer");
const aimlJob = JOBS.find(j => j.title === "AI/ML Engineer");

// Compute Frontend Profile alignment on Frontend Developer role
let feMatchCount = 0;
frontendJob.skillReq.forEach(req => {
  if (frontendProfile.skills.some(s => skillsMatch(s, req.skill))) {
    feMatchCount += req.weight;
  }
});
// Target: HTML(15) + CSS(15) + JS(20) + React(20) + Git(10) = 80% (TypeScript (10) and Responsive Design (10) missing)
assert(feMatchCount === 80, `Frontend Profile matches Frontend Developer Job at 80% (Actual: ${feMatchCount}%)`);

// Compute AI/ML Profile alignment on AI/ML Engineer role
let aimlMatchCount = 0;
aimlJob.skillReq.forEach(req => {
  if (aimlProfile.skills.some(s => skillsMatch(s, req.skill))) {
    aimlMatchCount += req.weight;
  }
});
// Target: Python(20) + Machine Learning(20) + TensorFlow(15) + Deep Learning(15) = 70% (SQL, Git, Docker missing)
assert(aimlMatchCount === 70, `AI/ML Profile matches AI/ML Engineer Job at 70% (Actual: ${aimlMatchCount}%)`);

// 4. Resume Score Calculations
const feResumeRes = computeResumeScore(frontendProfile);
const aimlResumeRes = computeResumeScore(aimlProfile);

assert(feResumeRes.total >= 70 && feResumeRes.total < 100, `Frontend Resume Score is realistic: ${feResumeRes.total}/100`);
assert(aimlResumeRes.total >= 70 && aimlResumeRes.total < 100, `AI/ML Resume Score is realistic: ${aimlResumeRes.total}/100`);

// 5. Career Readiness Score Calculations
const feReadiness = computeCareerReadiness(feResumeRes.total, feMatchCount, frontendProfile.skills.length, 0);
const aimlReadiness = computeCareerReadiness(aimlResumeRes.total, aimlMatchCount, aimlProfile.skills.length, 0);

assert(feReadiness.total > 50 && feReadiness.total < 95, `Frontend Readiness is realistic and calculated: ${feReadiness.total}`);
assert(aimlReadiness.total > 50 && aimlReadiness.total < 95, `AI/ML Readiness is realistic and calculated: ${aimlReadiness.total}`);

console.log("\n==================================================");
console.log(`TEST SUITE COMPLETE: ${passedTests} passed, ${failedTests} failed.`);
console.log("==================================================");

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
