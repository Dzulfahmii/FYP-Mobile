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
      <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
        <button @click="logout" >Logout</button>

      </nav>
      <k-navbar title="My App" />
      <RouterView />
    </k-page>
  </k-app>
</template>

<style scoped>

</style>