<script setup>
import { useScrollAnimation, useTypingEffect } from '../composables/useScrollAnimation';

useScrollAnimation();

useTypingEffect(
  ['Frontend Developer', 'UI/UX Enthusiast', 'Vue.js Specialist'],
  { typingSpeed: 70, deletingSpeed: 35, pauseDuration: 1800 }
);
</script>

<template>
  <div>
    <section class="hero section-shell">
      <div class="hero-glow"></div>
      
      <p class="status" data-animate>Available for freelance and internship</p>

      <h2 class="name" data-animate>Riksha Jiwana Sinatrya</h2>
      
      <h1 class="hero-headline" data-animate>
        <span class="typing-text"></span><span class="cursor-blink"></span>
      </h1>

      <p class="sub" data-animate>
        Saya membangun website dan interface modern dengan Vue.js, CSS yang scalable,
        serta perhatian tinggi pada usability dan maintainability.
      </p>

      <div class="buttons" data-animate>
        <router-link to="/about" class="btn primary">
          View Experience
          <svg class="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
        <router-link to="/contact" class="btn ghost">Contact Me</router-link>
      </div>

      <div class="metrics" data-animate>
        <article class="metric-card">
          <h3>3+</h3>
          <p>Project selesai</p>
        </article>
        <article class="metric-card">
          <h3>2+ Years</h3>
          <p>Eksplorasi frontend</p>
        </article>
        <article class="metric-card">
          <h3>Core Stack</h3>
          <p>Vue, JavaScript, CSS</p>
        </article>
      </div>
    </section>

    <section class="featured section-shell">
      <h2 class="section-title" data-animate>Featured Projects</h2>
      <p class="section-sub" data-animate>
        Beberapa proyek dengan fokus pada clean design, performa cepat, dan pengalaman pengguna yang nyaman.
      </p>

      <div class="project-grid">
        <article class="project-card" data-animate="scale-up">
          <div class="card-shine"></div>
          <p class="tag">Frontend</p>
          <h3>Portfolio Website</h3>
          <p>Website personal dengan tampilan profesional, animasi ringan, dan layout responsif.</p>
          <div class="card-footer">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">CSS</span>
          </div>
        </article>
        <article class="project-card" data-animate="scale-up">
          <div class="card-shine"></div>
          <p class="tag">UI/UX</p>
          <h3>Mobile App Prototype</h3>
          <p>Perancangan prototype aplikasi mobile berfokus pada flow yang ringkas dan visual modern.</p>
          <div class="card-footer">
            <span class="tech-tag">Figma</span>
            <span class="tech-tag">Prototyping</span>
          </div>
        </article>
        <article class="project-card" data-animate="scale-up">
          <div class="card-shine"></div>
          <p class="tag">Web App</p>
          <h3>Landing Page Conversion</h3>
          <p>Landing page dengan copy terstruktur dan komponen reusable untuk meningkatkan konversi.</p>
          <div class="card-footer">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">Tailwind</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
main {
  padding-top: 20px;
}

body {
  margin: 0;
}

.hero {
  padding: 16px 0 56px;
  position: relative;
}

.hero .status {
  margin-top: 0;
}

.hero .name {
  margin-top: 12px;
}

.hero-glow {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(255, 85, 51, 0.06) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}

.hero > * {
  position: relative;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 20px;
  color: var(--success);
  background: rgba(63, 134, 94, 0.12);
  border: 1px solid rgba(75, 193, 130, 0.25);
  font-size: 0.88rem;
}

.status::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}

.name {
  font-size: clamp(1.4rem, 3.5vw, 2rem);
  color: var(--primary-soft);
  font-weight: 600;
}

.hero-headline {
  margin-top: 14px;
  font-size: clamp(2rem, 5.5vw, 3.5rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
  min-height: 1.15em;
}

.typing-text {
  background: linear-gradient(135deg, var(--text) 0%, var(--primary-soft) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sub {
  margin-top: 24px;
  font-size: clamp(1rem, 2.2vw, 1.15rem);
  color: var(--text-soft);
  max-width: 60ch;
  line-height: 1.8;
}

.buttons {
  margin-top: 36px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  border-radius: 12px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.btn-arrow {
  transition: transform 0.2s ease;
}

.btn:hover .btn-arrow {
  transform: translateX(4px);
}

.primary {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 10px 25px rgba(255, 85, 51, 0.25);
}

.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(255, 85, 51, 0.35);
}

.ghost {
  border: 1px solid var(--border);
  color: var(--text);
  background: rgba(255, 255, 255, 0.03);
}

.ghost:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(80, 92, 133, 0.6);
}

.metrics {
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 18px;
}

.metric-card {
  background: linear-gradient(145deg, #15192a, #101421);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
}

.metric-card:nth-child(1)::before {
  background: linear-gradient(90deg, #ff8f78, transparent);
}

.metric-card:nth-child(2)::before {
  background: linear-gradient(90deg, #79ddff, transparent);
}

.metric-card:nth-child(3)::before {
  background: linear-gradient(90deg, #86e5b0, transparent);
}

.metric-card:hover {
  transform: translateY(-4px);
  border-color: rgba(80, 92, 133, 0.6);
}

.metric-card h3 {
  font-size: 1.3rem;
  margin-bottom: 6px;
}

.metric-card p {
  color: var(--text-soft);
  font-size: 0.9rem;
}

.featured {
  padding: 48px 0 64px;
}

.section-sub {
  margin-top: 12px;
  max-width: 700px;
}

.project-grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.project-card {
  background: linear-gradient(165deg, #151a2b, #101421);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 28px;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.card-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-shine {
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(80, 92, 133, 0.6);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

.project-card .tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffbfaf;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(255, 85, 51, 0.1);
  margin-bottom: 14px;
}

.project-card h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.project-card p {
  color: var(--text-soft);
  line-height: 1.7;
  font-size: 0.92rem;
}

.card-footer {
  margin-top: 18px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-tag {
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(121, 221, 255, 0.08);
  color: var(--accent-soft);
  border: 1px solid rgba(121, 221, 255, 0.15);
}

@media (max-width: 900px) {
  .project-grid,
  .metrics {
    grid-template-columns: 1fr;
  }

  .hero {
    padding: 24px 0 40px;
  }

  .hero-glow {
    width: 300px;
    height: 300px;
    top: -20%;
  }
}
</style>
