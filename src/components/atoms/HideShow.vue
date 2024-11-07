<template>

  <div v-if="lg === 'de'">
    <button v-if="show" @click="show = false;">Lösung abdecken</button>
    <button v-if="!show" @click="show = true;">Lösung zeigen</button>
    <slot v-if="show"> </slot>
  </div>
  <div v-else-if="lg === 'fr'">
    <button v-if="show" @click="show = false;">Couvrir solution</button>
    <button v-if="!show" @click="show = true;">Montre-moi la solution</button>
    <slot v-if="show"> </slot>
  </div>
  <div v-else>
    <button v-if="show" @click="show = false;">Hide solution</button>
    <button v-if="!show" @click="show = true;">Show solution</button>
    <slot v-if="show"> </slot>
  </div>



</template>

<script setup lang="ts">
import type {Languages} from "@/types/Languages.ts";
import { defineProps, ref } from "vue";

const props = defineProps<{
  lg: Languages
}>();

console.log( props.lg );

const show = ref( false );
</script>

<style scoped>

button:first-child {
  margin-bottom: 10px;
}

.mym-20 {
  margin-bottom: 10px;
}

</style>