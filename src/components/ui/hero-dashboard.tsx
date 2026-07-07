import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Target, Brain, Briefcase, ArrowUpRight } from "lucide-react";

export function HeroDashboard() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="absolute -inset-8 -z-10">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-[color:var(--brand)]/25 blur-3xl animate-blob" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-[color:var(--brand-3)]/25 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute left-1/3 bottom-0 h-56 w-56 rounded-full bg-[color:var(--brand-2)]/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl glass-strong shadow-elevated overflow-hidden"
      >
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <div className="ml-3 flex items-center gap-2 rounded-md bg-muted/60 px-2.5 py-1 text-[11px] text-muted-foreground">
            <Sparkles className="h-3 w-3" /> careerpilot.ai/dashboard
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 p-5">
          {/* Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="col-span-12 md:col-span-5 rounded-2xl bg-card p-5 shadow-soft"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Career Readiness</p>
                <p className="mt-1 text-3xl font-bold tracking-tight">82<span className="text-lg text-muted-foreground">/100</span></p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-3 w-3" /> +8 this week
              </span>
            </div>
            <div className="mt-5">
              <RingScore value={82} />
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="col-span-12 md:col-span-7 rounded-2xl bg-card p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Skill breakdown</p>
              <Target className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-4 space-y-3">
              {[
                { l: "Resume Strength", v: 90 },
                { l: "Technical Skills", v: 83 },
                { l: "Interview Readiness", v: 71 },
                { l: "GitHub Consistency", v: 69 },
              ].map((s, i) => (
                <div key={s.l}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{s.l}</span>
                    <span className="font-semibold">{s.v}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: `${s.v}%` }}
                      transition={{ delay: 0.35 + i * 0.08, duration: 0.9, ease: "easeOut" }}
                      className="h-full gradient-brand rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Mentor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="col-span-12 md:col-span-7 rounded-2xl p-5 gradient-brand text-white shadow-soft relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="flex items-center gap-2 text-xs font-medium opacity-90">
              <Brain className="h-4 w-4" /> AI Mentor · Suggestion
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              Complete one cloud-based capstone project and push weekly commits to raise your score to <b>91</b>.
            </p>
            <button className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white/15 backdrop-blur px-3 py-1.5 text-xs font-semibold hover:bg-white/25 transition">
              View roadmap <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="col-span-12 md:col-span-5 rounded-2xl bg-card p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Job Matches</p>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-3 space-y-2.5">
              {[
                { r: "ML Engineer", c: "Anthropic", m: 96 },
                { r: "AI Product Eng.", c: "Linear", m: 92 },
                { r: "Data Scientist", c: "Stripe", m: 88 },
              ].map((j) => (
                <div key={j.r} className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2">
                  <div>
                    <p className="text-xs font-semibold">{j.r}</p>
                    <p className="text-[11px] text-muted-foreground">{j.c}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">{j.m}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function RingScore({ value }: { value: number }) {
  const size = 140;
  const stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand)" />
            <stop offset="60%" stopColor="var(--brand-2)" />
            <stop offset="100%" stopColor="var(--brand-3)" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} className="stroke-muted" fill="none" />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} strokeLinecap="round" fill="none" stroke="url(#ringGrad)"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - (c * value) / 100 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold tracking-tight">{value}%</span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Ready</span>
      </div>
    </div>
  );
}
