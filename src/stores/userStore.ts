// stores/counter.js
import { defineStore } from 'pinia'
import type { User } from "@/types/User.ts";
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

export const useUserStore = defineStore('user', {
  state: () : { user: User | undefined, localStorage : any  } => {
    return { 
      user: undefined,
      localStorage: undefined
     };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    updateUser() {

const client = axios.create({
  baseURL: 'http://localhost:8080',
});


(async () => {
  const config: AxiosRequestConfig = {
    headers: {
      'Accept': 'application/json',
      'x-auth-token': localStorage.getItem("token")
    } as RawAxiosRequestHeaders,
  };

  try {
    const searchResponse: AxiosResponse = await client.get(`/api/auth/user`, config);
    console.log(searchResponse.status );
    console.log( searchResponse.data);
    console.log(searchResponse.data.message );

    this.user = searchResponse.data;
    console.log("User=");
    console.log(this.user);
    //this.user = JSON.parse( searchResponse.data );

  } catch(err) {
    console.log(err);

    this.user = undefined;
  }  
})();
    },
  },
})