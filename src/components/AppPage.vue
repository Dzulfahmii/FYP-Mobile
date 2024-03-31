<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { kApp, kPage, kNavbar,kList,kListItem } from "konsta/vue";
const router = useRouter();
const showMenu = ref(false);

const toggleMenu = () => {
  console.log('Toggle Menu');
  showMenu.value = !showMenu.value;
};

const logout = () => {
  localStorage.removeItem('authenticated');
  router.push('/login');
};
</script>

<template>
  <k-app theme="material">
    <k-page>
      <k-navbar title="AMS">
        <div @click="toggleMenu" class="hamburger-menu cursor-pointer m-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>


      </k-navbar>
      <!-- Menu -->
      <transition name="translateX">
        <div v-show="showMenu"  class="absolute left-0  menu h-full w-56 bg-zinc-100 ">
          <!-- Your menu items go here -->
          <k-list >
            <k-list-item @click="" link title="Assets" />
            <k-list-item link title="Suppliers" />
            <k-list-item @click="logout" link title="Logout" />

          </k-list>
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
  position: absolute;
  right: 0;
  top: 0;
}


.translateX-enter-active,
.translateX-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.translateX-enter-to,
.translateX-leave-from {
  transform: translateX(0);
}

.translateX-enter-from,
.translateX-leave-to {
  transform: translateX(-100%);
}


</style>
