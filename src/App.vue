<template>
  <k-app theme="material">
    <k-page>
      <k-navbar title="My App" />
      <SupplierPage msg="Hello Vue 3 + Vite" />
    </k-page>
  </k-app>
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

 onMounted(() => {
    getAssets();
  });

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