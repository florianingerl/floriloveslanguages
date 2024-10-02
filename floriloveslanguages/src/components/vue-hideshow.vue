<template>

<div v-if="lg==='de'">
<button v-if="show" @click="show=false;">Lösung abdecken</button>
<button v-if="!show" @click="show=true;">Lösung zeigen</button>
<slot v-if="show"> </slot>
</div>
<div v-if="lg==='fr'">
<button v-if="show" @click="show=false;">Couvrir solution</button>
<button v-if="!show" @click="show=true;">Montre-moi la solution</button>
<slot v-if="show"> </slot>
</div>
<div v-else>
<button v-if="show" @click="show=false;">Hide solution</button>
<button v-if="!show" @click="show=true;">Show solution</button>
<slot v-if="show"> </slot>
</div>


    
</template>

<script lang="ts">

import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Languages } from "./../types/Languages.ts";


export default defineComponent ({
  name: "VueHideShow",
  components: {
    
  },
  props: {
    lg: {
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
       show: false
    };
  }
});
</script>

<style scoped>




</style>