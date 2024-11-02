<template>
<div @dblclick="openDict">
   
   <div> <span style="font-weight:bold;">Select your preferred dictionary</span> (You can open the dictionary by double-clicking on any word on this page):
     <select style="display:block;"  v-model="selectedDict">
   <option v-for="dict in dictionaries">{{ dict.name }}</option>
</select>
</div>

<div>
<span style="font-weight:bold;">Please select your mother language</span> (You can translate each paragraph into this language by hovering over the globus):
<div style="{display: inline}" id="google_translate_element"></div>
</div>



    <router-view/>
</div>

 
</template>

<script lang="ts">

import { defineComponent , ref, inject } from "vue";
import type { Dictionary } from "../../../types/Dictionary.ts";

export default defineComponent ({
  name: "VueDict",
  components: {
  
  },
  setup(){
    const selectedDict = ref<string>("The free dictionary French - French");
    const dictionaries = ref<Dictionary[]>([]);
    const window = inject("window") as any;

    return { selectedDict, dictionaries, window };
  },

  watch:{
    $route (to, from){
        console.log(to);
        console.log(from);
        this.setDictionaries();
    }
  } ,

  mounted(){
     
   console.log("The mounted function of VueFr is executed!" );

   this.setDictionaries();

  },
  
  methods: {
    setDictionaries() {
         console.log(this.$route.params.language );
   if( this.$route.params.language === 'french' ){
    this.dictionaries = [ { name: "Word Reference French - German", url: "https://www.wordreference.com/frde/" },
                         { name: "Word Reference French - English", url: "https://www.wordreference.com/fren/" }, 
                         { name: "Larousse French - French", url: "https://www.larousse.fr/dictionnaires/francais/"},
                         { name: "The free dictionary French - French", url: "https://fr.thefreedictionary.com/" }];
   }
   else if( this.$route.params.language === 'english' ){
     this.dictionaries = [ { name: "Word Reference English - German", url: "https://www.wordreference.com/ende/" },
                         { name: "Word Reference English - French", url: "https://www.wordreference.com/enfr/" }, 
                         { name: "Oxford Learner's dictionary English - English", url: "https://www.oxfordlearnersdictionaries.com/definition/english/"},
                         { name: "The free dictionary English - English", url: "https://en.thefreedictionary.com/" }];
   }
   else if( this.$route.params.language === 'deutsch' ){
     this.dictionaries = [ { name: "The free dictionary Deutsch - Deutsch", url: "https://de.thefreedictionary.com/" },
                         { name: "Word Reference Deutsch - Englisch", url: "https://www.wordreference.com/deen/" },
                         { name: "Word Reference Deutsch - Französisch", url: "https://www.wordreference.com/defr/" },
                         { name: "Word Reference Deutsch - Spanisch", url: "https://www.wordreference.com/dees/" },
                         { name: "Pons Deutsch - Russisch", url: "https://de.pons.com/%C3%BCbersetzung-2/deutsch-russisch/" }
                        ];
   }
   else if( this.$route.params.language === 'espagnol' ){
     this.dictionaries = [ { name: "Word Reference Französisch - Spanisch", url: "https://www.wordreference.com/espfr/" },
                           { name: "The free dictionary Espagnol - Espagnol", url: "https://esp.thefreedictionary.com/" },
                         { name: "Word Reference Spanisch - Deutsch", url: "https://www.wordreference.com/espde/" }
                        ];
   }



   this.selectedDict = this.dictionaries[0].name;

    },
    openDict(_event: Event ){
        
         let str = this.window.getSelection().toString() as string;
         let baseUrl = "https://fr.thefreedictionary.com/";
         let i = this.dictionaries.findIndex( (dict: Dictionary ) => dict.name === this.selectedDict );
         if( i!= -1 ){
            baseUrl = this.dictionaries[i].url;
         }
         this.window.open(baseUrl + str, "_blank").focus();
       
        console.log("This script has been executed!");  
    }
  }
});
</script>

<style scoped>



</style>