<template>
<div class="nice">
<h2 v-if="lg==='fr'">Exercice</h2>
<h2 v-if="lg==='en'">Exercise</h2>
<h2 v-if="lg==='de'">Übung</h2>
<h4 class="instruction">{{instruction}}</h4>
<p v-if="topics !== undefined" class="topics">
Topics:
<div v-for="topic in topics" style="display: inline;">
<span  class="topic">{{ topic }} </span>
<button class="ms-2" @click="google(topic)">Google</button>
</div>
</p>

<slot> </slot>
</div>

    
</template>

<script setup lang="ts">
import { defineProps, inject } from "vue";
import type { Languages } from "@/types/Languages.ts";
const props = defineProps<{
  instruction : string,
  lg: Languages,
  topics?: string[]
}>();
props.instruction
props.lg
props.topics

const window = inject("window") as any;

function google(topic: string){
  let baseUrl = "https://www.google.com/search?q=";
  window.open(baseUrl + topic, "_blank").focus();        
}

</script>


<style scoped>

.nice {
  padding: 10px;
  border: solid 2px blue;
  background-color: #ccffff;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 30px;
}

.instruction {
  background-color: yellow;
  color: black;
}

.topic {
  color: orange;
}



</style>