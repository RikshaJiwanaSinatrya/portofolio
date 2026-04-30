<template>
  <header class="nav-wrap" :class="{ 'nav-hidden': !showNav, 'nav-scrolled': isScrolled }">
    <nav class="navbar section-shell">
      <router-link class="logo" to="/" @click="closeMenu">
        <span class="logo-try">TRYA</span><span class="logo-dot">.</span>
      </router-link>

      <button
        class="menu-btn"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="site-nav"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <span class="menu-btn-line"></span>
        <span class="menu-btn-line"></span>
        <span class="menu-btn-line"></span>
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
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const showNav = ref(true);
const isScrolled = ref(false);
const lastScrollY = ref(0);

const closeMenu = () => {
  isOpen.value = false;
};

const handleScroll = () => {
  const currentY = window.scrollY;
  isScrolled.value = currentY > 50;
  showNav.value = currentY < lastScrollY.value || currentY < 100;
  lastScrollY.value = currentY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(9, 10, 15, 0.7);
  border-bottom: 1px solid rgba(63, 74, 107, 0.15);
  transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
}

.nav-wrap.nav-hidden {
  transform: translateY(-100%);
}

.nav-wrap.nav-scrolled {
  background: rgba(9, 10, 15, 0.92);
  border-bottom-color: rgba(63, 74, 107, 0.35);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
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
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.02);
}

.logo-try {
  position: relative;
}

.logo-dot {
  color: var(--primary);
  transition: transform 0.3s ease;
  display: inline-block;
}

.logo:hover .logo-dot {
  transform: scale(1.3);
}

.menu-btn {
  display: none;
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  transition: transform 0.2s ease;
}

.menu-btn:hover {
  transform: scale(1.1);
}

.menu-btn-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.menu-btn[aria-expanded="true"] .menu-btn-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-btn[aria-expanded="true"] .menu-btn-line:nth-child(2) {
  opacity: 0;
}

.menu-btn[aria-expanded="true"] .menu-btn-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-links a {
  color: var(--text-soft);
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 10px;
  transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
  transition: width 0.25s ease, left 0.25s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 60%;
  left: 20%;
}

.nav-links a:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
}

.nav-links a.router-link-active {
  color: var(--text);
}

@media (max-width: 760px) {
  .navbar {
    position: relative;
  }

  .menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
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
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .nav-links.open {
    display: flex;
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .nav-links a::after {
    display: none;
  }

  .nav-links a.router-link-active {
    background: rgba(255, 85, 51, 0.15);
  }
}
</style>
