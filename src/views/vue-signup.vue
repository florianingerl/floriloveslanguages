<template>
<div>
<p>Your name is: {{ user.name }} </p>
<input v-model="user.name" placeholder="Your name" />

<p>Your mail is: {{ user.mail }} </p>
<input v-model="user.mail" placeholder="Your mail" />

<p>Your password is: {{ user.password }} </p>
<input v-model="user.password" placeholder="Your password" />

<p v-if="message != ''" style="color:red"> {{ message }} </p>

<p><button class="btn btn-primary" @click="signupClicked">Sign up</button></p>

</div>

    
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { defineComponent, ref } from "vue";
import type { User } from "@/types/User.ts";

export default defineComponent({
  name: "SignUpVue",
  components: {
  
  },
  setup(){
     const user = ref<User>({name:"",mail:"",password:""});
     const message = ref<string>("");
     return {user, message };
   
  },
  mounted(){
    console.log("Mounted function of vue-home is executed!");
    console.log(this.$route);
  },
  
  
  methods: {
     signupClicked(){
        console.log("The signup button was clicked!");
        this.signupIfMailNotTakenYet();
        
      
        
     },

     signupIfMailNotTakenYet(){
        const client = axios.create({
  baseURL: 'http://localhost:8080',
});

type emailOwner = {
 email: string
};

let mailNotTakenYet = true;


return (async () => {
  const config: AxiosRequestConfig = {
    headers: {
      'Accept': 'application/json',
    } as RawAxiosRequestHeaders,
  };
  
  try {
    const searchResponse: AxiosResponse = await client.get(`/api/user`, config);
    //console.log(searchResponse);
    const emailOwners: emailOwner[] = searchResponse.data;
    
    emailOwners.forEach ( (owner: emailOwner) => {
        console.log( owner.email );
        if( owner.email == this.user.mail ) {
            console.log(`A user with the email {this.user.mail} already exists!`);
            mailNotTakenYet = false;
            this.message = `A user with the email ${this.user.mail} already exists`;
        }
    });

    console.log( { mailNotTakenYet });
    if( mailNotTakenYet ) {
      this.signup();
      this.message = "You were successfully inserted into the database!";
    }

   
  } catch(err) {
    console.log(err);
    console.log("False is returned because an error occured!");
    return false;
  }  
})();
     },

     signup(){
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
    const data = { "name": this.user.name,"email": this.user.mail,"password": this.user.password };
    const response: AxiosResponse = await client.post(`/api/user`, data , config);
    console.log(response.status);
    console.log(response.data.json);    
  } catch(err) {
    console.log(err);
  }  
})();
     }
     
       
  }
});
</script>

<style scoped>


</style>