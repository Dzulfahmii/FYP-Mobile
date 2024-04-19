<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
    kCard
} from "konsta/vue";

const assets = ref([]);
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
  <section>
    <k-block-title class="text-xl">Assets</k-block-title>
    <k-list>

    <div class="bg-lime-300 px-3 py-2 m-2 rounded-md flex justify-center">
      <div>
        <h1 class="text-2xl font-bold text-center" >51238</h1>
        <span>Total Assets</span>
    </div>
    </div>
      <k-list-input placeholder="Search"></k-list-input>
      <section>
        <k-card v-for="i in assets" class="flex gap-1">
          <section>
            <div class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <h1>{{  }}</h1>
            </div>
            <h1>
              {{ i['id'] }}
            </h1>
            <h1>
              Remarks: Good Condition
            </h1>
            <k-button  outline >View</k-button>

          </section>
        </k-card>
      </section>
    </k-list>

  </section>
</template>

<style scoped>

</style>