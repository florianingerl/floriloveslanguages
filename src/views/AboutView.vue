<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handleClick">Please click me</button>
  </div>
</template>

<script lang="ts">
import {defineComponent } from "vue";
import testFunction from "./../utils/test.ts";

export default defineComponent({
  mounted(){
       testFunction();
  },
  methods : {
    handleClick(){
      console.log("The button was clicked!");
      testFunction();
    }
  }
});
</script>

<style>
</style>
