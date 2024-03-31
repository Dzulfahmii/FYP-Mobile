<script setup>
import {kApp as KApp, kNavbar as KNavbar, kPage as KPage} from "konsta/vue";
import {useRouter} from "vue-router";

const router = useRouter();
function logout(){
  localStorage.removeItem('authenticated');
  router.push('/login');
}
</script>

<template>
  <k-app theme="material">
    <k-page>
      <k-navbar title="AMS">
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
        <button @click="logout" >Logout</button>
      </k-navbar>
      <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    </k-page>
  </k-app>
</template>

<style scoped>

</style>