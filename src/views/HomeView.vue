<script lang="ts" setup>
import VueWordOrder from '../components/atoms/vue-word-order.vue';
import Stupid from "../components/atoms/ATest.vue";
import ProvideArrayTest from "../tests/ProvideArrayTest.vue";
import VueWholeSentence from "../components/atoms/vue-whole-sentence.vue";
import VueMCGaps from "../components/atoms/vue-mc-gaps.vue";
import VueHideShow from "../components/atoms/vue-hideshow.vue";
import { Button } from '@/components/ui/button';

</script>

<template>
  <main>
  <p>
  In this paragraph, you can click on any word to see a translation!
  </p>
    <Stupid />

    <div>
    <Button>My First ShadeCN Button</Button>
  </div>
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
