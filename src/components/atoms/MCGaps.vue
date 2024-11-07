<template>
<div>

<ol style="list-style-type: none">
<li v-for="innergaps in gaps">
<span v-for="gap in innergaps" >
  {{ gap.text }} 
  
  <select :disabled="validated" v-if="gap.options" :class="{ notcorrect: validated && gap.guess != gap.solution, correct: validated && gap.guess === gap.solution }" v-model="gap.guess">
    <option v-for="op in gap.options">{{ op }}</option>
  </select> 

  <input v-if="!validated && gap.gap" :style="{ width: ( gap.gap.length + 2 ) + 'ch' }" type="text" v-model="gap.guess"> </input>
  <span v-if="validated && gap.gap"  :class="{ notcorrect: validated && gap.guess != gap.solution, correct: validated && gap.guess === gap.solution }">{{ gap.guess }} </span>
  <span v-if="validated && gap.gap && gap.solution != gap.guess" class="correct">{{ gap.solution }} </span>
  <span v-if="validated && gap.options && gap.guess != gap.solution" class="correct"> {{ gap.solution }} </span>

  </span>
</li>
</ol>


<p v-if="lg==='fr'">
<button @click="buttonValidateClicked">Valider ma solution</button>
<button @click="showSolutionClicked">Montre-moi la solution</button>
</p>
<p v-if="lg==='en'">
<button @click="buttonValidateClicked">Validate</button>
<button @click="showSolutionClicked">Show me the solution</button>
</p>
<p v-if="lg==='de'">
<button @click="buttonValidateClicked">Meine Lösung prüfen</button>
<button @click="showSolutionClicked">Lösung zeigen</button>
</p>


</div>

    
</template>

<script setup lang="ts">
import type { Languages } from "@/types/Languages.ts";
import type { Gap } from "@/types/Gap.ts";
import { ref, onMounted } from "vue";

const props = defineProps<{
  lg: Languages,
  gaptext?: string,
  gaptexts?: string[],
  same?: boolean,
  numbering?: boolean

}>();

const gaps = ref<Array<Array<Gap>>>([]);
const validated = ref<boolean>(false);

function buttonValidateClicked(){
        validated.value = true;
        console.log("The button validated was clicked!");
}

function showSolutionClicked(){
        validated.value = true;
        gaps.value.forEach( (innergaps: Array<Gap>) => {
          innergaps.forEach( (gap:Gap) => {
             gap.guess = gap.solution;
             } );
          
        } );
}

function shuffle<T>(array: Array<T>){
      if(props.same){
        return array;
      }
      let newarray = [...array];
      newarray.sort( (_a: T,_b:T) => 0.5 - Math.random() );
      return newarray;
}

function parseGapTexts(gaptexts: string[] ){
      console.log("parseGapTexts called!");
        gaptexts.forEach( (gaptext:string) => {
           console.log(gaptext + " is now parsed!");
           parseGapText(gaptext);
        } );
}

function parseGapText(data: string ){
      if(!data.endsWith("}")){
        data += "{}";
      }
      let gapsl : Gap[] = [];
      let i = 0;
      while (true){
        let gap : Gap = {text: "", solution: "", guess: ""};
        let j = data.indexOf("{",i);
        if(j == -1){
            break;
        }
        gap.text = data.substring(i,j);
        i = data.indexOf("}",j);
        let temp: string[] = data.substring(j+1,i).split("|");
        if( temp.length == 1){ //This is just a normal gap, not a multiple options gap, | didn't appear
          gap.gap = temp[0];
        }else {
          gap.options = temp;
        }

        i++;
        gap.guess = "";
        gapsl.push(gap);
      }
      console.log(gapsl);
      gaps.value.push(gapsl);
}

onMounted( ()=> {
     console.log("The setup function is executed!");
     
    
     if(props.gaptexts ){ //gaptext is an array of gaptexts
      console.log(props.gaptexts);
      parseGapTexts(props.gaptexts);
     }
     else if(props.gaptext){
      parseGapText(props.gaptext);
     }

     console.log( "The value of this.same is " + props.same );
     let alloptions : string[] = [];
     if(props.same){
       
        console.log( "The value of gaps.value is " + gaps.value );
       gaps.value.forEach( (innergaps: Array<Gap>) => {
           innergaps.forEach( (gap: Gap) => {
           if(gap.options ) { 
           gap.options.forEach( (option:string) => {
              if( alloptions.indexOf(option) == -1 && option != '' ){
                alloptions.push(option);
              }
           });
           }
       });
  

       });
     }

       gaps.value.forEach( (innergaps: Array<Gap>) => {
        innergaps.forEach(
        (gap:Gap) => {
          gap.solution = (gap.options ? gap.options[0] : gap.gap) as string;
          if( gap.options  ){
            if(!props.same){
            gap.options = shuffle(gap.options);
            }
            else {
              gap.options = [...alloptions];
            }
          }
          

       });

     });
     } );

</script>

<style scoped>

button {
  margin: 3px;
}

.correct {
    color: green;
    border: 1px solid green
}

.notcorrect {
    color: red;
    border: 1px solid red;
    text-decoration: line-through;
}



</style>