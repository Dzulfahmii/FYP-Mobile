<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
    kCard
} from "konsta/vue";
import {useRouter} from "vue-router";

const assets = ref([]);
const router = useRouter();
function getReports(){
  fetch('https://localhost:7043/Report/GetReports', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    reports.value = data;
  });
}

onMounted(() => {
  getReports();
});

</script>

<template>
  <section class="px-2">

    <k-block-title class="text-xl">

      Reports
    </k-block-title>
    <k-list>
    <div class="bg-lime-300 px-3 py-2 mx-4 my-3 rounded-md flex justify-center">
      <div>
        <h1 class="text-2xl font-bold text-center" >{{ reports.length }}</h1>
        <span>Total Reports</span>
    </div>
    </div>
      <div class="px-5">
        <k-list-input placeholder="Search" class="-mx-4"></k-list-input>
        <k-button @click="()=>router.push({name:'CreateReports'})" class="flex-1" outline>Create Report</k-button>
      </div>

      <section v-for="report in reports">
        <k-card   class=" flex flex-col ">
          <section class="flex flex-col gap-1 p-1">
            <h1 class="font-bold text-lg">
              {{ asset.SKU }}
            </h1>
            <p class="font-bold">
              Remarks:
              <span class="font-normal">{{ asset.sku }}</span></p>
            <div class="flex gap-2 items-center w-full">

              <p class="font-bold">
              Issues: 
              <span class="font-normal">{{ report.reportIssues }}</span></p>
            </div>
            <k-button class="w-full mx-auto" @click="router.push({name:'Report',params:{id:report.id}})" outline >View</k-button>
          </section>

        </k-card>
      </section>
    </k-list>

  </section>
</template>

<style scoped>

</style>