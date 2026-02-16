<template>
  <section class="hero section-shell">
    <p class="status">Available for freelance and internship</p>

    <h2 class="name">Riksha Jiwana Sinatrya</h2>
    <h1>Frontend Developer yang fokus pada performa, detail UI, dan pengalaman pengguna.</h1>

    <p class="sub">
      Saya membangun website dan interface modern dengan Vue.js, CSS yang scalable,
      serta perhatian tinggi pada usability dan maintainability.
    </p>

    <div class="buttons">
      <router-link to="/about" class="btn primary">View Experience</router-link>
      <router-link to="/contact" class="btn ghost">Contact Me</router-link>
    </div>

    <div class="metrics">
      <article>
        <h3>3+</h3>
        <p>Project selesai</p>
      </article>
      <article>
        <h3>2+ Years</h3>
        <p>Eksplorasi frontend</p>
      </article>
      <article>
        <h3>Core Stack</h3>
        <p>Vue, JavaScript, CSS</p>
      </article>
    </div>
  </section>

  <section class="featured section-shell">
    <h2 class="section-title">Featured Projects</h2>
    <p class="section-sub">
      Beberapa proyek dengan fokus pada clean design, performa cepat, dan pengalaman pengguna yang nyaman.
    </p>

    <div class="project-grid">
      <article class="project-card">
        <p class="tag">Frontend</p>
        <h3>Portfolio Website</h3>
        <p>Website personal dengan tampilan profesional, animasi ringan, dan layout responsif.</p>
      </article>
      <article class="project-card">
        <p class="tag">UI/UX</p>
        <h3>Mobile App Prototype</h3>
        <p>Perancangan prototype aplikasi mobile berfokus pada flow yang ringkas dan visual modern.</p>
      </article>
      <article class="project-card">
        <p class="tag">Web App</p>
        <h3>Landing Page Conversion</h3>
        <p>Landing page dengan copy terstruktur dan komponen reusable untuk meningkatkan konversi.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 82px 0 60px;
}

.status {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  margin-bottom: 18px;
  color: #75f0ad;
  background: rgba(63, 134, 94, 0.14);
  border: 1px solid rgba(75, 193, 130, 0.35);
  font-size: 0.9rem;
}

.name {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  color: var(--primary-soft);
}

h1 {
  margin-top: 10px;
  font-size: clamp(2.1rem, 6vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  max-width: 18ch;
}

.sub {
  margin-top: 22px;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  color: var(--text-soft);
  max-width: 64ch;
  line-height: 1.8;
}

.buttons {
  margin-top: 32px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  border-radius: 12px;
  font-weight: 600;
}

.primary {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 10px 25px rgba(255, 85, 51, 0.28);
}

.primary:hover {
  transform: translateY(-2px);
}

.ghost {
  border: 1px solid var(--border);
  color: var(--text);
  background: rgba(255, 255, 255, 0.03);
}

.ghost:hover {
  background: rgba(255, 255, 255, 0.08);
}

.metrics {
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 16px;
}

.metrics article {
  background: linear-gradient(145deg, #15192a, #101421);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
}

.metrics article:nth-child(1) {
  border-top: 2px solid #ff8f78;
}

.metrics article:nth-child(2) {
  border-top: 2px solid #79ddff;
}

.metrics article:nth-child(3) {
  border-top: 2px solid #86e5b0;
}

.metrics h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.metrics p {
  color: var(--text-soft);
}

.featured {
  padding: 36px 0 40px;
}

.section-sub {
  margin-top: 10px;
  max-width: 760px;
}

.project-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.project-card {
  background: linear-gradient(165deg, #151a2b, #101421);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px;
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #49547d;
}

.project-card .tag {
  display: inline-block;
  font-size: 0.75rem;
  color: #ffbfaf;
  margin-bottom: 8px;
}

.project-card h3 {
  margin-bottom: 12px;
}

.project-card p {
  color: var(--text-soft);
  line-height: 1.7;
}

@media (max-width: 900px) {
  .project-grid,
  .metrics {
    grid-template-columns: 1fr;
  }
}
</style>
