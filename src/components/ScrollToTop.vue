<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <transition name="scroll-top">
    <button
      v-if="isVisible"
      class="scroll-to-top"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--card-elevated);
  border: 1px solid var(--border);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  z-index: 50;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  background: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 12px 32px rgba(255, 85, 51, 0.25);
}

.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}
</style>
