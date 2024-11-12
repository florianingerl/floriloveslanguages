<template>
<div>
<p>Your name is: {{ user.name }} </p>
<input v-model="user.name" placeholder="Your name" />

<p>Your email is: {{ user.email }} </p>
<input v-model="user.email" placeholder="Your email" />

<p>Your password is: {{ user.password }} </p>
<input v-model="user.password" placeholder="Your password" />

<p v-if="message != ''" style="color:red"> {{ message }} </p>

<p><button class="btn btn-primary" @click="signupClicked2">Sign up</button></p>

</div>

    
</template>

<script setup lang="ts">
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders, AxiosError } from 'axios';
import { ref, inject, onMounted } from "vue";
import type { User } from "@/types/User.ts";
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/userStore.ts';

const userStore = useUserStore();

const route = useRoute();
const localStorage = inject("localStorage") as any;

const user = ref<User>({name:"",email:"",password:""});
const message = ref<string>("");
   
onMounted( () => {
    console.log("Mounted function of vue-home is executed!");
    console.log(route);
} );
  
function signupClicked2(){
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
    
    //const data = JSON.stringify(user.value);
    const data = {'name': user.value.name, "email": user.value.email, "password": user.value.password };
    console.log( data );
    
    try {
    const response: AxiosResponse = await client.post(`/api/register`, data , config);
    
    console.log(response.status);
    console.log(response.data);   
    
    console.log("Here comes the token!");
    console.log(response.data.token);

    message.value = "You have registered successfully!";
    
    localStorage.setItem("token", response.data.token );

    userStore.updateUser();

    } catch( e ){
      const error = e as AxiosError;
      console.log(error.status);
      console.log(error);
      message.value = ( ( (error.response) as any).data.message ) as string;
    }


  } catch(err) {
    console.log(err);
  }  
})();
     
}

</script>

<style scoped>


</style>