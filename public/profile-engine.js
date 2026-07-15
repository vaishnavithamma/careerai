// Centralized Profile, Resume Scoring, and Career Readiness Engine for CareerInfinity AI
import { normalizeSkillList } from './skills.js';

export function computeResumeScore(profile) {
  const { email, name, skills = [], experience = '', education = '', projects = '', raw_text = '' } = profile;
  
  let score = 0;
  const breakdown = {
    contact: 0,
    summary: 0,
    education: 0,
    experience: 0,
    projects: 0,
    links: 0
  };

  // 1. Contact Completeness (10 pts)
  const phonePattern = /(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b|\b\d{10}\b/;
  const hasPhone = phonePattern.test(raw_text);
  if (email && (name || hasPhone)) {
    breakdown.contact = 10;
  } else if (email) {
    breakdown.contact = 5;
  }
  score += breakdown.contact;

  // 2. Professional Summary Presence (10 pts)
  const hasSummary = /\b(summary|objective|about me|profile statement|professional profile)\b/i.test(raw_text);
  if (hasSummary) {
    breakdown.summary = 10;
  }
  score += breakdown.summary;

  // 3. Education Completeness (20 pts)
  const eduLen = (education || '').trim().length;
  if (eduLen > 30) {
    breakdown.education = 20;
  } else if (eduLen > 0) {
    breakdown.education = 10;
  }
  score += breakdown.education;

  // 4. Experience Quality (30 pts)
  const expText = (experience || '').trim();
  if (expText.length > 30) {
    breakdown.experience += 10; // Base presence
    
    // Action verbs
    const actionVerbs = /\b(led|built|optimized|managed|designed|developed|implemented|created|spearheaded|engineered|constructed|delivered|automated|improved)\b/i;
    if (actionVerbs.test(expText)) {
      breakdown.experience += 10;
    }
    
    // Quantified impact (percent, users, dollar values, metric numbers)
    const hasQuantified = /(?:\b\d+%\b|\b\d+\s+users\b|\b\$\d+|\b\d+\s+percent\b|\b\d+\s+x\b|\b\d+x\b)/i;
    if (hasQuantified.test(expText)) {
      breakdown.experience += 10;
    }
  } else if (expText.length > 0) {
    breakdown.experience = 5;
  }
  score += breakdown.experience;

  // 5. Projects Quality (20 pts)
  const projText = (projects || '').trim();
  if (projText.length > 30) {
    breakdown.projects = 20;
  } else if (projText.length > 0) {
    breakdown.projects = 10;
  }
  score += breakdown.projects;

  // 6. Portfolio/Professional Links (10 pts)
  const hasLinks = /(github\.com|linkedin\.com|portfolio|http:\/\/|https:\/\/)/i.test(raw_text);
  if (hasLinks) {
    breakdown.links = 10;
  }
  score += breakdown.links;

  return {
    total: Math.min(100, score),
    breakdown
  };
}

export function computeCareerReadiness(resumeScore, maxJobMatchPct, skillsMappedCount, answeredQuestionsCount) {
  // 1. Resume Quality (30% weight)
  const resumeContribution = resumeScore * 0.3;

  // 2. Job Skill Alignment (40% weight)
  const jobContribution = maxJobMatchPct * 0.4;

  // 3. Profile completeness based on mapped skills count (15% weight)
  // Assumes 10+ skills mapped represents a comprehensive profile
  const profileContribution = Math.min(100, skillsMappedCount * 10) * 0.15;

  // 4. Interview preparation / activities (15% weight)
  // Assumes answering 5 questions represents complete interview readiness
  const interviewContribution = Math.min(100, answeredQuestionsCount * 20) * 0.15;

  const finalScore = Math.round(resumeContribution + jobContribution + profileContribution + interviewContribution);

  return {
    total: Math.min(100, finalScore),
    breakdown: {
      resumeQuality: Math.round(resumeContribution),
      jobAlignment: Math.round(jobContribution),
      profileCompleteness: Math.round(profileContribution),
      interviewReadiness: Math.round(interviewContribution)
    }
  };
}

export function calculateProfileCompleteness(profile) {
  let filled = 0;
  const fields = ['email', 'name', 'experience', 'education', 'projects'];
  fields.forEach(f => {
    if (profile[f] && String(profile[f]).trim().length > 0) {
      filled++;
    }
  });
  if (profile.skills && profile.skills.length > 0) {
    filled++;
  }
  return Math.round((filled / 6) * 100);
}
