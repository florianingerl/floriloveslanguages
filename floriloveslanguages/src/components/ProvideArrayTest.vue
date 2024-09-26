<script lang="ts">
import { defineComponent } from 'vue';
import UseArrayTest from "./UseArrayTest.vue";
import type { TaskSolution } from "./../types/TaskSolution.ts";

export default defineComponent({
  components : { UseArrayTest }
});
</script>

<template>
  <h1>ProvideArrayTest</h1>
  <UseArrayTest :sentences="[ { task: 'not smart', solution: 'stupid'  }, { task: 'not good', solution: 'bad' }]" />
</template>

<style scoped>

</style>
