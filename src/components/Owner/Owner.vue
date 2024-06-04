<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
    kCard
} from "konsta/vue";
import {useRouter} from "vue-router";

const owner = ref([]);
const router = useRouter();
function getOwners(){
  fetch('https://localhost:7043/Assets/GetOwners/'+ router.currentRoute.value.params.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    owner.value = data;
  });
}

onMounted(() => {
  getOwners();
});

</script>
<template>
  <section>
    <k-block-title class="text-xl">Owner Asset View</k-block-title>
    
      <k-card class="my-15" >
          <k-list>
              <k-list-item class="font-bold border-b" title="Owner Name: " >
                  <template  #inner>
                      <p class="font-normal">{{ owner?.name ?? 'Not Available' }}</p>
                  </template>
              </k-list-item>
          </k-list>
      </k-card>
      
      <div class="px-5 ">
        <k-list-input placeholder="Edit here" class="-mx-5"></k-list-input>
      </div>
    
      <section class="flex gap-2 mx-5 my-4">
    <k-button class="px-5  " @click="createOwner">Apply</k-button>

      </section>
  </section>
</template>


<style scoped>

</style>