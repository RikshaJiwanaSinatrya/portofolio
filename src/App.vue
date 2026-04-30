<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';
import './assets/main.css';
</script>

<template>
  <div class="app-shell">
    <Navbar />
    <main class="app-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  padding-top: 0;
}

.app-content {
  min-height: calc(100vh - 200px);
  padding-top: 0;
}
</style>
