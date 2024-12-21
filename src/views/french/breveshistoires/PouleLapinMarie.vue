<template>
<div>

<h1>Une poule et un lapin s'approchent</h1>
<h4><i>par Florian Ingerl</i></h4>

<img style="float: right; height: 200px" src="@/assets/img/francais/poule.png"></img>


La poule aimait se balader dans les prés. En se baladant ainsi, 
la poule qui, au fait, s'appelait Joséphine scrutait la terre pour y récupérer quelque chose à manger.
Jo le lapin, un témoin amusé par les déambulations de Joséphine, la héla prudemment : "Bonjour jeune dame, que cherches-tu par ici? "

<VueExercise lg="fr" :topics="['Quoi ou que']" instruction="Remplis les trous avec quoi ou que!">
<VueMCGaps lg="fr" :same="true" :gaptexts="['{Que} mangent les poules? Des graines.',
'À {quoi} pense une poule en se baladant?',
'La poule {que} tu vois sur l\'image ci-contre s\'appelle Joséphine',
'{Que} font les poules sans les coqs.']">

</VueMCGaps>
</VueExercise>

"Bonjour jeune monsieur!" répondit Joséphine. "Je cherche simplement
de la nourriture parce que - comme tu le vois - je suis très maigre. 
Mais, je n'aurais rien contre le fait de faire la connaissance d'un joli coq qui m'offrirait des pâquerettes.
 Depuis la mort de mon troisième coq, personne ne m'a offert de fleurs."

<VueExercise lg="fr" :topics="['Les conjunctions']" instruction="Remplis les trous avec la bonne conjunction!">

<VueMCGaps lg="fr" :same="true" :gaptexts="['{Parce que|} Joséphine a faim, elle cherche de la nourriture.',
'{Bien que|} Joséphine soit jolie, elle n\'a pas encore trouvé de coq',
'{Mais|} Joséphine n\'a pas encore perdu l\'éspoir d\'en trouver un.',
'{Après|} avoir vu Jo, Joséphine est deçue {parce que|} Jo est un lapin et pas un coq.']">

</VueMCGaps>
</VueExercise>

Jo ne se voyait pas comme un gamin pourtant c'est ce qu'il était.
Son inconscient lui criait "Gare à toi!" et il ne comprenait pas pourquoi.
La raison pour laquelle une voix dans sa tête lui disait "Gare à toi" était mystérieuse. 

<VueExercise lg="fr" :topics="['Adjectifs à la forme feminin']" instruction="Remplis les trous avec l'adjectif à la forme féminin!">

<VueMCGaps lg="fr" :gaptexts="['Joséphine est très {courageuse} (courageux) parce qu\'elle se balade dans un pré où il y a parfois aussi des renards et des loups.',
'Joséphine n\'est pas {heureuse} (heureux) de n\'avoir rencontré que Jo et pas un coq.',
'Le weekend, Joséphine se permet d\'être {paresseuse} (paresseux) et ne travaille pas.']">

</VueMCGaps>
</VueExercise>

<img style="float: right; height: 200px" src="@/assets/img/francais/poule.png"></img>
Mais il avait un soupçon: 
"Peut-être que la poule veut m'épouser sans séparation de biens et puis divorcer
 et prendre tout mon argent? Par conséquent, je dois me méfier."
Sans aucune compassion pour madame la poule, il décida de l'ignorer et s'en alla au premier café du coin de la rue
 et but tant de cidre qu'il en devint ivre.

<VueExercise lg="fr" :topics="['tant ou autant']" instruction="Remplis les trous avec tant ou autant!">
<VueMCGaps lg="fr" :gaptexts="['Joséphine se méfie {autant} que Jo. Du coup, ils ne se marieront peut-être pas.',
'Joséphine ne veut pas épouser Jo {tant} que celui-ci boit trop d\'alcool.',
'Un jour, Joséphine avait bu {tant} de café dans un restaurant qu\'elle en était devenue malade.']">

</VueMCGaps>
</VueExercise>

Mais qu'est-ce qui se passa maintenant? Était-ce
l'influence de l'alcool ou la réalité? Il vit la poule Joséphine qui l'avait suivi s'approcher de sa table.
 Puis elle se jeta sur la chaise à coté de la sienne et elle lui adressa la parole: 
 "Si tu le souhaitais, je deviendrais volontiers ta femme et je te servirais dans toutes tes entreprises."

<VueExercise lg="fr" :topics="['Phrases conditionnels']" instruction="Remplis les trous de sorte que les phrases conditionnelles soient correctes!">
<VueMCGaps lg="fr" :gaptexts="['Si Jo {était} (être) un coq, il {pourrait} (pouvoir) avoir des enfants avec Joséphine.',
'Si Jo n\'{avait} (avoir) pas bu tant d\'alcool, il ne {serait} (être) pas ivre maintenant.',
'Si Joséphine ne {voulait} (vouloir) rien de Jo, elle ne l\'{aurait} (avoir) pas suivi.']">

</VueMCGaps>
</VueExercise>

C'est à cet instant précis que Patrick, le chien serveur du café, 
vint lui apporter la liste de tout ce qu'il venait de consommer et l'addition qui en résultait. Etonné par les propos tenus par cette jolie poulette, il se coinça la queue dans les plis de son tablier.
queue

la liste
"Il faut que quelqu'un paie l'addition qui se trouve sur le plateau de ce chien serveur!" se dit Jo, le lapin ivre,
qui n'avait pas apporté d'argent. "La poule semble me trouver sympa. Elle pourrait payer" pensa t-il.
Comme Jo avait toujours dans ses poches quelques bricoles à vendre, il en proposa quelques unes à Joséphine...C'était en réalité une astuce pour qu'elle sorte son portefeuille, première étape pour le paiement de son addition.
"Je n'ai pas besoin de ces trucs inutiles que tu me proposes!" Par ses mots, la poule Joséphine refusa
catégoriquement l'offre du lapin Jo.

<img style="float: right; height: 200px" src="@/assets/img/francais/poule.png"></img>
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















