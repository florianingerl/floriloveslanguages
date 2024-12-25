<template>
<div @dblclick="openDict">


   <div> <span style="font-weight:bold;">Select your preferred dictionary</span> (You can open the dictionary by double-clicking on any word on this page):
     <select style="display:block;"  v-model="selectedDict">
   <option v-for="dict in dictionaries">{{ dict.name }}</option>
</select>
</div>





    <router-view/>
</div>

</template>

<script setup lang="ts">
import type { Dictionary } from "@/types/Dictionary.ts";
import { onMounted, watch , inject, ref } from "vue";
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/userStore.ts';
//import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

const userStore = useUserStore();
console.log(userStore);

const route = useRoute();

const selectedDict = ref("The free dictionary French - French");
const dictionaries =  ref<Dictionary[]>([]);
const window = inject("window") as any;

function setDictionaries() {
         console.log(route.params.language );
   if( route.params.language === 'french' ){
    dictionaries.value = [ { name: "Word Reference French - German", url: "https://www.wordreference.com/frde/" },
                         { name: "Word Reference French - English", url: "https://www.wordreference.com/fren/" }, 
                         { name: "Larousse French - French", url: "https://www.larousse.fr/dictionnaires/francais/"},
                         { name: "The free dictionary French - French", url: "https://fr.thefreedictionary.com/" }];
   }
   else if( route.params.language === 'english' ){
     dictionaries.value = [ { name: "Word Reference English - German", url: "https://www.wordreference.com/ende/" },
                         { name: "Word Reference English - French", url: "https://www.wordreference.com/enfr/" }, 
                         { name: "Oxford Learner's dictionary English - English", url: "https://www.oxfordlearnersdictionaries.com/definition/english/"},
                         { name: "The free dictionary English - English", url: "https://en.thefreedictionary.com/" }];
   }
   else if( route.params.language === 'deutsch' ){
     dictionaries.value = [ { name: "The free dictionary Deutsch - Deutsch", url: "https://de.thefreedictionary.com/" },
                         { name: "Word Reference Deutsch - Englisch", url: "https://www.wordreference.com/deen/" },
                         { name: "Word Reference Deutsch - Französisch", url: "https://www.wordreference.com/defr/" },
                         { name: "Word Reference Deutsch - Spanisch", url: "https://www.wordreference.com/dees/" },
                         { name: "Pons Deutsch - Russisch", url: "https://de.pons.com/%C3%BCbersetzung-2/deutsch-russisch/" }
                        ];
   }
   else if( route.params.language === 'espagnol' ){
     dictionaries.value = [ { name: "Word Reference Französisch - Spanisch", url: "https://www.wordreference.com/esfr/" },
                           { name: "The free dictionary Espagnol - Espagnol", url: "https://es.thefreedictionary.com/" },
                         { name: "Word Reference Spanisch - Deutsch", url: "https://www.wordreference.com/esde/" },
                          { name: "Word Reference Spanisch - Englisch", url: "https://www.wordreference.com/esen/" },
                        ];
   }



   selectedDict.value = dictionaries.value[0].name;

}

function openDict(_event: Event ){
        
         let str = window.getSelection().toString() as string;
         let baseUrl = "https://fr.thefreedictionary.com/";
         let i = dictionaries.value.findIndex( (dict: Dictionary ) => dict.name === selectedDict.value );
         if( i!= -1 ){
            baseUrl = dictionaries.value[i].url;
         }
         window.open(baseUrl + str, "_blank").focus();
       
        console.log("This script has been executed!");  
  }

onMounted(() => {
   setDictionaries();
});

watch(route, () => setDictionaries() );

 /*
watch(selectedDict, async (newSelectedDict, _) => {
   if(!userStore.user){
      return;
   }
  
   let dictUrl = "";
   let i = dictionaries.value.findIndex( (dict: Dictionary ) => dict.name === newSelectedDict );
   if( i!= -1 ){
      dictUrl = dictionaries.value[i].url;
   }

   //dictUrl
   //userStore.user.email
   //route.params.language
   //updateDictPref();

})*/


/*
function updateDictPref(){
 
const client = axios.create({
  baseURL: 'http://localhost:8080',
});

(async () => {
  const config: AxiosRequestConfig = {
    headers: {
      'Accept': 'application/json',
    } as RawAxiosRequestHeaders,
  };

  try {
    const data = { "userEmail": userStore.user?.email,"lg": route.params.language };
    const response: AxiosResponse = await client.post(`/api/dictprefbymailandlg`, data , config);
    console.log(response.status);
    console.log(response.data.json);    
  } catch(err) {
    console.log(err);
  }  
})();

}*/

</script>


<style scoped>



</style>