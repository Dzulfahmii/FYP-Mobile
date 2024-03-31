<template>
  <RouterView />
</template>
<script setup>
  import { kApp, kPage, kNavbar, kBlock,    kSearchbar,   kList,
    kListGroup,
    kListItem,
    kButton
 } from 'konsta/vue';
  import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
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
  /* Add your custom styles here */
  .fade-slide-up-enter-active {
    transition: all 0.5s ease;
  }
  .fade-slide-up-leave-active {
    transition: all 0.5s ease;
  }
  .fade-slide-up-enter, .fade-slide-up-leave-to {
    transform: translateY(40px);
    opacity: 0;
  }
</style>