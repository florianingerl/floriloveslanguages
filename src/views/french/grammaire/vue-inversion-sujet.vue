<template>

<div>

This is just a stupid test

<VueExercise lg="fr" instruction="This is just a stupid test">
<VueMCGaps lg="fr" gaptext="{His|My|Your} bag belongs to {him}. The bag belongs to Paul.">

</VueMCGaps>
</VueExercise>
   
<VueExercise instruction="Mettez les mots dans le bon ordre!">

<VueWordOrder lg="fr" :sentences="[
    'Ainsi a Paul mouru.',
    'Devant ma fenêtre sont mes pousses de brokoli.',
    'Ce que m\'a dit Paul me semble faux.',
    'Ce qu\'il a dit me semble juste.',
    'Bientôt viendra le crépuscule.',
    'Que penses tu?',
    'Ton ami partira?',
    'As-tu peur des chien?',
    'Quand part le train pour Paris?',
    'Quand l\'avion pour l\'Allemagne part-il?',
    'À quoi penses-tu?',
    'À propos de quoi discutent-ils?',
    'Ton patron a-t-il des enfants?',
    'Les vacances sont-ils trop courts?',
    'La fille des voisins te plaît?',
    'Ton mari a-t-il des liaison avec autres femmes?',
    'Court-il vite!',
    'Combien de pommes as-tu mangées?',
    'Quel livre as-tu lu?',
    'Quel chemin est à prendre'



]">

</VueWordOrder>

</VueExercise>

</div>


    
</template>

<script>
import VueExercise from "./../../Exercise.vue";
import HideShow from "./../../HideShow.vue";
import VueGaps from "./../../vue-gaps.vue";
import VueMCGaps from "./../../MCGaps.vue";
import VueWordOrder from "./../../vue-word-order.vue";

export default {
  name: "VueInversionSujet",
  components: {
    VueExercise,
    HideShow,
    VueGaps,
    VueWordOrder,
    VueMCGaps
  },

  mounted(){
     console.log("The setup function is executed!");
     
  },
  setup(){
   console.log("The setup function is executed!");
  },
  
  data() {
    return {
       gaptext: ["Est-ce que tu vois le graine de blé près {duquel} il y a un petit animal.",
"Je ne connais pas le nom des petits animals à cause {desquels} mes graines de céréales ont disparu.",
"Regarde là-bas. Il y a un de ces petits animals {dont} le ventre est plein de graines.",
"J'aime bien mes repas au bout {desquels} je me sens plein d'énergie.",
"Est-ce que tu vois ce graine de seigle au coeur {duquel} se cache beaucoup de force?",
"Est-ce que tu comprends ce {dont} je viens de te parler?",
"La nourriture saine est un sujet {dont} nous devons tous nous préoccuper.",
"Les haricots de mungo {dont} mon corps a besoin sont aussi financièrment à ma portée.",
"La femme {dont} je suis amoureux ne mange que des haricots de mungo."]
    };
  }
}
</script>

<style scoped>
.nice {
    padding: 10px;
    border: solid 1px blue;
    border-radius: 5px;
    background-color: #ffe6ff;
    width: 70%;
    margin: 10px;
}

td {
    padding: 5px;
}




</style>