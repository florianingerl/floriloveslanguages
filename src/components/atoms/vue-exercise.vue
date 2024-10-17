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
<button @click="google(topic)">Google</button>
</div>
</p>

<slot> </slot>
</div>

    
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import type { PropType } from "vue";
import type { Languages } from "../../types/Languages.ts";

export default defineComponent ({
  name: "VueExercise",
  components: {
    
  },
  props: {
    instruction : {
      required: true,
      type: String
    },
    lg : {
      required: true,
      type: String as PropType<Languages>
    },
    topics: {
      required: false,
      type: Array as PropType<string[]>
    }

  },

 setup(){
    const window = inject("window") as any;

    return {  window };
  },

  mounted(){
     console.log("The setup function is executed!");
     
  },

  methods: {
     google(topic: string){
        let baseUrl = "https://www.google.com/search?q=";
        this.window.open(baseUrl + topic, "_blank").focus();
        
     }

  }
});
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