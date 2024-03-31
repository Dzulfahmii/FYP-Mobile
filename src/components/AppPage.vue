<script setup>
import {kApp as KApp, kNavbar as KNavbar, kPage as KPage} from "konsta/vue";
function logout(){
  localStorage.removeItem('authenticated');
  window.location.href = '/login';
}
</script>

<template>
  <k-app theme="material">
    <k-page>
      <k-navbar title="My App">
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
        <button @click="logout" >Logout</button>
      </k-navbar>
      <RouterView />
    </k-page>
  </k-app>
</template>

<style scoped>

</style>