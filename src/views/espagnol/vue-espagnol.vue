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
        <td>3</td>
        <td><router-link to="/esp/espagnol/breveshistoires/conejocarlos">El conejo Carlos</router-link></td>
        <td>Flori10</td>
      </tr>
       <tr>
        <td>2</td>
        <td><router-link to="/esp/espagnol/grammaire/comparatifenespagnol">Le comparatif en espagnol</router-link></td>
        <td>Flori10</td>
      </tr>


      <tr>
        <td>1</td>
        <td><router-link to="/esp/espagnol/grammaire/negationenespagnol">La négation en espagnol</router-link></td>
        <td>Flori10</td>
      </tr>
      
    </tbody>
  </table>

</div>

 
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
  name: "VueEspagnol",
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