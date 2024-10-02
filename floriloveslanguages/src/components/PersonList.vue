<script lang="ts">

import { computed, defineComponent } from 'vue';
import type { PropType } from "vue";
import type { Person } from './../types/Person.ts';

export default defineComponent({
  // type inference enabled
  props: {
    persons : {

        required: true,
        type: Array as PropType<Person[]>
    },
    order : {
        required: true,
        type: String as PropType<keyof Person>
    }
  },
  setup(props) {
    const personsWithFerdi = computed( () => {
        let amen = [...props.persons];
        amen.push({ name: 'Ferdinand', age: 400} );
        return amen;
    });

    const orderedPersons = computed( () => {
        let amen = [...props.persons];
        amen.sort( (a: Person, b: Person) => {
            return a[props.order] > b[props.order] ? 1 : -1;
        } );
        return amen;
    });

    return { personsWithFerdi, orderedPersons };
  },
  
  mounted() {
    
  },
  methods : {
    
  }
})

</script>

<template>
  
  <ul>
<li v-for="person in orderedPersons">
  {{ person.name }} is {{ person.age }} years old.
</li>
  </ul>
  
</template>

<style scoped>

</style>
