<template>


<form>
  <!-- Email input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" v-model="user.email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <!-- Password input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" v-model="user.password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <!-- Simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <button  type="button" @click="loginClicked2" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
  <!--
<div>

<p>Your email is: {{ user.email }} </p>
<input v-model="user.email" placeholder="Your email" />

<p>Your password is: {{ user.password }} </p>
<input v-model="user.password" placeholder="Your password" />

<p style="color:red" > {{ message }} </p>

<p><button class="btn btn-primary" @click="loginClicked2">Login</button></p>

</div> -->

    
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import type { User } from "@/types/User.ts";
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders, AxiosError } from 'axios';
import { useUserStore } from '@/stores/userStore.ts';

const userStore = useUserStore();
const user = ref<User>({name:"",email:"",password:""});
const message = ref<string>("");
const localStorage = inject("localStorage") as any;

     
function loginClicked2(){
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
    console.log(data);
    const searchResponse: AxiosResponse = await client.post(`/api/login`, data, config);
    console.log( searchResponse.data);

    console.log("Here is the token:");
    console.log( searchResponse.data.token );
    localStorage.setItem("token", searchResponse.data.token );
    userStore.updateUser();

    message.value = "You have successfully logged in!";
  } catch(e) {
    const error = e as AxiosError;
      console.log(error.status);
      console.log(error);
      message.value = ( ( (error.response) as any).data.message ) as string;
  }  
})();
     }
 
</script>

<style scoped>

form {
  width: 40%;
}

</style>