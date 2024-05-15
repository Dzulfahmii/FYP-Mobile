<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { kApp, kPage, kNavbar,kList,kListItem } from "konsta/vue";
const router = useRouter();
const showMenu = ref(false);
import { onClickOutside } from '@vueuse/core'

const toggleMenu = () => {
  console.log('Toggle Menu');
  showMenu.value = !showMenu.value;
};
const isLoading = ref(false);
const target = ref(null)
const nav = ref(null)

onClickOutside(target, () => {
  showMenu.value = false;
}, { ignore: [nav] })

const logout = () => {
  localStorage.removeItem('authenticated');
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    router.push('/login');
  }, 1000);
};
</script>

<template>
  <k-app theme="material">
    <k-page>
      <k-navbar title="Asset Management System" class=" " :medium="true">
        <template #left>
          <div ref="nav" @click="toggleMenu" class="z-50 hamburger-menu cursor-pointer m-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>
        </template>



      </k-navbar>
      <!-- Menu -->
      <transition name="translateX">
        <div class="bg-black/50  fixed  h-full w-full  z-50 " v-show="showMenu">
          <transition name="translateNav">

        <div v-show="showMenu" ref="target"   class="z-50  mx-3 my-2 rounded-md  bg-zinc-200  h-fit overflow-hidden menu  w-56  ">
          <!-- Your menu items go here -->

          <k-list >
            <k-list-item @click="()=>{router.push({name:'Dashboard'})}" link title="Home" />
            <k-list-item @click="()=>router.push({name:'Assets'})" link title="Assets" />
            <k-list-item @click="()=>router.push({name:'Owner'})" link title="Owner" />
            <k-list-item @click="()=>router.push({name:'categories'})" link title="Category" />

            <k-list-item @click="()=>router.push({name:'locations'})" link title="Location" />
            <k-list-item @click="logout" link title="Logout" >
              <template #after>
                <span  v-if="isLoading" class=" absolute inset-x-36 loading-animation"></span>
              </template>
            </k-list-item>


          </k-list>
        </div>
          </transition>

        </div>

      </transition>

      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </k-page>
  </k-app>
</template>

<style scoped>

.hamburger-menu {

}


.translateX-enter-active,
.translateX-leave-active {
  transition: opacity 0.1s ;
}

.translateX-enter-to,
.translateX-leave-from {
  opacity: 1;
}

.translateX-enter-from,
.translateX-leave-to {
  opacity: 0;
}
.translateNav-enter-active,
.translateNav-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.translateNav-enter-to,
.translateNav-leave-from {
  transform: translateX(0);
}

.translateNav-enter-from,
.translateNav-leave-to {
  transform: translateX(-100%);
}
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
