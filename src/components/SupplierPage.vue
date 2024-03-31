<template>
    <div class="flex justify-center mx-2">
    <p>DEBUG</p>
    </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
  import {
    kButton,

    kSearchbar,

  } from 'konsta/vue';
const suppliers = ref([]);
async function getAssets (){
  let res = await fetch('http://localhost:5066/Supplier/GetSuppliers');
  let data = await res.json();
  suppliers.value = data;
}

onMounted(() => {
  getAssets();
});
</script>

<style>
/* Add your custom styles here */
</style>