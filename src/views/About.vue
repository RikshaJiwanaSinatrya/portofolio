<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation';
import expWebDev from "../assets/image/WhatsApp Image 2026-01-08 at 12.24.57 PM.jpeg";
import expUiUx from "../assets/image/Fuse 2025-Riksha Jiwana Sinatrya (Juara 1 - UI-UX SMA-SMK)_page-0001.jpg";
import expPortfolio from "../assets/image/WhatsApp Image 2026-01-08 at 12.47.53 PM.jpeg";

useScrollAnimation();

const toolkit = [
  { name: 'HTML', level: 90, icon: 'html' },
  { name: 'CSS', level: 85, icon: 'css' },
  { name: 'JavaScript', level: 80, icon: 'js' },
  { name: 'Vue.js', level: 75, icon: 'vue' },
  { name: 'Tailwind', level: 70, icon: 'tailwind' },
  { name: 'Figma', level: 80, icon: 'figma' },
  { name: 'Git', level: 75, icon: 'git' },
  { name: 'GitHub', level: 75, icon: 'github' },
  { name: 'Linux', level: 65, icon: 'linux' },
  { name: 'Ubuntu', level: 65, icon: 'ubuntu' },
  { name: 'Arch', level: 60, icon: 'arch' },
];

const experiences = [
  {
    year: '2024',
    title: 'Juara 1 UI/UX Fuse Politeknik Manufaktur Bandung',
    place: 'Fuse Competition',
    desc: 'Mendesain prototype aplikasi mobile dengan alur onboarding ringkas, visual konsisten, dan fokus usability.',
    img: expUiUx,
  },
  {
    year: '2024 - Sekarang',
    title: 'Web Developer Student Project',
    place: 'Self Initiated',
    desc: 'Mengembangkan website responsif menggunakan Vue dan CSS modern dengan fokus pada komponen reusable.',
    img: null,
  },
  {
    year: '2023 - 2025',
    title: 'Frontend Portfolio Development',
    place: 'Personal Branding Project',
    desc: 'Membangun portfolio end-to-end dari riset konten, struktur layout, hingga implementasi interaksi yang halus.',
    img: expPortfolio,
  },
  {
    year: '2025',
    title: 'Teater Jumat Sore',
    place: 'Teater',
    desc: 'Berperan dalam produksi pertunjukan teater mulai dari latihan rutin, eksplorasi karakter, hingga tampil di panggung, sekaligus mengasah komunikasi, kerja tim, dan kepercayaan diri.',
    img: expWebDev,
  },
];
</script>

<template>
  <div>
    <section class="about section-shell">
      <div class="about-container">
        <div class="about-text" data-animate="fade-left">
          <h2 class="section-title">About Me</h2>
          <p>
            Saya Frontend Developer yang suka membangun interface modern, responsif,
            dan mudah dipakai. Fokus utama saya adalah membuat pengalaman yang cepat,
            bersih, dan konsisten untuk pengguna.
          </p>
          <p>
            Dalam setiap project, saya menyeimbangkan visual design dengan kualitas
            kode, supaya hasil akhir tidak hanya menarik dilihat tapi juga mudah
            dikembangkan dalam jangka panjang.
          </p>
        </div>

        <div class="about-side" data-animate="fade-right">
          <div class="about-card">
            <div class="stat">
              <h3>3+</h3>
              <span>Projects Built</span>
            </div>
            <div class="stat">
              <h3>2+ Years</h3>
              <span>Learning Journey</span>
            </div>
            <div class="stat">
              <h3>Vue.js</h3>
              <span>Main Development Stack</span>
            </div>
          </div>
        </div>
      </div>

      <div class="toolkit-card" data-animate>
        <h3>Toolkit</h3>
        <div class="toolkit-grid">
          <div v-for="(tool, index) in toolkit" :key="tool.name" class="tool-item" :style="{ '--delay': index * 0.05 }">
            <img :src="`https://skillicons.dev/icons?i=${tool.icon}`" :alt="`${tool.name} logo`" loading="lazy" />
            <span class="tool-name">{{ tool.name }}</span>
            <div class="tool-bar-bg">
              <div class="tool-bar-fill" :style="{ width: `${tool.level}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="experience section-shell">
      <h2 class="section-title" data-animate>Experience</h2>
      <p class="section-sub" data-animate>
        Pengalaman yang membentuk pendekatan saya dalam menggabungkan visual, usability, dan performa.
      </p>

      <div class="exp-container">
        <article
          v-for="(exp, index) in experiences"
          :key="index"
          class="exp-row"
          data-animate
          :style="{ transitionDelay: index * 0.1 + 's' }"
        >
          <div v-if="exp.img" class="exp-photo-wrap">
            <img class="exp-photo" :src="exp.img" :alt="exp.title" />
          </div>
          <div v-else class="exp-photo-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <div class="exp-card">
            <p class="exp-year">{{ exp.year }}</p>
            <h3 class="exp-title">{{ exp.title }}</h3>
            <p class="exp-place">{{ exp.place }}</p>
            <p class="exp-desc">{{ exp.desc }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding: 74px 0 40px;
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: stretch;
}

.about-text p {
  color: var(--text-soft);
  line-height: 1.8;
  margin-top: 18px;
  max-width: none;
  text-align: justify;
}

.about-side {
  display: grid;
  gap: 16px;
}

.about-card {
  background: linear-gradient(160deg, #171d31, #101423);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  display: grid;
  gap: 18px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--glow);
}

.stat {
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(80, 92, 133, 0.35);
}

.stat:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.stat h3 {
  font-size: 1.4rem;
  color: var(--primary-soft);
}

.stat span {
  color: var(--text-soft);
  font-size: 0.94rem;
}

.toolkit-card {
  background: linear-gradient(165deg, #151b2f, #0f1424);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  margin-top: 40px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.toolkit-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2);
}

.toolkit-card h3 {
  font-size: 1.1rem;
  margin-bottom: 18px;
  position: relative;
  display: inline-block;
}

.toolkit-card h3::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
}

.toolkit-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tool-item {
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(80, 92, 133, 0.4);
  background: rgba(18, 23, 39, 0.6);
  color: var(--text-soft);
  font-size: 0.84rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  min-width: 100px;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.tool-item:hover {
  transform: translateY(-3px);
  border-color: rgba(80, 92, 133, 0.7);
  background: rgba(18, 23, 39, 0.9);
}

.tool-item img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.tool-name {
  font-weight: 500;
  color: var(--text);
  font-size: 0.82rem;
}

.tool-bar-bg {
  width: 100%;
  height: 3px;
  background: rgba(80, 92, 133, 0.3);
  border-radius: 4px;
  overflow: hidden;
}

.tool-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--primary-soft));
  border-radius: 4px;
  transition: width 0.8s ease;
}

.experience {
  padding: 56px 0 72px;
}

.section-sub {
  margin-top: 12px;
}

.exp-container {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.exp-row {
  display: grid;
  grid-template-columns: 240px 1fr;
  align-items: stretch;
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(170deg, #161a2c, #121727);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.exp-row:hover {
  transform: translateY(-5px);
  border-color: rgba(80, 92, 133, 0.6);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

.exp-photo-wrap {
  overflow: hidden;
}

.exp-photo {
  width: 100%;
  height: 100%;
  min-height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.exp-row:hover .exp-photo {
  transform: scale(1.05);
}

.exp-photo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background: linear-gradient(135deg, #1a1f35, #151a2c);
  color: var(--text-soft);
  opacity: 0.4;
}

.exp-card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.exp-year {
  color: var(--primary-soft);
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.exp-year::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

.exp-title {
  font-size: 1.15rem;
  line-height: 1.4;
}

.exp-place {
  color: var(--accent-soft);
  font-size: 0.9rem;
  margin-top: 6px;
}

.exp-desc {
  color: var(--text-soft);
  margin-top: 12px;
  line-height: 1.7;
  font-size: 0.92rem;
}

@media (max-width: 920px) {
  .about-container {
    grid-template-columns: 1fr;
  }

  .exp-row {
    grid-template-columns: 1fr;
  }

  .exp-photo,
  .exp-photo-placeholder {
    width: 100%;
    height: 200px;
  }
}

@media (max-width: 640px) {
  .tool-item {
    min-width: 85px;
    padding: 10px 12px;
  }

  .exp-card {
    padding: 20px;
  }
}
</style>
