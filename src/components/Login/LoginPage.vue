<script setup>
import { ref } from 'vue';
import {
  kPage,
  kNavbar,
  kNavbarBackLink,
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
} from "konsta/vue";
import {useRouter} from "vue-router";
import {useLoginService} from "./LoginService.js";
const isLoading = ref(false);
const router = useRouter()
const username = ref('');
const password = ref('');

const loginService = useLoginService();

async function Login() {
  console.log(username.value)
  console.log('Login');
  isLoading.value = true; // Show loading animation

/*
  let result = await loginService.login(username.value, password.value);
*/
  localStorage.setItem('authenticated', "true");

/*  if(result.length > 0){*/
  setTimeout(() => {
    isLoading.value = false; // Hide loading animation after some time (simulating async action)
    router.push('/');
  }, 1000); // Simulating a delay, replace with your actual login logic
/*  }*/


}
</script>

<template>
  <k-app >
    <k-page colors="bgIos"  class="flex flex-col justify-center items-center">
      <section class="flex flex-col border px-5 py-5 rounded-md bg-zinc-100">

      <k-block-title large class="text-2xl mx-auto ">Login</k-block-title>
      <k-list>
        <k-list-input :value="username" class=""  @input="username = $event.target.value" label="Username" type="text" placeholder="Your username"></k-list-input>
        <k-list-input :value="password" class=" mx-auto"  @input="password = $event.target.value" label="Password" type="password" placeholder="Your password"></k-list-input>
      </k-list>
      <k-button @click="Login" tonal-material class="mx-auto max-w-64 bg-lime-400">
        <p class="">Sign In</p>
        <span  v-if="isLoading" class=" absolute inset-x-52 mx-2 loading-animation"></span>
      </k-button>
      <k-button tonal-material clear class="touch-ripple-current mx-auto  max-w-64 text-lime-500">Forgot Password?</k-button>
      </section>

    </k-page>
  </k-app>


</template>

<style scoped>
.loading-animation {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: rgb(163 230 53);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 0.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>