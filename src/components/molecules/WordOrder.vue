<template>

<div v-for="(sentence ,index ) in sentences2">
<p>{{index+1}}.{{ sentence.wrongOrder }}</p>
</div>

<HideShow :lg="lg">
<div v-for="(sentence, index) in sentences">
<p>{{index+1}}.{{ sentence }}</p>
</div>
</HideShow>

</template>

<script lang="ts">

import { ref ,defineComponent } from 'vue';
import type { PropType } from "vue";
import type { WordOrderExercise } from "../../types/WordOrderExercise.ts";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HideShow from '@/components/atoms/HideShow.vue';
import type { Languages } from "../../types/Languages.ts";


function shuffleWords(text: string) : string {
      
let words = text.split(/\s+/);
shuffle(words);
let s = "";
words.forEach( (word: string,index: number) => { s = s + word; if(index != words.length-1 ){ s = s + " / "; } } );
return s;
    }

function shuffle<T>(array: T[] ): void {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export default defineComponent({
  components: { Button , Input, HideShow },
  props: {
    sentences: {
      required: true,
      type: Array as PropType<string[]>
    },
    lg: {
      required: true,
      type: String as PropType<Languages>
    }
    
  },
  setup(props) {
    console.log("The setup function of word order is executed!");
    console.log(props);

    let ls : WordOrderExercise[] = [];
    props.sentences.forEach( (sentence : string) => {
        let wrongOrder = shuffleWords(sentence);
        ls.push( { wrongOrder, solution: sentence, guess: "" } );
     });

    const sentences2 = ref<WordOrderExercise[]>(ls);
    const validated = ref<boolean>(false);
    return { sentences2, validated };
  },
  mounted(){
     console.log("The mounted function is executed!");
     
     
  },
  methods : {
    

 validateSolutionClicked(){
        console.log("The button was clicked!");
        this.validated = true;
    },
    showSolutionClicked(){
        console.log("Button show solution was clicked!");
        this.validated = true;
        this.sentences2.forEach( (sentence: WordOrderExercise) => {
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