// CareerPilot AI — shared JS: Supabase auth, theme, helpers
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0';
import { createLovableAuth } from 'https://esm.sh/@lovable.dev/cloud-auth-js@1.1.2';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
const lovableAuth = createLovableAuth();

// -------- Toast --------
function ensureToastContainer() {
  let c = document.querySelector('.toast-container');
  if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
  return c;
}
export function toast(msg, type = 'success') {
  const c = ensureToastContainer();
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3000);
}

// -------- Theme --------
export function initTheme() {
  const saved = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', saved);
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      renderThemeIcon(btn, next);
    });
    renderThemeIcon(btn, saved);
  });
}
function renderThemeIcon(btn, theme) {
  btn.innerHTML = theme === 'dark'
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// -------- Nav scroll --------
export function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// -------- Auth actions (Mocked for testing) --------
export async function signInWithGoogle() {
  localStorage.setItem('mock_user', JSON.stringify({ id: 'mock-1', email: 'google@test.com' }));
  window.location.href = '/dashboard.html';
}

export async function signInWithEmail(email, password) {
  localStorage.setItem('mock_user', JSON.stringify({ id: 'mock-1', email }));
}

export async function signUpWithEmail(email, password, fullName) {
  localStorage.setItem('mock_user', JSON.stringify({ id: 'mock-1', email, user_metadata: { full_name: fullName } }));
}

export async function signOut() {
  localStorage.removeItem('mock_user');
  window.location.href = '/';
}

export async function getUser() {
  const userStr = localStorage.getItem('mock_user');
  if (userStr) return JSON.parse(userStr);
  return null;
}

export async function requireUser() {
  const user = await getUser();
  if (!user) { window.location.href = '/login.html'; return null; }
  return user;
}

// -------- Animated counter --------
export function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const from = 0;
  const suffix = el.dataset.suffix || '';
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const val = Math.floor(from + (target - from) * (1 - Math.pow(1 - p, 3)));
    el.textContent = val.toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// -------- Global init on load --------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
});
