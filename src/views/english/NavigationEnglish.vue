<template>
<div>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>N°</th>
        <th>Titre</th>
        <th>Autheur</th>
      </tr>
    </thead>
    <tbody>

    
    <tr>
        <td>4</td>
        <td><router-link to="/en/english/shortstories/belovedrabbit">The beloved rabbit has gone</router-link></td>
        <td>Flori10</td>
      </tr>

    <tr>
        <td>3</td>
        <td><router-link to="/en/english/shortstories/advertisementwithturtoises">Advertisement with turtoises</router-link></td>
        <td>Flori10</td>
      </tr>

    <tr>
        <td>2</td>
        <td><router-link to="/en/english/shortstories/jealousyandfraud">Jealousy and fraud</router-link></td>
        <td>Flori10</td>
      </tr>

      <tr>
        <td>1</td>
        <td><router-link to="/en/english/books/lifeisnotatoy">Life is not a toy</router-link></td>
        <td>Flori10</td>
      </tr>
    
    <!--
      <tr>
        <td>7</td>
        <td><router-link to="/en/english/shortstories/annaturtoises">Advertisement with turtoises</router-link></td>
        <td>Flori10</td>
      </tr>
    
      <tr>
        <td>6</td>
        <td><router-link to="/en/english/shortstories/thecatdetective">The cat detective</router-link></td>
        <td>Flori10</td>
      </tr>

     <tr>
        <td>5</td>
        <td><router-link to="/en/english/vocabulary/conjunctions">Conjunctions</router-link></td>
        <td>Flori10</td>
      </tr>
    <tr>
        <td>4</td>
        <td><router-link to="/en/english/books/fred/1">A book about Fred</router-link></td>
        <td>Flori10</td>
      </tr>
    <tr>
        <td>1</td>
        <td><router-link to="/en/english/books/rawfood/1">Raw food</router-link></td>
        <td>Flori10</td>
        </tr>
        <tr>
        <td>2</td>
        <td><router-link to="/en/english/grammar/enoughtoo">Enough and Too</router-link></td>
        <td>Flori10</td>
      </tr>
      <tr>
        <td>3</td>
        <td><router-link to="/en/english/grammar/even">Even</router-link></td>
        <td>Flori10</td>
      </tr> -->
    
      
    </tbody>
  </table>

</div>

 
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent( {
  name: "VueEnglish",
  components: {
  
  },

  data() {
    return {
       
    };
  },

  mounted(){
     console.log("The mounted function of Vue english is executed!");


  },
  setup(){
   console.log("The setup function of Vue english is executed!");
  },
  
  
  methods: {
    
  }
});
</script>

<style scoped>



</style>