<script setup>
import { ref } from 'vue'
import {kBlockTitle,kButton,kCard,kLink} from "konsta/vue";
import {useRouter} from "vue-router";
import AssetScan from "./AssetScan/AssetScan.vue";
import {Capacitor} from "@capacitor/core";

defineProps({
  msg: String,
})

const count = ref(0)
const router = useRouter()

async function goToSupplier() {
  console.log('Go to Supplier');
  await router.push({ name: 'Suppliers' });
} // This will navigate to the 'Suppliers' route}

async function getExcel() {
  fetch('http://api-asset.zapzyntax.online/Assets/GetAssetExcel', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.blob();
  }).then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'assets.xlsx'; // or any other filename you want
    a.click();
  });
}

</script>

<template>
  <div>

    <section class=" my-10 md:lg:grid md:lg:grid-cols-2  place-items-stretch gap-1 ">

      <k-card class="shadow border border-slate-200"    header="Asset | " footer-divider >
        <template #header>
          <k-link class="" @click="async ()=> await router.push({name:'Assets'})" >View</k-link>
        </template>
        An overview of assets
      </k-card >
      <k-card class="shadow border border-slate-200"  header="Suppliers | ">
        <template #header>
          <k-link @click="goToSupplier" >View</k-link>
        </template>
        Manage suppliers and vendor information
      </k-card>
      <k-card class="shadow border border-slate-200" v-if="Capacitor.isNativePlatform()" header="Asset Scan | ">
        <template #header>
          <k-link @click=" async () => {

            await router.push({name:'Scanner'})}">View</k-link>
        </template>
        Scan assets using QR codes
      </k-card>
      <k-card class="shadow border border-slate-200" header="Reports | ">
        <template #header>
          <k-link @click="async ()=> await router.push({name:'Reports'})">View</k-link>
        </template>
        Generate and view reports
      </k-card>
      <k-card class="shadow border border-slate-200" header="Category | ">
        <template #header>
          <k-link @click="async ()=> await router.push({name:'categories'})">View</k-link>
        </template>
        Manage asset categories
      </k-card>
      <k-card  class="shadow border border-slate-200" header="Location | ">
        <template #header>
          <k-link @click="async ()=> await router.push({name:'Location'})">View</k-link>
        </template>
        Manage asset locations
      </k-card>
      <k-card class="shadow border border-slate-200" v-if="()=> !Capacitor.isNativePlatform() "  header="QR Generator | ">
        <template #header>
          <k-link @click="async ()=> await router.push({name:'Qr'})">View</k-link>
        </template>
        Generate QR codes for assets
      </k-card>
      <k-card class="shadow border border-slate-200" v-if="()=> !Capacitor.isNativePlatform() "  header="Excel Export | ">
        <template #header>
          <k-link @click="getExcel">Download</k-link>
        </template>
        Get Excel file of assets
      </k-card>

    </section>

  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
