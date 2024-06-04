<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
    kCard
} from "konsta/vue";
import {useRouter} from "vue-router";

const category = ref({});
const router = useRouter();
function getCategories(){
  fetch('https://localhost:7043/Assets/GetCategory/'+ router.currentRoute.value.params.id , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    category.value = data;
  });
}

onMounted(() => {
  getCategories();
});

</script>

<template>
  <section>
    <k-block-title class="text-xl">Category Asset View</k-block-title>
    
      <k-card class="my-15" >
          <k-list>
              <k-list-item class="font-bold border-b" title="Category Name: " >
                  <template  #inner>
                      <p class="font-normal">{{ category?.name ?? 'Not Available' }}</p>
                  </template>
              </k-list-item>
          </k-list>
      </k-card>
      
      <div class="px-5 ">
        <k-list-input placeholder="Edit here" class="-mx-5"></k-list-input>
      </div>
    
      <section class="flex gap-2 mx-5 my-4">
      <k-button class="px-5  " @click="createCategory">Apply</k-button>
      </section>
      
  </section>
</template>

<style scoped>

</style>