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

</script>

<template>
  <div>

    <section class=" my-10 md:lg:grid md:lg:grid-cols-2  place-items-stretch gap-1 ">

      <k-card    header="Asset | " footer-divider >
        <template #header>
          <k-link class="" @click="async ()=> await router.push({name:'Assets'})" >View</k-link>
        </template>
        An overview of assets
      </k-card >
      <k-card  header="Suppliers | ">
        <template #header>
          <k-link @click="goToSupplier" >View</k-link>
        </template>
        Manage suppliers and vendor information
      </k-card>
      <k-card v-if="Capacitor.isNativePlatform()" header="Asset Scan | ">
        <template #header>
          <k-link @click=" async () => {

            await router.push({name:'Scanner'})}">View</k-link>
        </template>
        Scan assets using QR codes
      </k-card>
      <k-card  header="Reports | ">
        <template #header>
          <k-link @click="async ()=> await router.push({name:'Reports'})">View</k-link>
        </template>
        Generate and view reports
      </k-card>
      <k-card  header="Category | ">
        <template #header>
          <k-link @click="async ()=> await router.push({name:'categories'})">View</k-link>
        </template>
        Manage asset categories
      </k-card>
      <k-card  header="Location | ">
        <template #header>
          <k-link @click="async ()=> await router.push({name:'Location'})">View</k-link>
        </template>
        Manage asset locations
      </k-card>
      <k-card v-if="()=> !Capacitor.isNativePlatform() "  header="QR Generator | ">
        <template #header>
          <k-link @click="async ()=> await router.push({name:'Qr'})">View</k-link>
        </template>
        Generate QR codes for assets
      </k-card>
    </section>

  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
