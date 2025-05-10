<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="pt-14">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
