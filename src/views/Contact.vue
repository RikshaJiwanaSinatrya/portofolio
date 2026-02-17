<script setup>
import { reactive } from 'vue';

const targetEmail = 'sinatryariksha@gmail.com';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const sendToGmail = () => {
  const subject = form.subject || `Pesan dari ${form.name}`;
  const body = [
    `Nama: ${form.name}`,
    `Email: ${form.email}`,
    '',
    form.message,
  ].join('\n');

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailComposeUrl, '_blank', 'noopener');
};
</script>

<template>
  <section class="contact-hero section-shell">
    <p class="eyebrow">Let's Work Together</p>
    <h1 class="section-title">Contact</h1>
    <p class="section-sub intro">
      Punya ide project, kolaborasi, atau peluang internship? Kirim pesan dan saya
      akan balas secepat mungkin.
    </p>
  </section>

  <section class="contact-content section-shell">
    <div class="contact-cards">
      <article class="contact-card">
        <p class="label">Email</p>
        <h3>sinatryariksha@gmail.com</h3>
        <p class="meta">Respon biasanya dalam 24 jam.</p>
      </article>

      <article class="contact-card">
        <p class="label">Phone</p>
        <h3>+62 852-1109-9245</h3>
        <p class="meta">Tersedia pukul 09.00 - 17.00 WIB.</p>
      </article>

      <article class="contact-card">
        <p class="label">Location</p>
        <h3>Bandung, Indonesia</h3>
        <p class="meta">Open remote collaboration.</p>
      </article>
    </div>

    <form class="contact-form" @submit.prevent="sendToGmail">
      <div class="field-grid">
        <label>
          <span>Nama</span>
          <input v-model="form.name" type="text" placeholder="Nama lengkap" required />
        </label>

        <label>
          <span>Email</span>
          <input v-model="form.email" type="email" placeholder="nama@email.com" required />
        </label>
      </div>

      <label>
        <span>Subjek</span>
        <input
          v-model="form.subject"
          type="text"
          placeholder="Contoh: Kolaborasi website company profile"
        />
      </label>

      <label>
        <span>Pesan</span>
        <textarea
          v-model="form.message"
          rows="6"
          placeholder="Tulis detail kebutuhan project Anda..."
          required
        ></textarea>
      </label>

      <button type="submit">Send Message</button>
    </form>
  </section>
</template>

<style scoped>
.contact-hero {
  padding: 76px 0 22px;
}

.eyebrow {
  display: inline-block;
  padding: 7px 13px;
  border-radius: 999px;
  margin-bottom: 14px;
  color: #8fdaff;
  border: 1px solid rgba(124, 219, 255, 0.45);
  background: rgba(72, 149, 196, 0.14);
  font-size: 0.84rem;
}

.intro {
  margin-top: 12px;
  max-width: 60ch;
}

.contact-content {
  padding: 18px 0 64px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
}

.contact-cards {
  display: grid;
  gap: 14px;
}

.contact-card {
  background: linear-gradient(165deg, #171c2f, #111526);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
}

.label {
  color: var(--primary-soft);
  font-size: 0.82rem;
  margin-bottom: 8px;
}

.contact-card h3 {
  font-size: 1.02rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.meta {
  color: var(--text-soft);
  margin-top: 8px;
  font-size: 0.9rem;
}

.contact-form {
  background: linear-gradient(170deg, #171c2d, #121626);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px;
  display: grid;
  gap: 16px;
}

.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

label {
  display: grid;
  gap: 8px;
}

label span {
  font-size: 0.86rem;
  color: var(--text-soft);
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(12, 15, 25, 0.65);
  color: var(--text);
  font: inherit;
  padding: 12px 14px;
}

input::placeholder,
textarea::placeholder {
  color: #8e95b8;
}

input:focus,
textarea:focus {
  border-color: #4e86ff;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 140px;
}

button {
  justify-self: start;
  background: var(--primary);
  color: #fff;
  box-shadow: 0 10px 24px rgba(255, 85, 51, 0.3);
}

@media (max-width: 920px) {
  .contact-hero {
    padding-top: 60px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 16px;
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
    padding-bottom: 40px;
  }

  .contact-card {
    border-radius: 14px;
    padding: 16px;
  }

  .contact-form {
    border-radius: 14px;
    padding: 16px;
    gap: 14px;
  }

  input,
  textarea {
    font-size: 16px;
  }

  button {
    width: 100%;
    justify-self: stretch;
  }
}
</style>
