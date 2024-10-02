<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import VueWordOrder from './../components/vue-word-order.vue';
import Stupid from "./../components/Test.vue";
import ProvideArrayTest from "./../components/ProvideArrayTest.vue";
import VueWholeSentence from "./../components/vue-whole-sentence.vue";
import VueMCGaps from "./../components/vue-mc-gaps.vue";
import VueHideShow from "./../components/vue-hideshow.vue";
import { defineComponent } from "vue";

export default defineComponent(
  {
    components: { TheWelcome, Stupid, VueWordOrder, ProvideArrayTest, VueWholeSentence, VueMCGaps, VueHideShow }
  }
);
</script>

<template>
  <main>
    <TheWelcome />
    <Stupid />
    <ProvideArrayTest />
    <VueWordOrder lg="fr" :sentences="['Nenad is smart.', 'Florian is smart too.']" />

    <h1>VueWholeSentence</h1>
    <VueWholeSentence lg="en" :sentences="[{task: 'Florian is what?', solution: 'smart'}, { task: 'Nenad is what?', solution: 'smart' }]" />

    <h1>VueMCGaps</h1>
    <VueMCGaps lg="en" gaptext="Nenad is {smart} and Florian is {smart} too."></VueMCGaps>

    <h1>VueHideShow</h1>
    <VueHideShow lg="en">
    <p>Florian is smart and so is Nenad.</p>
    <p>Florian is smart and so is Nenad.</p>
    <p>Florian is smart and so is Nenad.</p>
    <p>Florian is smart and so is Nenad.</p>
    <p>Florian is smart and so is Nenad.</p>
    </VueHideShow>
  </main>
</template>
