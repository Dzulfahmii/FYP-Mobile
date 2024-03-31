<script setup>
import { ref } from 'vue'
import {kBlockTitle,kButton} from "konsta/vue";
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

    <section class="my-10 grid grid-rows-2 grid-cols-3 gap-5 place-items-center">
      <k-button class="h-20 w-20">Inventory</k-button>
      <k-button class="h-20 w-20">Asset</k-button>
      <k-button class="h-20 w-20">Request</k-button>
      <k-button @click="goToSupplier" class="h-20 w-20">Suppliers</k-button>
      <k-button class="h-20 w-20">Maintenance</k-button>
      <k-button class="h-20 w-20">Settings</k-button>

    </section>

  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
