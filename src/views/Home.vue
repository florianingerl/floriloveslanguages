<template>

<div class="topnav" >
   <router-link :class="{active : route.fullPath.includes('/french') }" to="/fr/french">Français</router-link>
   <router-link :class="{active : route.fullPath.includes('/english') }" to="/en/english">English</router-link>
   <router-link :class="{active : route.fullPath.includes('/deutsch') }" to="/de/deutsch">Deutsch</router-link>
   <router-link :class="{active : route.fullPath.includes('/espagnol') }" to="/esp/espagnol">Espagñol</router-link>
   <!-- <router-link :class="{active : route.fullPath.includes('/informatik') }" to="/informatik">Computer science</router-link> -->
   <div v-if="!userStore.user">
   <router-link class="btn btn-secondary" to="/login">Login</router-link>
   <router-link class="btn btn-primary" to="/signup">Sign up</router-link>
   </div>
   <div v-if="userStore.user">
      You are logged in as {{ userStore.user.name }} and your email is {{ userStore.user.email }} 
   </div>
</div>

<div id="main" style="padding-left:16px">

<p> userStore.user = {{ userStore.user }} </p>
    <div>
<span style="font-weight:bold;">Please select your mother language</span> (You can translate each paragraph into this language by hovering over the globus):
<div style="{display: inline}" id="google_translate_element"></div>
</div>
   
    <router-view></router-view>

</div>
    
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/userStore.ts';

const userStore = useUserStore();
const route = useRoute();

onMounted( () => {
  console.log("Mounted function of vue-home is executed!");
  console.log(route);
});

</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

</style>