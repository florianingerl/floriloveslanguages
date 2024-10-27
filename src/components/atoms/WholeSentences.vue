<template>

<div v-for="(sentence,index) in sentences2">
<p>{{index+1}}.{{sentence.task}}</p>
<p><Input :disabled="validated" style="display:block;width:100%" v-model="sentence.guess" type="text" :class="{ correct: validated && sentence.guess == sentence.solution, notcorrect: validated && sentence.guess != sentence.solution }"/></p>
</div>

<p v-if="lg==='fr'">
<Button @click="validateSolutionClicked">Valider</Button>
<Button @click="showSolutionClicked">Montre-moi la solution!</Button>
</p>
<p v-if="lg==='en'">
<Button @click="validateSolutionClicked">Validate my answer</Button>
<Button @click="showSolutionClicked">Show solution</Button>
</p>
<p v-if="lg==='de'">
<Button @click="validateSolutionClicked">Meine Lösung prüfen</Button>
<Button @click="showSolutionClicked">Lösung zeigen</Button>
</p>



    
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";
import type { PropType } from "vue";
import type { TaskSolution } from "../../types/TaskSolution.ts";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


export default defineComponent( {
  name: "VueWholeSentence",
  components: {
    Button, Input
  },
  props : {
    lg: {
      type: String,
      required: true
    },
    sentences: {
      required: true,
      type: Array as PropType<TaskSolution[]>
    }
  },

  mounted(){
     console.log("The setup function is executed!");
     this.sentences2 = this.sentences;
     
  },
  setup(){
   console.log("The setup function is executed!");
   const validated = ref<boolean>(false);
   const sentences2 = ref<TaskSolution[]>([]);
   return { validated, sentences2 };
  },
  
  methods: {
    validateSolutionClicked(){
        console.log("The button was clicked!");
        this.validated = true;
    },
    showSolutionClicked(){
        console.log("Button show solution was clicked!");
        this.validated = true;
        this.sentences2.forEach( (sentence: TaskSolution) => {
            sentence.guess = sentence.solution;
        });
    }
  }
});
</script>

<style scoped>

.correct {
    color: green;
    border-color: green;
}

.notcorrect {
    color: red;
    border-color: red;
}


</style>