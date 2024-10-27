










<template>
<div>

<h1>Le comparatif en espagnol</h1>
<h4><i>by Florian Ingerl and <a href="https://www.professeurparticulier.com/voir-les-coordonnees-refK8jxCGxMMx37WoM6qFxCMzp2Unqi95JJ4T7wqu82S10FgCBw7Y.html">Olivia Voisin</a></i></h4>


<p class="exemple"> Exemples de phrase avec un comparatif:
<ul>
<li>Soy más joven que mi padre. <i class=" ms-2 bi bi-globe" data-bs-toggle="tooltip" title="I am younger than my father."></i></li>
<li>Mi padre es menos joven que yo.<i class=" ms-2 bi bi-globe" data-bs-toggle="tooltip" title="My father is less young than me."></i></li>
<li>Soy tan joven como mi amigo. <i class=" ms-2 bi bi-globe" data-bs-toggle="tooltip" title="I am as young as my friend."></i></li>
</ul>
</p>

<p class="instruction">Maintenant, c'est à vous de remplir les trous en formant des phrases qui ont du sens!</p>

<VueExercise lg="fr" :topics="['Le comparatif en espagnol']" instruction="Remplis les trous avec le bon comparatif!">
<VueMCGaps lg="fr" :gaptexts="['Rusia es {más fria} (frio) que México.',
'Messi es {mejor} (bueno) que Christano Ronaldo porque es el más rapido.',
'Carmen es {más orgullosa} (orgulloso) que su hermana, no acepta las críticas mientras su hermana las tiene en cuenta.',
'Soy {menos viejo} (viejo) que mi hermana porque tengo 31 años y mi hermana tenía 33 años.',
'Parece que este chico está {más feliz} (feliz) que el resto del grupo que están todos tristes.',
'La tortuga es {tan lenta} (lento) como el caracol.',
'Mi habitación está {más organizada} (organizado) que la de mi padre porque la ordené ayer.',
'Ella es {tan hermosa} (hermoso) como su madre.',
'Camille está {menos enferma} (enfermo) que ayer, se recupera rápidamente.',
'Su falda es {tan negra} (negro) como la noche.']">

</VueMCGaps>
</VueExercise>

</div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

import VueMCGaps from "@/components/atoms/vue-mc-gaps.vue";
import VueQuestion from "@/components/atoms/vue-question.vue";
import VueExercise from "@/components/atoms/vue-exercise.vue";
import VueWholeSentence from "@/components/atoms/vue-whole-sentence.vue";
import VueWordOrder from "@/components/molecules/WordOrder.vue";
import VueHideShow from "@/components/atoms/vue-hideshow.vue";

export default defineComponent ({
  
  components: {
     VueMCGaps,
     VueQuestion,
     VueExercise,
     VueWholeSentence,
     VueHideShow,
     VueWordOrder
  },

  mounted(){
     console.log("The mounted function of Vue negation espagnol  is executed!");
     
  },
  setup(){
   console.log("The setup function of Vue negation espagnol  is executed!");
  },
  data(){
        return {
            
        };
  },
  methods: {
       
    
  }
});
</script>

<style scoped>
h3 {
    color: red;
}

.exemple {
    color: blue;
}

.instruction {
  background-color: yellow;
  color: black;
}


</style>



