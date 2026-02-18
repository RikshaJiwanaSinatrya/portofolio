<script setup>
import expWebDev from "../assets/image/WhatsApp Image 2026-01-08 at 12.24.57 PM.jpeg";
import expUiUx from "../assets/image/Fuse 2025-Riksha Jiwana Sinatrya (Juara 1 - UI-UX SMA-SMK)_page-0001.jpg"
import expPortfolio from "../assets/image/WhatsApp Image 2026-01-08 at 12.47.53 PM.jpeg";
</script>

<template>
  <section class="about section-shell">
    <div class="about-container">
      <div class="about-text">
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

      <div class="about-side">
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
        <div class="toolkit-card">
          <h3>Toolkit</h3>
          <div class="toolkit-list">
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML logo" loading="lazy" />
              HTML
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=css" alt="CSS logo" loading="lazy" />
              CSS
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=js" alt="JavaScript logo" loading="lazy" />
              JS
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=linux" alt="Linux logo" loading="lazy" />
              Linux
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=vue" alt="Vue logo" loading="lazy" />
              Vue
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=figma" alt="Figma logo" loading="lazy" />
              Figma
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=git" alt="Git logo" loading="lazy" />
              Git
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub logo" loading="lazy" />
              GitHub
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS logo" loading="lazy" />
              Tailwind
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=ubuntu" alt="Ubuntu logo" loading="lazy" />
              Ubuntu
            </span>
            <span class="tool-item">
              <img src="https://skillicons.dev/icons?i=arch" alt="Arch Linux logo" loading="lazy" />
              Arch
            </span>
          </div>
        </div>
      
    
  </section>

  <section class="experience section-shell">
    <h2 class="section-title">Experience</h2>
    <p class="section-sub">
      Pengalaman yang membentuk pendekatan saya dalam menggabungkan visual, usability, dan performa.
    </p>

    <div class="exp-container">
      <article class="exp-row">
        <img class="exp-photo" :src="expUiUx" alt="UI UX competition winner" />
        <div class="exp-card">
          <p class="exp-year">2024</p>
          <h3 class="exp-title">Juara 1 UI/UX Fuse Politeknik Manufaktur Bandung</h3>
          <p class="exp-place">Fuse Competition</p>
          <p class="exp-desc">
            Mendesain prototype aplikasi mobile dengan alur onboarding ringkas, visual konsisten, dan fokus usability.
          </p>
        </div>
      </article>

      <article class="exp-row">
        <img class="exp-photo" alt="Web developer project" />
        <div class="exp-card">
          <p class="exp-year">2024 - Sekarang</p>
          <h3 class="exp-title">Web Developer Student Project</h3>
          <p class="exp-place">Self Initiated</p>
          <p class="exp-desc">
            Mengembangkan website responsif menggunakan Vue dan CSS modern dengan fokus pada komponen reusable.
          </p>
        </div>
      </article>

      
      <article class="exp-row">
        <img class="exp-photo"  alt="Frontend portfolio development" />
        <div class="exp-card">
          <p class="exp-year">2023 - 2025</p>
          <h3 class="exp-title">Frontend Portfolio Development</h3>
          <p class="exp-place">Personal Branding Project</p>
          <p class="exp-desc">
            Membangun portfolio end-to-end dari riset konten, struktur layout, hingga implementasi interaksi yang halus.
          </p>
        </div>
      </article>

      <article class="exp-row">
        <img class="exp-photo" :src="expWebDev" alt="Frontend portfolio development" />
        <div class="exp-card">
          <p class="exp-year">2025</p>
          <h3 class="exp-title">Teater Jumat Sore</h3>
          <p class="exp-place">Teater</p>
          <p class="exp-desc">
            Berperan dalam produksi pertunjukan teater mulai dari latihan rutin, eksplorasi karakter, hingga tampil di panggung, sekaligus mengasah komunikasi, kerja tim, dan kepercayaan diri.
          </p>
        </div>
      </article>
    </div>
  </section>
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
}

.stat span {
  color: var(--text-soft);
  font-size: 0.94rem;
}

.toolkit-card {
  background: linear-gradient(165deg, #151b2f, #0f1424);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-top: 40px;
}

.toolkit-card h3 {
  font-size: 1.05rem;
  margin-bottom: 12px;
}

.toolkit-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tool-item {
  padding: 15px 20px;
  border-radius: 999px;
  border: 1px solid rgba(80, 92, 133, 0.48);
  background: rgba(18, 23, 39, 0.7);
  color: var(--text-soft);
  font-size: 0.86rem;
  display: inline-flex;
  align-items: center;
  gap: 15px;
}

.tool-item img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.experience {
  padding: 44px 0 60px;
}

.section-sub {
  margin-top: 10px;
}

.exp-container {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.exp-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  align-items: stretch;
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(170deg, #161a2c, #121727);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.exp-row:hover {
  transform: translateY(-4px);
  border-color: #49547d;
}

.exp-photo {
  width: 100%;
  height: 100%;
  min-height: 190px;
  object-fit: cover;
}

.exp-card {
  padding: 24px;
}

.exp-year {
  color: #ffb7a9;
  font-size: 0.82rem;
  margin-bottom: 8px;
}

.exp-title {
  font-size: 1.14rem;
  line-height: 1.4;
}

.exp-place {
  color: var(--primary-soft);
  font-size: 0.92rem;
  margin-top: 4px;
}

.exp-desc {
  color: var(--text-soft);
  margin-top: 10px;
  line-height: 1.7;
}

@media (max-width: 920px) {
  .about-container {
    grid-template-columns: 1fr;
  }

  .exp-row {
    grid-template-columns: 1fr;
  }

  .exp-photo {
    width: 100%;
    height: 220px;
  }
}
</style>
