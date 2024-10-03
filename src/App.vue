<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ONavBarMenu from '@/components/organisms/ONavBarMenu.vue';
</script>

<template>
  <ONavBarMenu />
  <hr>
  <main>
    <RouterView />
  </main>
  <footer>
    <hr>
    Footer
  </footer>
</template>

<style scoped></style>
