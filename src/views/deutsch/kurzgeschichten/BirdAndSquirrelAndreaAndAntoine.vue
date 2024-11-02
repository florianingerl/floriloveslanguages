<template>
    <div>
    
    <h1>Ein Vogel und ein Eichhörnchen</h1>
    <h4><i>von Florian Ingerl, Antoine und Andrea</i></h4>
    
    <img style="float: right; height: 200px" src="@/assets/img/deutsch/vogel.jpg"></img>

    <VueGoogleTranslate>
Werner war ein sehr netter Vogel. Deswegen hatte er auch viele Freunde.
Vielleicht war er trotzdem manchmal einsam. Er sang immer gerne, und hatte Spaß in der Sonne.
</VueGoogleTranslate>

<VueExercise lg="de" :topics="['In oder auf']" instruction="Befülle die Lücken mit in oder aus!">
<VueMCGaps lg="de" :gaptexts="['Das Eichhörnchen sieht viele Nüsse {auf} der Straße liegen.',
'Der Vogel sitzt {auf} dem Ast.',
'{In} seinen Träumen kann Anton klettern wie ein Eichhörnchen.',
'{In} den Nüssen sind viele Würmer.']">

</VueMCGaps>
</VueExercise>

<VueGoogleTranslate>
Er sah ein Eichhörnchen und dachte, dass er auch gerne auf Bäume klettern können würde. 
Er fragte dann das Eichhörnchen, ob es sein Freund sein möchte.
</VueGoogleTranslate>

<VueExercise lg="de" :topics="['Fall nach sein']" instruction="Beantworte die Frage!">
<VueQuestion lg="de" :question="{
		question: 'Um welchen Fall handelt sich es bei <<sein Freund>> in den Sätzen << Ich bin sein Freund.>> oder << Im möchte dein Freund sein. >> ?',
		options: [{option:'Akkusativ', correct: false },
     {option:'Nominativ', correct: true },
     {option:'Dativ', correct: false } ,
     {option:'Genitiv', correct: false }
     ]
	    }" :hasNextButton="false" /></VueExercise>

<VueGoogleTranslate>
Das Eichhörnchen war zunächst etwas misstrauisch, denn warum sollte ein 
Vogel ein Eichhörnchen zum Freund haben wollen? Was kann denn ein Eichhörnchen mit einem Vogel machen, wenn es selbst nicht fliegen kann?
"Hallo lieber Vogel!", sagte das Eichhörnchen. "Was möchtest du als erstes mit mir machen? "
</VueGoogleTranslate>

<VueExercise lg="de" :topics="['Bestimmter oder unbestimmter Artikel']" instruction="Befülle die Lücken mit dem richtigen bestimmten oder unbestimmten Artikel!">
<VueMCGaps lg="de" :same="true" :gaptexts="['Der Vogel würde gerne auf {X|} Bäume klettern können.',
'Das Eichhörnchen würde gerne auf {die|} Bäume mit den meisten Nüssen fliegen können.',
'Anton hat Spaß daran, {X|} Lieder in {der|} Sonne zu singen.',
'Das Eichhörnchen hört gerne {die|} Lieder, die {die|} Vögel auf den Bäumen singen.']">

</VueMCGaps>
</VueExercise>

<img style="float: right; height: 200px" src="@/assets/img/deutsch/eichhoernchen.png"></img>

<VueGoogleTranslate>
Werner war ein bisschen verwirrt. Was sollten zwei neue Freunde miteinander machen? 
"Gehen wir Würmer jagen! Magst du Würmer essen? Ich kann nie genug davon haben!" antwortete Werner fröhlich.
"Würmer habe ich noch nie gegessen." erwiderte das Eichhörnchen. "Aber ich schlage etwas anderes vor.
 Was hältst du davon, wenn wir Nüsse suchen gingen? Ich mag Walnüsse, Haselnüsse, Eicheln, Cashewkerne und Macadamia."
 </VueGoogleTranslate>

<VueExercise lg="de" :topics="['Halten oder denken']" instruction="Befülle die Lücken mit den richtig konjugierten Verben halten oder denken!">
<VueMCGaps lg="de" :gaptexts="['Das Eichhörnchen {hält} nicht viel von der Idee, Würmer zu jagen.',
'Das Eichhörnchen {denkt}, dass man Cashewkerne und Macadamia im Supermarkt stehlen müsste, wohingegen man Walnüsse, Haselnüsse und Eicheln in der deutschen Natur kostenlos findet.',
'Das Eichhörnchen {hält} allerdings nicht viel von den Nüssen aus dem Supermarkt, weil diese meistens gespritzt und nicht roh sind.',
'Eichhörnchen {denken} die ganze Zeit nur an Nüsse.']">

</VueMCGaps>
</VueExercise>

<img style="float: right; height: 200px" src="@/assets/img/deutsch/vogel.jpg"></img>

<VueGoogleTranslate>
Das Eichhörnchen, das gerade gefragt worden ist, bekam Übelheit.
Werner, der noch nie einen Freund mit so viel Fell gehabt hatte, überlegte, wie sie einen Kompromiss finden könnten. 
 "Ich habe gerade eine brilliante Idee!" rief er plötzlich beigeistert. 
 "Als ich einmal neben dem gelben Haus gechillt habe, habe ich die Oma gehört, 
 wie sie sehr böse darüber war, dass alle ihre Nüsse voll mit Würmern waren. Was hältst du von einem kleinen Diebstahl?"
 </VueGoogleTranslate>

<VueExercise lg="de" :topics="['Rufen oder schreien']" instruction="Befülle die Lücken mit den richtigen konjugierten Verben rufen oder schreien">
<VueMCGaps lg="de" :gaptexts="['<<Raus aus meinem Garten!>> {schreit} die Oma wütend, die keine Tiere bei ihr duldet.',
'Die Oma {ruft} den Arzt wegen ihrer Allergie gegen Vögel und Eichhörnchen an.',
'Beim Anblick von den Tieren auf ihrem Fensterbrett ist die Oma ohnmächtig geworden und kann nicht mehr um Hilfe {rufen}.']">

</VueMCGaps>
</VueExercise>

<VueGoogleTranslate>
Als das Eichhörnchen das Wort "Diebstahl" hörte, fühlte es sich unangenehm.
Nach kurzem Überlegen schlug es aber vor: "Das finde ich eine tolle Idee von dir, lieber Vogel! Aber man soll nicht stehlen.
 Das ist eines der zehn Gebote und ich bin gläubiger Christ. Wir müssen also die Oma vorher fragen." <br/>
 "Aber wie sollen wir mit der Oma reden?", fragte Werner. "Wir sollten einfach vor dem Fenster sitzen und nett aussehen.", antwortete das Eichhörnchen. "Dann wird die Oma uns etwas freiwillig geben." Man macht sowas, wenn man süße Tiere sieht." meinte es. 
</VueGoogleTranslate>

<VueExercise lg="de" :topics="['Mann, man oder wir', 'Indefinitpronomen man']" instruction="Befülle die Lücken mit Mann, man oder wir">
<VueMCGaps lg="de" :gaptexts="['{Man} bekämpft Ratten oft mit Rattengift und findet sie nicht süß.',
'Mäuse kann {man} leicht mit Ratten verwechseln.',
'Werner ist leider noch nicht der {Mann} einer Frau, weswegen er manchmal einsam ist.',
'<<{Wir} sollten lächeln, wenn {wir} von der Oma Nüsse haben wollen. >> erklärt das Eichhörnchen.']">

</VueMCGaps>
</VueExercise>


<img style="float: right; height: 200px" src="@/assets/img/deutsch/eichhoernchen.png"></img>

<VueGoogleTranslate>
"Na ja..." antwortete Werner. "Ich habe einmal eine sehr süße Ratte gesehen, die deine Strategie versucht hat. 
Es ist schief gelaufen... aber versuchen wir es trotzdem. Im schlimmsten Fall werde ich dich schnappen und wir fliegen weg."
Sie setzten ihren Plan also in die Tat um und setzten sich aufs Fensterbrett der Oma.
</VueGoogleTranslate>

<VueExercise lg="de" :topics="['Relativsatz im Nominativ']" instruction="Befülle die Lücken mit der,die,das um den Relativsatz im Nominativ einzuleiten!">
<VueMCGaps lg="de" :gaptexts="['Der Vogel, {der} keine Nüsse isst, versteht den Vorschlag mit den Macadamias vom Eichhörnchen nicht.',
'Das Eichhörnchen, {das} keine Würmer isst, findet den Vorschlag vom Vogel merkwürdig.',
'Die Nüsse, {die} im Herbst von den Bäumen fallen, sind reich an Omega-3-Fettsäuren.',
'Die Frau, {die} die Einsamkeit von Anton vertreiben könnte, muss erst noch gefunden werden.'
]">
</VueMCGaps>
</VueExercise>

<VueGoogleTranslate>
Unglücklicherweise hatte die Oma eine schwere Allergie gegen Vögel mit schwarzem Gefieder und gegen Eichhörnchen.
Sie bekam daher sofort Panik, packte die nächstliegenden Gegenstände - in diesem Fall waren es ein paar Nüsse - und warf sie mit voller Wucht gegen die Tiere auf ihrem Fensterbrett um sie zu verscheuchen.

Erschrocken flohen das Eichhörnchen und Werner, hatten aber nun genügend Nüsse zum Essen.
</VueGoogleTranslate>

<h3>Ende</h3>


    
    
    </div>
    
    
    </template>
    
    <script lang="ts">
    import { defineComponent } from "vue";

    import VueHideShow from "@/components/atoms/HideShow.vue";

import VueExercise from "@/components/atoms/Exercise.vue";
import VueWordOrder from "@/components/molecules/WordOrder.vue";
import VueMCGaps from "@/components/atoms/MCGaps.vue";
import VueQuestion from "@/components/atoms/Question.vue";
import VueGoogleTranslate from "@/components/atoms/GoogleTranslate.vue";
    
    export default defineComponent ({
      
      components: {
         VueExercise,
         VueHideShow,
         VueMCGaps,
         VueWordOrder,
         VueQuestion,
         VueGoogleTranslate
         
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




