<template>

<div>
<p v-if="lg==='de' || lg === 'en' && question2.questionEn == undefined || lg === 'fr' && question2.questionFr == undefined">
{{ question2.question }}
</p>
<p v-else-if="lg==='en'">
{{ question2.questionEn }}
</p>
<p v-else-if="lg==='fr'">
{{ question2.questionFr }}
</p>
<div v-for="option in getOptionsForLg()" :class="{correct : question2.correctlyAnswered != undefined && option.checked && option.correct, notcorrect : question2.correctlyAnswered != undefined && option.checked && !option.correct}">
<input :disabled="question2.correctlyAnswered != undefined" type="checkbox" v-model="option.checked"/>
<label>{{option.option}}</label>
</div>


<div v-if="lg==='en'" class="d-flex flex-row">
<button @click="validate">Validate</button>
<button @click="showSolution">Show solution</button>
<button v-if="hasNextButton">Next exercise</button>
</div>

<div v-else-if="lg==='fr'" class="d-flex flex-row">
<button @click="validate">Valider</button>
<button @click="showSolution">Montre-moi la solution</button>
<button v-if="hasNextButton">Prochain exercice</button>
</div>

<div v-else class="d-flex flex-row">
<button @click="validate">Aufgabe überprüfen</button>
<button @click="showSolution">Lösung anzeigen</button>
<button v-if="hasNextButton">Nächste Aufgabe</button>
</div>

</div>

</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineEmits, defineProps } from "vue";
import type { Languages } from "@/types/Languages.ts";
import type { Question, Option } from "@/types/Question.ts";


const props = defineProps<{
  hasNextButton? : boolean,
  lg: Languages,
  question: Question
}>();

const emit= defineEmits(["answeredEvent"])

const question2 = ref<Question>(props.question);

watch(props.question, (newQ: Question, oldQ : Question ) => { 
   oldQ;
   question2.value = newQ; 
});

function getOptionsForLg() : Array<Option> {
      if(props.lg==='de' || props.lg === 'en' && question2.value.optionsEn == undefined || props.lg === 'fr' && question2.value.optionsFr == undefined){
        console.log("question2.value.options is returned!");
        return question2.value.options as Array<Option>;
      }
      else if(props.lg === 'en'){
        return question2.value.optionsEn as Array<Option>;
      }
      else if(props.lg === 'fr'){
        return question2.value.optionsFr as Array<Option>;
      }
      else {
        return new Array<Option>(); //This case should never happens
      }
}
function validate(){
      console.log("The validate button was clicked!");
      if(question2.value.correctlyAnswered != undefined ) return;
      
      question2.value.correctlyAnswered = true;

      getOptionsForLg().forEach( (option: Option) => {
        if(option.checked == undefined ){
          option.checked = false;
        }
          console.log( "checked: " + option.checked + " correct: " + option.correct );
          if(option.checked != option.correct ){
            console.log("It thought that option.checked wasn't option.correct!");
            question2.value.correctlyAnswered = false;
          }
      });

      emit("answeredEvent");
}

function showSolution(){
      console.log("The show solution button was clicked!");
     
      getOptionsForLg().forEach( (option: Option) => { option.checked = option.correct; });
      if(question2.value.correctlyAnswered == undefined){
        question2.value.correctlyAnswered = false;
      }
}


onMounted( () => {
    console.log('Vue Question Component mounted');
    question2.value = props.question;

    if(!question2.value){
      question2.value = 
      {
		question: "Das ist eine Test-Frage aus Question.vue?",
		imageUrl: "assets/img/rawfood/brokolisalat.JPG",
		options: [{option:"Süßlupinen", correct: false },
     {option:"Brokoli", correct: false }, 
     {option:"Karotte", correct: false },
      {option:"Löwenzahn", correct: true },
       {option:"Weizen", correct: false }]
	    };
    }

    getOptionsForLg().forEach( (option:Option) => { option.checked = false; });
    
  });  

</script>

<style scoped>

.correct {
  background-color: #7bf27b
}

.notcorrect {
  background-color: #fc5c5c
}


#topcontainer {
  margin-bottom: 15px;
}
</style>