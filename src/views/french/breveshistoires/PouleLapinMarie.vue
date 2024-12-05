<template>
<div>

<h1>Une poule et un lapin s'approchent</h1>
<h4><i>par Florian Ingerl et <a href="https://mariefaure.fr/">Marie Faure</a></i></h4>

<img style="float: right; height: 200px" src="@/assets/img/deutsch/eichhoernchen.png"></img>


La poule aimait se balader dans les prés. En se baladant ainsi, la poule qui, au fait, s'appelait Joséphine scrutait la terre pour y récupérer quelque chose à manger.
Jo le lapin, un témoin amusé par les déambulations de Joséphine, la héla prudemment : "Bonjour jeune dame, que cherches-tu par ici? "
Difference que et quoi???
"Bonjour jeune monsieur!" répondit Joséphine. "Je cherche simplement
de la nourriture parce que - comme tu le vois - je suis très maigre. Mais, je n'aurais rien contre le fait de faire la connaissance d'un joli coq qui m'offrirait des pâquerettes. Depuis la mort de mon troisième coq, personne ne m'a offert de fleurs."
pâquerette
faute de frappe
Jo ne se voyait pas comme un gamin pourtant c'est ce qu'il était.
Son inconscient lui criait "Gare à toi!" et il ne comprenait pas pourquoi.
dedons de la farce
La raison pour laquelle une voix dans sa tête lui disait "Gare à toi" était mystérieuse. Mais il avait un soupçon: "Peut-être que la poule veut m'épouser sans séparation de biens et puis divorcer et prendre tout mon argent? Par conséquent, je dois me méfier."
compassion

ivre
Sans aucune compassion pour madame la poule, il décida de l'ignorer et s'en alla au premier café du coin de la rue et but tant de cidre qu'il en devint ivre.
Mais qu'est-ce qui se passa maintenant? Était-ce
l'influence de l'alcool ou la réalité? Il vit la poule Joséphine qui l'avait suivi s'approcher de sa table. Puis elle se jeta sur la chaise à coté de la sienne et elle lui adressa la parole: "Si tu le souhaitais, je deviendrais volontiers ta femme et je te servirais dans toutes tes entreprises."
C'est à cet instant précis que Patrick, le chien serveur du café, vint lui apporter la liste de tout ce qu'il venait de consommer et l'addition qui en résultait. Etonné par les propos tenus par cette jolie poulette, il se coinça la queue dans les plis de son tablier.
queue

la liste
"Il faut que quelqu'un paie l'addition qui se trouve sur le plateau de ce chien serveur!" se dit Jo, le lapin ivre,
qui n'avait pas apporté d'argent. "La poule semble me trouver sympa. Elle pourrait payer" pensa t-il.
Comme Jo avait toujours dans ses poches quelques bricoles à vendre, il en proposa quelques unes à Joséphine...C'était en réalité une astuce pour qu'elle sorte son portefeuille, première étape pour le paiement de son addition.
"Je n'ai pas besoin de ces trucs inutiles que tu me proposes!" Par ses mots, la poule Joséphine refusa
catégoriquement l'offre du lapin Jo.

Alors, le lapin se tourna vers le chien et ce fut à lui qu'il proposa de prendre ses bricoles au lieu de l'argent.
Heureux de participer à cette merveilleuse saga, Patrick accepta
avec grand plaisir la proposition plus que douteuse de Jo.
Mais tout le monde s'en réjouit et pour fêter cette victoire, Patrick offrit à tout le bar sa tournée générale.
Fin

</div>


</template>

<script lang="ts">
import { defineComponent } from "vue";

import VueMCGaps from "@/components/atoms/MCGaps.vue";
import VueQuestion from "@/components/atoms/Question.vue";
import VueExercise from "@/components/atoms/Exercise.vue";
import HideShow from "@/components/atoms/HideShow.vue";
import GoogleTranslate from "@/components/atoms/GoogleTranslate.vue";

export default defineComponent ({
  
  components: {
     VueQuestion,
     VueExercise,
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















