<template>
<div>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>N°</th>
        <th>Titel</th>
        <th>Autor</th>
        <th>Schwierigkeitsgrad</th>
        <th>Typ</th>
        <th>Zuletzt bearbeitet</th>
      </tr>
    </thead>
    <tbody> 

      <tr>
        <td>3</td>
       <td><router-link to="/de/deutsch/kurzgeschichten/vogelundeichhoernchen">Ein Vogel und ein Eichhörnchen</router-link></td>
       <td>Flori10</td>
    </tr>

      <tr>
        <td>2</td>
       <td><router-link to="/de/deutsch/kurzgeschichten/vogelmarcia">Mit Vögeln Äpfel teilen</router-link></td>
       <td>Flori10</td>
    </tr>

           <tr>
        <td>1</td>
       <td><router-link to="/de/deutsch/kurzgeschichten/katzemagfisch">Eine Katze, die Fisch mag</router-link></td>
       <td>Flori10</td>
    </tr>


      
    </tbody>
  </table>

</div>

 
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
  name: "VueDeutsch",
  components: {
  
  },

  data() {
    return {
       
    };
  },

  mounted(){
     


  },
  setup(){
   console.log("The setup function is executed!");
  },
  
  
  methods: {
    
  }
});
</script>

<style scoped>

a {
  text-transform: none
}


</style>