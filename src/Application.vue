<template>
  <router-view v-slot="{ Component }">
  <transition name="slide" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>

</template>
<script setup>
  import { kApp, kPage, kNavbar, kBlock,    kSearchbar,   kList,
    kListGroup,
    kListItem,
    kButton
 } from 'konsta/vue';
  import { onMounted, ref } from 'vue';
import HelloWorld from './components/Dashboard.vue';
import SupplierPage from './components/SupplierPage.vue';
  const searchQuery = ref('');
  const suppliers = ref([]);

 async function getAssets (){
    let res = await fetch('http://localhost:5066/Supplier/GetSuppliers');
    let data = await res.json();
    suppliers.value = data;
 }

 // onMounted(() => {
 //    getAssets();
 //  });

  function handleSearch(e) {
    searchQuery.value = e.target.value;
  }

  function handleClear() {
    searchQuery.value = '';
  }

  function handleDisable() {
    searchQuery.value = '';
  }
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  scale:  1;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  scale:  0.9;

}

</style>