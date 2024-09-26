<script lang="ts">

import { ref, computed, defineComponent } from 'vue';
import type { PropType } from "vue";
import type {Person} from './../types/Person.ts';

export default defineComponent({
  // type inference enabled
  
  setup() {
    const person = ref<Person>( { name: "Hermann Ingerl", age : 80 });
    const checked = ref<Boolean>( false );

    const skills = ref<String[]>(["Informatik", "Mathe"]);
    const tempSkill = ref<String>("Religion");

    return { person, checked , skills, tempSkill };
  },
  
  mounted() {
    
  },
  methods : {
    addSkill(){
        console.log("Add skill function called!");
        this.skills.push(this.tempSkill);
        console.log("Add skill function finished!");
    },

    deleteSkill(skill : String) {
        console.log("The delete functionw was called!");
        this.skills = this.skills.filter ( (item:String) => { return item != skill; });
        console.log("skill=" + skill );
    }
  }
})

</script>

<template>
  
  {{ person.name }} is {{ person.age }} years old.

  <div>
    <label for="name">Name:</label>
    <input type="text" v-model="person.name" />

    <div>
        <input type="checkbox" v-model="checked" />
        <label>Accept terms and conditions</label>
    </div>

    <div>
    <label for="tempSkill">Temp skill:</label>
    <input type="text" v-model="tempSkill" @keyUp="addSkill"/>
    <button @click="addSkill">Add skill</button>
  
<ol>
<li v-for="skill in skills">
<div @click="deleteSkill(skill)">{{ skill }}</div>
</li>
</ol>
    </div>

    
  <p>
  The value of checked is {{ checked }} .
  </p>
  </div>

  
</template>

<style scoped>

</style>
