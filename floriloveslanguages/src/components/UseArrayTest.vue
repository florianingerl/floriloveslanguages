<script lang="ts">

import { ref, defineComponent } from 'vue';
import type { PropType } from "vue";
import type { TaskSolution } from "./../types/TaskSolution.ts";

export default defineComponent({
  // type inference enabled
  props: {
    sentences : {
        required: true,
        type: Array as PropType<TaskSolution[]>
    },
  },
  setup(props) {
    const sentences2 = ref<TaskSolution[]>(props.sentences);
    return { sentences2 };
  },

  methods : {
     deleteSentence(i: number, sentence : TaskSolution) {
        console.log("Delete is executed!");
        if(i==1){
            //this.sentences = this.sentences.filter( (item: TaskSolution) => item !== sentence ); //Can't assign to read-only property
        }
        else if(i==2){
            this.sentences2 = this.sentences2.filter( (item: TaskSolution) => item !== sentence );
        }
     }
  }
})

</script>

<template>

<h1>sentences array</h1>
  
  <ul>
<li v-for="sentence in sentences">
  Task: {{ sentence.task }} Solution: {{ sentence.solution }} <button @click="deleteSentence(1,sentence)">Delete</button>
</li>
  </ul>
  
<h1>sentences2 array</h1>
 <ul>
<li v-for="sentence in sentences2">
  Task: {{ sentence.task }} Solution: {{ sentence.solution }} <button @click="deleteSentence(2,sentence)">Delete</button>
</li>
  </ul>

</template>

<style scoped>

</style>
