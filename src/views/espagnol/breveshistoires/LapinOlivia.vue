<template>
<div>

<h1>El conejo Carlos</h1>
<h4><i>by Florian Ingerl</i></h4>

<img style="float: right; height: 200px" src="@/assets/img/english/rabbit.png"></img>

<GoogleTranslate>
El conejo se llamaba Carlos. Tenia dos anos.
Tenia  grandes orejas.
</GoogleTranslate>

<VueExercise lg="fr" :topics="['tener à l\'imparfait']" instruction="Remplis les trous avec le verbe tener à l'imparfait!">
<VueMCGaps lg="fr" :gaptexts="['Los abuelos de Carlos {tenían} orejas grandes.',
'Lo hermano de Carlos mayor {tenía} un año más que el.']">

</VueMCGaps>
</VueExercise>

<GoogleTranslate>
Un dia se pregunto: "Como podria encontrar a mi media naranja, una conejita hermosa y amable?"
Carlos no encontró ninguna conejita.
Estaba triste.
</GoogleTranslate>

<VueExercise lg="fr" :topics="['Ser ou estar']" instruction="Remplis les trous avec ser ou estar à la bonne conjugaison!">
<VueMCGaps lg="fr" :gaptexts="['Carlos {era} uno conejo amable.',
'Carlos {estaba} en el jardin.',
'Carlos {era} un conejo francés.',
'Carlos no {estaba} enfermo.']">

</VueMCGaps>
</VueExercise>

<GoogleTranslate>
Pero esto duro solo un momento! "Muevete! se dijo, hazte fuerza para encontrarla!"
</GoogleTranslate>

<VueExercise lg="fr" :topics="['Pero ou perro']" instruction="Remplis les trous avec pero ou perro!">
<VueMCGaps lg="fr" :gaptexts="['Carlos no tenía mucho dinero {pero} era amable.',
'El {perro} de Obelix se llama Idefix.',
'Carlos era pequeño {pero} tenía dos orejas grandes.',
'El {perro} es el mejor amigo del hombre.']">

</VueMCGaps>
</VueExercise>

<GoogleTranslate>
Queria encontrar la conejita más guapa del mundo.
Queria que tuviera el pelo rubio.
</GoogleTranslate>

<VueExercise lg="fr" :topics="['Superlatif']" instruction="Remplis les trous avec l'adjectif donné au superlatif!">
<VueMCGaps lg="fr" :gaptexts="['Carlos tenía las orejas {más grandes} (grande) de toda su familia.',
'Para los conejos, las zanahorias son las verduras {más deliciosas} (delicioso).',
'Las zanahorias que alguien le dio a Carlos son {las más baratas} (barato).']">

</VueMCGaps>
</VueExercise>

Fue a casa de su hermano y le dijo que como tenia mas suerte que él, le podia ayudar para buscar a una novia
El hermano de Carlos quiso dinero para ayudarle. Carlos le dio dinero. Su hermano debia apoyarlo ahora, no tenia otra opcion.
"Pon tus botas para que vayamos al pueblo a preguntar por una conejita que conozco, estoy seguro de que te va a encantar!"
Cuando los dos hermanos llegaron a casa de la conejita, a Carlos no le gusto la conejita.
Estaban a punto de irse cuando la coneja dijo: "conteis hasta tres y mireis sobre la mesa"
La mesa no estaba lejos. Carlos podia verla.
En la mesa del salon, habia una botella y Carlos entendio que debia beber el liquido extrano que esataba adentro
Cuando Carlos bebio el liquido, su cabeza aun funcionaba. No vio estrellas.
Espero un momento, y de repente vio a la coneja con ojos nuevos: "Qué guapa eres!"

<h3 class="bg-blue">The end</h3>

</div>


</template>

<script lang="ts">
import { defineComponent } from "vue";

import VueMCGaps from "@/components/atoms/MCGaps.vue";
import VueQuestion from "@/components/atoms/Question.vue";
import VueExercise from "@/components/atoms/Exercise.vue";
import VueWholeSentence from "@/components/atoms/WholeSentences.vue";
import HideShow from "@/components/atoms/HideShow.vue";
import GoogleTranslate from "@/components/atoms/GoogleTranslate.vue";

export default defineComponent ({
  
  components: {
     VueQuestion,
     VueExercise,
     VueWholeSentence,
     HideShow,
     VueMCGaps,
     GoogleTranslate
  },

  mounted(){
     console.log("The mounted function of VueRowFood was called!");
     
  },
  setup(){
   console.log("The setup function of VueRawFood  is executed!");
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



</style>




