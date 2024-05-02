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
function getAssets(){
  fetch('https://localhost:7043/Assets/GetAssets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    assets.value = data;
  });
}

onMounted(() => {
  getAssets();
});

</script>

<template>
  <section class="px-2">
    <k-block-title class="text-xl">Assets</k-block-title>
    <k-list>
    <div class="bg-lime-300 px-3 py-2 mx-4 my-3 rounded-md flex justify-center">
      <div>
        <h1 class="text-2xl font-bold text-center" >51238</h1>
        <span>Total Assets</span>
    </div>
    </div>
      <div class="px-5">
        <k-list-input placeholder="Search" class="-mx-4"></k-list-input>
        <k-button @click="()=>router.push({name:'CreateAsset'})" class="flex-1" outline>Create Asset</k-button>
      </div>

      <section>
        <k-card  class=" flex flex-col ">
          <section class="flex flex-col gap-1 p-1">
            <h1 class="font-bold text-lg">
              Asset1
            </h1>
            <p class="font-bold">
              Remarks:
              <span class="font-normal">
                Good Condition
              </span>
            </p>
            <div class="flex gap-2 items-center w-full">

              <p class="font-bold">Location: <span class="font-normal">Belakang Rumah</span></p>
            </div>
            <k-button class="w-full mx-auto" outline >View</k-button>
          </section>

        </k-card>
      </section>
    </k-list>

  </section>
</template>

<style scoped>

</style>