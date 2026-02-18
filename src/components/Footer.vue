<template>
  <footer class="footer">
    <div class="section-shell footer-container">
      <div class="footer-brand">
        <h2>TRYA<span>.</span></h2>
        <p>
          Frontend Developer portfolio yang dibangun dengan fokus pada clean interface,
          performa, dan kualitas implementasi.
        </p>
      </div>

      <div class="footer-links">
        <div class="column">
          <h4>Navigation</h4>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <div class="column">
          <h4>Contact</h4>
          <a href="mailto:sinatryariksha@gmail.com">Email</a>
          <a href="https://github.com/RikshaJiwanaSinatrya" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/riksha-jiwana-sinatrya-0a27a93a2/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      © 2026 Riksha Jiwana Sinatrya. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 70px;
  border-top: 1px solid rgba(70, 81, 116, 0.45);
  background: rgba(8, 10, 15, 0.75);
}

.footer-container {
  padding: 56px 0 40px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 36px;
}

.footer-brand h2 {
  font-size: 1.9rem;
}

.footer-brand span {
  color: var(--primary);
}

.footer-brand p {
  color: var(--text-soft);
  margin-top: 10px;
  line-height: 1.8;
  max-width: 530px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 22px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.column h4 {
  margin-bottom: 4px;
}

.column a {
  color: var(--text-soft);
  transition: color 0.2s ease;
}

.column a:hover {
  color: var(--text);
}

.footer-bottom {
  text-align: center;
  padding: 16px;
  font-size: 0.9rem;
  color: var(--text-soft);
  border-top: 1px solid rgba(70, 81, 116, 0.3);
}

@media (max-width: 820px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}
</style>
