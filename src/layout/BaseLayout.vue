<template>
    <AMenuBar />
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AMenuBar from '@/components/atoms/nav/AMenuBar.vue'
</script>