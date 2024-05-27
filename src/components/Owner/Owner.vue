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
function getOwners(){
  fetch('https://localhost:7043/Assets/GetOwners', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    owners.value = data;
  });
}

onMounted(() => {
  getOwners();
});

</script>

<template>
  <section class="px-2">

    <k-block-title class="text-xl">

      Owners
    </k-block-title>
    <k-list>
    <div class="bg-lime-300 px-3 py-2 mx-4 my-3 rounded-md flex justify-center">
      <div>
        <h1 class="text-2xl font-bold text-center" >{{ owners.length }}</h1>
        <span>Total Owners</span>
    </div>
    </div>
      <div class="px-5">
        <k-list-input placeholder="Search" class="-mx-4"></k-list-input>
        <k-button @click="()=>router.push({name:'CreateOwners'})" class="flex-1" outline>Create Owners</k-button>
      </div>

      <section v-for="owner in owners">
        <k-card   class=" flex flex-col ">
          <section class="flex flex-col gap-1 p-1">
            <h1 class="font-bold text-lg">
              {{ owner.ownerName }}
            </h1>
            <p class="font-bold">
              Remarks:
              <span class="font-normal">
                {{ owner.ownerTel_no }}
              </span>
            </p>
            
            <k-button class="w-full mx-auto" @click="router.push({name:'Owner',params:{id:owner.id}})" outline >View</k-button>
          </section>

        </k-card>
      </section>
    </k-list>
  

  </section>
</template>

<style scoped>

</style>