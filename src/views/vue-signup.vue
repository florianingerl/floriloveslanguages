<template>
<div>
<p>Your name is: {{ user.name }} </p>
<input v-model="user.name" placeholder="Your name" />

<p>Your mail is: {{ user.mail }} </p>
<input v-model="user.mail" placeholder="Your mail" />

<p>Your password is: {{ user.password }} </p>
<input v-model="user.password" placeholder="Your password" />

<p><button class="btn btn-primary" @click="signupClicked">Sign up</button></p>

</div>

    
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { User } from "@/types/User.ts";
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

export default defineComponent({
  name: "SignUpVue",
  components: {
  
  },
  setup(){
     const user = ref<User>({name:"",mail:"",password:""});
     return {user};
   
  },
  mounted(){
    console.log("Mounted function of vue-home is executed!");
    console.log(this.$route);
  },
  
  
  methods: {
     signupClicked(){
        console.log("The signup button was clicked!");
return; //Not yet implemented!

        

const client = axios.create({
  baseURL: 'https://httpbin.org',
});

(async () => {
  const config: AxiosRequestConfig = {
    headers: {
      'Accept': 'application/json',
    } as RawAxiosRequestHeaders,
  };

  try {
    //const data = {'message': 'Hello World!'};
    const data = {'name': this.user.name, 'mail': this.user.mail, 'password': this.user.password };
    const response: AxiosResponse = await client.post(`/post`, data , config);
    console.log(response.status);
    console.log(response.data.json);    
  } catch(err) {
    console.log(err);
  }  
})();
     }
  },
  computed: {
     
  }
});
</script>

<style scoped>


</style>