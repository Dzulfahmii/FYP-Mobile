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
async function getAssets(){
  let res = await fetch('http://api-asset.zapzyntax.online/Assets/GetAssets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(res.ok){
    assets.value = await res.json();
  }
}

async function deleteAsset(asset){
  let res = await fetch('http://api-asset.zapzyntax.online/Assets/DeleteAsset/' + asset.id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

if(res.ok){
    alert('Asset Deleted')
    assets.value = assets.value.filter(a => a.id !== asset.id);
    await getAssets();
  }

}

onMounted(() => {
  getAssets();
});

</script>

<template>
  <section class="px-2">

    <k-block-title class="mx-2 text-xl">

      Assets
    </k-block-title>
    <k-list>
    <div class="bg-lime-400 border px-3 py-2 mx-5 my-3 rounded-md flex justify-center">
      <div>
        <h1 class="text-2xl font-bold text-center" >{{ assets.length }}</h1>
        <span>Total Assets</span>
    </div>
    </div>
      <div class="px-5">
        <k-list-input placeholder="Search" class="-mx-4"></k-list-input>
        <k-button @click="()=>router.push({name:'CreateAsset'})" outline class="flex-1 border border-gray-300" >Create Asset</k-button>
      </div>

      <section v-for="asset in assets" :key="asset.id" class="">
        <k-card   class="shadow flex flex-col border border-zinc-200">
          <section class="flex flex-col gap-1 p-1">
            <h1 class="font-bold text-lg">
              {{ asset.assetName }}
            </h1>
            <p class="font-bold">
              SKU:
              <span class="font-normal">{{ asset.sku }}</span></p>
            <div class="flex gap-2 items-center w-full">

              <p class="font-bold">
              Physical Location ID: 
              <span class="font-normal"> {{ asset.locationId }}</span></p>
            </div>
            <k-button class="bg-white w-full mx-auto border-gray-300" @click="router.push({name:'Asset',params:{id:asset.id}})" outline >View</k-button>
            <k-button class=" border-none w-full mx-auto bg-red-600 text-white" @click="deleteAsset(asset)" outline >Delete</k-button>
          </section>

        </k-card>
      </section>
    </k-list>

  </section>
</template>

<style scoped>

</style>