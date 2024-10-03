<template>
<div class="nice">
<h2 v-if="lg==='fr'">Exercice</h2>
<h2 v-if="lg==='en'">Exercise</h2>
<h2 v-if="lg==='de'">Übung</h2>
<h4 class="instruction">{{instruction}}</h4>
<slot> </slot>
</div>

    
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
    }

  },

  mounted(){
     console.log("The setup function is executed!");
     
  },
  setup(){
   console.log("The setup function is executed!");
  },
  
  data() {
    return {
       
    };
  },
  methods: {
  
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



</style>