<template>
<div>

<p>Your mail is: {{ user.mail }} </p>
<input v-model="user.mail" placeholder="Your mail" />

<p>Your password is: {{ user.password }} </p>
<input v-model="user.password" placeholder="Your password" />

<p style="color:red" > {{ message }} </p>

<p><button class="btn btn-primary" @click="loginClicked2">Login</button></p>

</div>

    
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import type { User } from "@/types/User.ts";
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders, AxiosError } from 'axios';

export default defineComponent({
  name: "LoginVue",
  components: {
  
  },
  setup(){
     const user = ref<User>({name:"",mail:"",password:""});
     const message = ref<string>("");
     const localStorage = inject("localStorage") as any;
     return {user, message, localStorage };
   
  },
  mounted(){
    console.log("Mounted function of vue-home is executed!");
    console.log(this.$route);
  },
  
  
  methods: {
     loginClicked2(){
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
    const data = { "email": this.user.mail, "password": this.user.password };
    const searchResponse: AxiosResponse = await client.post(`/api/login`, data, config);
    console.log( searchResponse.data);

    console.log("Here is the token:");
    console.log( searchResponse.data.token );

    this.localStorage.setItem("token", searchResponse.data.token );

    this.message = "You have successfully logged in!";
  } catch(e) {
    const error = e as AxiosError;
      console.log(error.status);
      console.log(error);
      this.message = ( (error.response) as any).data.message;
  }  
})();
     },

     loginClicked(){
        console.log("The login button was clicked!");
       
          const client = axios.create({
  baseURL: 'http://localhost:8080',
});

type emailOwner = {
 email: string,
 password: string
};

let mailNotTakenYet = true;


(async () => {
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
            console.log(`A user with the email {this.user.mail} exists!`);
            mailNotTakenYet = false;
            if( owner.password == this.user.password ){
              this.message = "You have successfully logged in";
            }
            else {
              this.message = `A user with that mail exists but the password is wrong!`;
            }
        }
    });

    console.log( { mailNotTakenYet });
    if( mailNotTakenYet ) {
      this.message = "This user doesn't exist in the database!";
    }

   
  } catch(err) {
    console.log(err);
    console.log("False is returned because an error occured!");
  }  
})();

   


     } //end of loginClicked
  } //end of methods
 
} );
</script>

<style scoped>


</style>