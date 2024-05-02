<script setup>
import { ref } from 'vue'
import {kBlockTitle,kButton,kCard,kLink} from "konsta/vue";
import {useRouter} from "vue-router";

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

    <section class=" my-10 grid grid-cols-2  place-items-stretch gap-1 ">
      <k-card    outline header="Inventory | ">
        <template #header>
          <k-link>View</k-link>
        </template>
        An overview of inventory items
      </k-card>
      <k-card  outline  header="Asset | " footer-divider >
        <template #header>
          <k-link class="" @click="async ()=> await router.push({name:'Asset'})" >View</k-link>
        </template>
        An overview of assets
      </k-card >
      <k-card outline header="Request | ">
        <template #header>
          <k-link @click="async ()=> await router.push({name:'Report'})">View</k-link>
        </template>
        Submit and track asset requests
      </k-card>
      <k-card outline header="Suppliers | ">
        <template #header>
          <k-link>View</k-link>
        </template>
        Manage suppliers and vendor information
      </k-card>
      <k-card outline header="Maintenance | ">
        <template #header>
          <k-link @click="goToSupplier" >View</k-link>
        </template>
        Schedule and track maintenance tasks
      </k-card>
      <k-card   outline header="Settings | ">
        <template #header>
          <k-link>View</k-link>
        </template>
        Configure application settings
      </k-card>

    </section>

  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
