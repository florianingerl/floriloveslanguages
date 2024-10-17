<template>

  <div v-if="lg === 'de'">
    <Button v-if="show" @click="show = false;">Lösung abdecken</Button>
    <Button v-if="!show" @click="show = true;">Lösung zeigen</Button>
    <slot v-if="show"> </slot>
  </div>
  <div v-else-if="lg === 'fr'">
    <Button v-if="show" @click="show = false;">Couvrir solution</Button>
    <Button v-if="!show" @click="show = true;">Montre-moi la solution</Button>
    <slot v-if="show"> </slot>
  </div>
  <div v-else>
    <Button v-if="show" @click="show = false;">Hide solution</Button>
    <Button v-if="!show" @click="show = true;">Show solution</Button>
    <slot v-if="show"> </slot>
  </div>



</template>

<script lang="ts">

import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Languages } from "../../types/Languages.ts";
import { Button } from '@/components/ui/button';


export default defineComponent({
  name: "VueHideShow",
  components: {
    Button
  },
  props: {
    lg: {
      required: true,
      type: String as PropType<Languages>
    }
  },

  mounted() {
    console.log("The setup function is executed!");

  },
  setup() {
    console.log("The setup function is executed!");
  },

  data() {
    return {
      show: false
    };
  }
});
</script>

<style scoped></style>