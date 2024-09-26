<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import VueWordOrder from './../components/vue-word-order.vue';
import Stupid from "./../components/Test.vue";
import ProvideArrayTest from "./../components/ProvideArrayTest.vue";
import VueWholeSentence from "./../components/vue-whole-sentence.vue";
import { defineComponent } from "vue";

export default defineComponent(
  {
    components: { TheWelcome, Stupid, VueWordOrder, ProvideArrayTest }
  }
);
</script>

<template>
  <main>
    <TheWelcome />
    <Stupid />
    <ProvideArrayTest />
    <VueWordOrder lg="fr" :sentences="['Nenad is smart.', 'Florian is smart too.']" />
    <VueWholeSentence lg="en" :sentences="[{task: 'Florian is what?', solution: 'smart'}, { task: 'Nenad is what?', solution: 'smart' }]" />
  </main>
</template>
