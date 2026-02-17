<template>
  <header class="nav-wrap">
    <nav class="navbar section-shell">
      <router-link class="logo" to="/">TRYA<span>.</span></router-link>

      <button
        class="menu-btn"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="site-nav"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        Menu
      </button>

      <ul id="site-nav" class="nav-links" :class="{ open: isOpen }">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.nav-wrap {
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(63, 74, 107, 0.35);
}

.navbar {
  min-height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.65rem;
  letter-spacing: 0.06em;
  font-weight: 800;
}

.logo span {
  color: var(--primary);
}

.menu-btn {
  display: none;
  background: var(--card-elevated);
  color: var(--text);
  border: 1px solid var(--border);
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  
}

.nav-links a {
  color: var(--text-soft);
  font-weight: 500;
  padding: 8px 13px;
  border-radius: 10px;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.08);
}

.nav-links a.router-link-active {
  background: rgba(255, 85, 51, 0.2);
}

@media (max-width: 760px) {
  .navbar {
    position: relative;
  }

  .menu-btn {
    display: inline-flex;
    align-items: center;
    padding: 9px 14px;
  }

  .nav-links {
    position: absolute;
    right: 4%;
    top: 82px;
    width: min(280px, 92vw);
    background: #121624;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: var(--shadow);
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
