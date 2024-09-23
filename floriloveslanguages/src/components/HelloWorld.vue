<script lang="ts">

import { defineComponent, reactive, toRefs , ref } from 'vue';
import Person from './../types/Person.ts';
import PersonList from './PersonList.vue';
import Stupid from './Stupid.vue';
import SignUpForm from './SignUpForm.vue';

export default defineComponent({
  //components: { PersonList },
  components: { Stupid, PersonList, SignUpForm }, 
  // type inference enabled
  props: {
    msg: String
  },
  setup() {
    /*
    const state = reactive({
       count : 1
    });
    return {...toRefs(state)}; */

    const persons = ref<Person[]>([
      {
          name: 'Alfred',
          age: 25
      },
      {
        name: 'David',
        age: 36
      },
      {
        name: 'Kevin',
        age: 4
      },
      {
        name: 'Brigitte',
        age: 100
      },
    ]);

    var count = ref<number>(30);

    const handleClick = (x: number) => {
      console.log("The handleClick function was called!" );
      console.log(count);
      console.log("x=" + x);
      count += x;
    };
    return { count, persons, handleClick };
  },
  
  mounted() {
    
  },
  methods : {
    increaseCount(){
      this.count += 5;
    },
    increaseCountBy(x: number){
      this.count += x;
    }
  }
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1> {{ count }} </h1>

<h2>Persons sorted by age </h2>
  <PersonList :persons="persons" order="age" />

  <h2>Persons sorted by name </h2>
  <PersonList :persons="persons" order="name" />

  <Stupid />

  <button @click="increaseCount" > Please click me to increase the count by 5 </button>

  <button @click="increaseCountBy(6)" > Please click me to increase the count by 6 </button>
  <button @click="increaseCountBy(10)" > Please click me to increase the count by 10 </button>

  <button @click="increaseCountBy('Hello World')" > Please click me to increase the count by 10 </button>

  <ul>
<li v-for="person in persons">
  {{ person.name }} is {{ person.age }} years old.
</li>
  </ul>

  <button @click="handleClick(100)" > Increase count by 100 </button>
  <button @click="handleClick(1000)"> Increase count by 1000 </button>
  <button @click="handleClick('Florian')"> Increase count by 1000 </button>

  <SignUpForm />
  
</template>

<style scoped>
</style>
