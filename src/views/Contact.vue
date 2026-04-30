<script setup>
import { reactive, ref } from 'vue';
import { useScrollAnimation } from '../composables/useScrollAnimation';

useScrollAnimation();

const targetEmail = 'sinatryariksha@gmail.com';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const formFocused = ref(false);

const sendToGmail = () => {
  isSubmitting.value = true;
  
  setTimeout(() => {
    const subject = form.subject || `Pesan dari ${form.name}`;
    const body = [
      `Nama: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n');

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailComposeUrl, '_blank', 'noopener');
    isSubmitting.value = false;
  }, 600);
};

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/RikshaJiwanaSinatrya', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/riksha-jiwana-sinatrya-0a27a93a2/', icon: 'linkedin' },
];
</script>

<template>
  <div>
    <section class="contact-hero section-shell">
      <p class="eyebrow" data-animate>Let's Work Together</p>
      <h1 class="section-title" data-animate>
        <span class="gradient-text">Get in Touch</span>
      </h1>
      <p class="section-sub intro" data-animate>
        Punya ide project, kolaborasi, atau peluang internship? Kirim pesan dan saya
        akan balas secepat mungkin.
      </p>
    </section>

    <section class="contact-content section-shell">
      <div class="contact-info" data-animate="fade-left">
        <div class="contact-cards">
          <article class="contact-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <p class="label">Email</p>
            <h3>sinatryariksha@gmail.com</h3>
            <p class="meta">Respon biasanya dalam 24 jam.</p>
          </article>

          <article class="contact-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <p class="label">Phone</p>
            <h3>+62 852-1109-9245</h3>
            <p class="meta">Tersedia pukul 09.00 - 17.00 WIB.</p>
          </article>

          <article class="contact-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <p class="label">Location</p>
            <h3>Bandung, Indonesia</h3>
            <p class="meta">Open remote collaboration.</p>
          </article>
        </div>

        <div class="social-links">
          <p class="social-label">Connect with me</p>
          <div class="social-icons">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="social-icon" :aria-label="social.name">
              <svg v-if="social.icon === 'github'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.953-1.043.903 1.328 2.228 2.375 3.742 2.963.383-.333.726-.793 1.073-1.338 3.429-.129 7.062.328 9.263 2.676.237-.64.374-1.334.374-2.068 0-2.546-2.197-4.61-4.874-4.61-.78 0-1.533.09-2.251.263-.195-.57-.634-1.144-1.223-1.535-2.124-.243-4.388.09-5.314 1.156-1.189.346-2.505.674-3.635.893zm10.283 17.697c-.177.583-.813.93-1.422.774-.61-.155-.966-.752-.788-1.335.177-.582.813-.93 1.422-.774.61.156.966.753.788 1.335z"/></svg>
              <svg v-else-if="social.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>{{ social.name }}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="contact-form-wrap" data-animate="fade-right">
        <form class="contact-form" @submit.prevent="sendToGmail" @focusin="formFocused = true" @focusout="formFocused = false">
          <div class="field-grid">
            <label class="field">
              <span>Nama</span>
              <input v-model="form.name" type="text" placeholder="Nama lengkap" required />
            </label>

            <label class="field">
              <span>Email</span>
              <input v-model="form.email" type="email" placeholder="nama@email.com" required />
            </label>
          </div>

          <label class="field">
            <span>Subjek</span>
            <input
              v-model="form.subject"
              type="text"
              placeholder="Contoh: Kolaborasi website company profile"
            />
          </label>

          <label class="field">
            <span>Pesan</span>
            <textarea
              v-model="form.message"
              rows="6"
              placeholder="Tulis detail kebutuhan project Anda..."
              required
            ></textarea>
          </label>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting" class="btn-content">
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </span>
            <span v-else class="btn-loading">
              <span class="spinner"></span>
              Sending...
            </span>
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-hero {
  padding: 76px 0 22px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
  color: var(--accent-soft);
  border: 1px solid rgba(124, 219, 255, 0.35);
  background: rgba(72, 149, 196, 0.1);
  font-size: 0.84rem;
}

.gradient-text {
  background: linear-gradient(135deg, var(--text) 0%, var(--primary-soft) 50%, var(--accent) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer-text 4s ease-in-out infinite;
}

@keyframes shimmer-text {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

.intro {
  margin-top: 14px;
  max-width: 60ch;
}

.contact-content {
  padding: 24px 0 72px;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 28px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-cards {
  display: grid;
  gap: 14px;
}

.contact-card {
  background: linear-gradient(165deg, #171c2f, #111526);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 22px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-card:hover {
  transform: translateX(6px);
  border-color: rgba(80, 92, 133, 0.5);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 85, 51, 0.1);
  color: var(--primary-soft);
  margin-bottom: 14px;
}

.label {
  color: var(--primary-soft);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.contact-card h3 {
  font-size: 1rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.meta {
  color: var(--text-soft);
  margin-top: 8px;
  font-size: 0.86rem;
}

.social-links {
  margin-top: 8px;
}

.social-label {
  font-size: 0.84rem;
  color: var(--text-soft);
  margin-bottom: 12px;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  background: rgba(18, 23, 39, 0.6);
  border: 1px solid var(--border);
  color: var(--text-soft);
  font-size: 0.84rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.social-icon:hover {
  color: var(--text);
  background: rgba(255, 85, 51, 0.1);
  border-color: rgba(255, 85, 51, 0.3);
  transform: translateY(-2px);
}

.contact-form-wrap {
  position: relative;
}

.contact-form {
  background: linear-gradient(170deg, #171c2d, #121626);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 28px;
  display: grid;
  gap: 18px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-form-wrap:focus-within .contact-form {
  border-color: rgba(255, 85, 51, 0.3);
  box-shadow: 0 0 40px rgba(255, 85, 51, 0.05);
}

.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.field {
  display: grid;
  gap: 8px;
}

.field span {
  font-size: 0.84rem;
  color: var(--text-soft);
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(12, 15, 25, 0.6);
  color: var(--text);
  font: inherit;
  padding: 13px 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

input::placeholder,
textarea::placeholder {
  color: #6b7194;
}

input:focus,
textarea:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 85, 51, 0.1);
  background: rgba(12, 15, 25, 0.8);
}

textarea {
  resize: vertical;
  min-height: 140px;
}

.submit-btn {
  justify-self: start;
  background: var(--primary);
  color: #fff;
  box-shadow: 0 10px 24px rgba(255, 85, 51, 0.25);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  min-width: 180px;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(255, 85, 51, 0.35);
}

.submit-btn:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

.btn-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-loading {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 920px) {
  .contact-hero {
    padding-top: 60px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-hero {
    padding: 48px 0 14px;
  }

  .eyebrow {
    margin-bottom: 10px;
    padding: 6px 12px;
    font-size: 0.78rem;
  }

  .intro {
    margin-top: 8px;
  }

  .contact-content {
    padding-bottom: 48px;
  }

  .contact-card {
    border-radius: 14px;
    padding: 18px;
  }

  .contact-form {
    border-radius: 16px;
    padding: 20px;
    gap: 16px;
  }

  input,
  textarea {
    font-size: 16px;
    padding: 12px 14px;
  }

  .submit-btn {
    width: 100%;
    justify-self: stretch;
  }

  .social-icons {
    flex-direction: column;
  }
}
</style>
