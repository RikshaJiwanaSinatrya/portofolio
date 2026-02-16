<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import './assets/main.css'
</script>

<template>
  <div class="app-shell">
    <Navbar />
    <main class="app-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}

.app-content {
  min-height: calc(100vh - 200px);
}
</style>
