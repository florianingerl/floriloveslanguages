<template>
  <!--
  <div>

    <p class="text-amber-400">Your email is: {{ user.email }} </p>
    <input v-model="user.email" placeholder="Your email" />

    <p>Your password is: {{ user.password }} </p>
    <input v-model="user.password" placeholder="Your password" />

    <p style="color:red"> {{ message }} </p>

    <p><button class="btn btn-primary" @click="loginClicked2">Login</button></p>

  </div> -->
  <AReusableCard
    title="Login"
    description="Enter your credentials to access your account"
    :fields="['name','email', 'password']"
    buttonText="Login"
    :onSubmit="(e) => loginClicked(e)"
  />

</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import type { User } from "@/types/User.ts";
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders, AxiosError } from 'axios';
import { useUserStore } from '@/stores/userStore.ts';
import AReusableCard from '@/components/atoms/cards/AReusableCard.vue';

const userStore = useUserStore();
const user = ref<User>({ name: "", email: "", password: "" });
const message = ref<string>("");
const localStorage = inject("localStorage") as any;


function loginClicked(formData: Record<string, string> ) {
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
      const data = { 'name': formData.name, "email": formData.email, "password": formData.password };
      console.log(data);
      const searchResponse: AxiosResponse = await client.post(`/api/login`, data, config);
      console.log(searchResponse.data);

      console.log("Here is the token:");
      console.log(searchResponse.data.token);
      localStorage.setItem("token", searchResponse.data.token);
      userStore.updateUser();

      message.value = "You have successfully logged in!";
    } catch (e) {
      const error = e as AxiosError;
      console.log(error.status);
      console.log(error);
      message.value = (((error.response) as any).data.message) as string;
    }
  })();
}

</script>

<style scoped></style>