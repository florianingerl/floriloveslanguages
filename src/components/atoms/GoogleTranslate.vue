<template>

  <div>
  <slot></slot>
  <i class="ms-2 bi bi-globe" data-bs-toggle="tooltip" :title="translateText()"></i>
  </div>



</template>

<script lang="ts">

import { defineComponent } from "vue";


export default defineComponent({
  name: "VueGoogleTranslate",
  components: {
    
  },
  props: {
   
  },

  mounted() {
    
  },
  setup() {
    
  },

  methods: {
    translateText() {
        return "Not yet implemented!";
        //let textToTranslate : string = this.$slots.default[0].text;
        //return textToTranslate;
        //Get the text content of slot and translate it with the google-translate-api
    }
  },

  data() {
    return {
     
    };
  }
});
</script>

<style scoped>

</style>