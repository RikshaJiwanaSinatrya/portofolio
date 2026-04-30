<template>
  <footer class="footer">
    <div class="section-shell footer-container">
      <div class="footer-brand">
        <h2><span class="brand-try">TRYA</span><span class="brand-dot">.</span></h2>
        <p>
          Frontend Developer portfolio yang dibangun dengan fokus pada clean interface,
          performa, dan kualitas implementasi.
        </p>
        <div class="footer-socials">
          <a href="https://github.com/RikshaJiwanaSinatrya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.953-1.043.903 1.328 2.228 2.375 3.742 2.963.383-.333.726-.793 1.073-1.338 3.429-.129 7.062.328 9.263 2.676.237-.64.374-1.334.374-2.068 0-2.546-2.197-4.61-4.874-4.61-.78 0-1.533.09-2.251.263-.195-.57-.634-1.144-1.223-1.535-2.124-.243-4.388.09-5.314 1.156-1.189.346-2.505.674-3.635.893zm10.283 17.697c-.177.583-.813.93-1.422.774-.61-.155-.966-.752-.788-1.335.177-.582.813-.93 1.422-.774.61.156.966.753.788 1.335z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/riksha-jiwana-sinatrya-0a27a93a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:sinatryariksha@gmail.com" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>
        </div>
      </div>

      <div class="footer-links">
        <div class="column">
          <h4>Navigation</h4>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="column">
          <h4>Contact</h4>
          <a href="mailto:sinatryariksha@gmail.com">Email</a>
          <a href="https://github.com/RikshaJiwanaSinatrya" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/riksha-jiwana-sinatrya-0a27a93a2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Riksha Jiwana Sinatrya. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 70px;
  border-top: 1px solid rgba(70, 81, 116, 0.35);
  background: rgba(8, 10, 15, 0.8);
  backdrop-filter: blur(8px);
}

.footer-container {
  padding: 56px 0 40px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 36px;
}

.footer-brand h2 {
  font-size: 1.9rem;
  display: flex;
  align-items: center;
}

.brand-try {
  font-weight: 800;
  letter-spacing: 0.06em;
}

.brand-dot {
  color: var(--primary);
  font-weight: 800;
}

.footer-brand p {
  color: var(--text-soft);
  margin-top: 12px;
  line-height: 1.8;
  max-width: 480px;
}

.footer-socials {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.footer-socials a {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(18, 23, 39, 0.6);
  border: 1px solid var(--border);
  color: var(--text-soft);
  transition: all 0.2s ease;
}

.footer-socials a:hover {
  color: var(--text);
  background: rgba(255, 85, 51, 0.12);
  border-color: rgba(255, 85, 51, 0.3);
  transform: translateY(-3px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 24px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.column h4 {
  margin-bottom: 6px;
  font-size: 0.9rem;
  color: var(--text);
}

.column a {
  color: var(--text-soft);
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.column a:hover {
  color: var(--text);
  transform: translateX(4px);
}

.footer-bottom {
  text-align: center;
  padding: 18px;
  font-size: 0.86rem;
  color: var(--text-soft);
  border-top: 1px solid rgba(70, 81, 116, 0.25);
}

@media (max-width: 820px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 40px 0 28px;
  }

  .footer-links {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>
