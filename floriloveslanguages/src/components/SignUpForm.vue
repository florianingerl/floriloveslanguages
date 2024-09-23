<script lang="ts">

import { ref, computed, defineComponent, PropType } from 'vue';
import Person from './../types/Person.ts';

export default defineComponent({
  // type inference enabled
  
  setup() {
    const person = ref<Person>( { name: "Hermann Ingerl", age : 80 });
    const checked = ref<Boolean>( false );

    return { person, checked };
  },
  
  mounted() {
    
  },
  methods : {
    
  }
})

</script>

<template>
  
  {{ person.name }} is {{ person.age }} years old.

  <form>
    <label for="name">Name:</label>
    <input type="text" v-model="person.name" />

    <div>
        <input type="checkbox" v-model="checked" required />
        <label>Accept terms and conditions</label>
    </div>
  </form>

  <p>
  The value of checked is {{ checked }} .
  </p>
  
</template>

<style scoped>

</style>
