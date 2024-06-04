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
    <k-list >
      <k-list-input :value="name" @input="e => {name = e.target.value;}" label="Asset Name" type="text" placeholder="Category Name">
      </k-list-input>
    <k-button @click="createCategory">Apply</k-button>
    </k-list>
  </section>
</template>

<style scoped>

</style>