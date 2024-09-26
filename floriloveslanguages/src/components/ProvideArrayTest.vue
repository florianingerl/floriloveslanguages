<script lang="ts">
import { defineComponent } from 'vue';
import UseArrayTest from "./UseArrayTest.vue";

export default defineComponent({
  components : { UseArrayTest }
});
</script>

<template>
  <h1>ProvideArrayTest</h1>
  <UseArrayTest :sentences="['sentence 1','sentence 2', 'sentence 3']" />
</template>

<style scoped>

</style>
