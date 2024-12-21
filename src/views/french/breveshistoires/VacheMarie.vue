<template>
    <div>
    
    <h1>Une vache ne peut pas donner d'huile</h1>
    <h4><i>par Florian Ingerl</i></h4>
    
    <img style="float: right; height: 200px" src="@/assets/img/francais/poule.png"></img>
    
    
    La vache avait un petit bébé dont elle prenait bien soin.
Les deux prenaient un bain de soleil dans un vaste pré.
Bien que la maman vache méprisait parfois les humains,
elle ne voulait pas non plus se méprendre sur certains d'entre eux. En effet, tous n'étaient pas bons, il fallait donc se méfier mais certains d'entre eux pouvaient se révéler être de bons camarades.
Cependant, elle connaissait aussi des humains qui gagnaient leur pain avec des arnaques. Ces humains-là la caressaient toujours tendrement bien qu'ils  voulaient seulement obtenir d'elle autant de lait que possible.
Et la maman vache a réalisé que ce lait-là manquait ensuite à son bébé.
Par conséquent, elle ne pouvait s'empêcher de douter de la nature bienveillante de ces humains et elle se doutait bien qu'il y avait anguille sous roche.
Autrefois, la vache était très extravertie. Mais à cause des ces humains malhonnêtes et avec la responsabilité de son petit bébé, elle avait changé de caractère et se méfiait de presque tout. Cela l'empêchait d'explorer de nouvelles relations sans préjudices.
"Dans quel monde étrange vivons-nous?" s'interrogeait-elle parfois. "Revenons à l'essentiel!" se disait-elle pour retrouver un sens à sa vie.
Elle connaissait aussi des humains sympas. Par exemple, il y avait ce petit gamin qui travaillait à la ferme et qui balayait avec grand soin sa maison et celle de son bébé, ce dont elle lui était très reconnaissante. "Comment est-ce que je pourrais exprimer ma gratitude? " se demanda la maman vache. "Lui offrir du lait? De son salaire maigre, il ne peut sûrement jamais s'acheter du lait de qualité."
Elle se dit alors qu'elle pourrait attendre le bon moment pour cela et atteignit tranquillement le bord du pré avec son bébé pour voir si le jeune garçon apparaitrait.
Juste quand la maman vache avait rempli tout un seau avec du lait frais, le gamin surgit. On pouvait le reconnaître facilement grâce à sa casquette qu'il portait toujours, même quand il n'y avait pas de soleil.
Elle était contente car tant qu'elle aurait du lait, elle pourrait lui en donner autant chaque jour.
"Merci beaucoup!" s'exclama le gamin en se penchant sur le seau et en voyant le lait frais.
"J'ai tant de travail que je ne peux pas l'accomplir sans avoir mangé quelque chose de gras." En buvant le lait, le gamin caressait la vache et pensait à haute voix: "Malheureusement, tu ne peux fournir que du lait et pas d'huile. En effet, j'aurais besoin d'huile pour ma mobylette et ma camionnette."
"Je t'ai offert du lait, lui répondit la vache, et ceci a été fait le cœur ouvert."
"Mais mon lait ne peut bien sûr pas remplacer l'huile dont tu as besoin. " Parce que la vache ne pouvait aider le gamin d'une autre manière, elle lui offrit simplement un sourire. Et en voyant ce sourire radieux, le gamin oubliait toutes ses obligations et n'avait plus besoin de conduire n'importe où.
La morale: Un sourire peut solutionner tous vos problèmes.

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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    