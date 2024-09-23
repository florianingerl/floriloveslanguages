<script lang="ts">

import { ref, computed, defineComponent, PropType } from 'vue';
import Person from './../types/Person.ts';

export default defineComponent({
  // type inference enabled
  
  setup() {
    const person = ref<Person>( { name: "Hermann Ingerl", age : 80 });

    return { person };
  },
  
  mounted() {
    
  },
  methods : {
    
  }
})

</script>

<template>
  
  {{ person.name }} is {{ person.age }} years old.
  
</template>

<style scoped>

</style>
