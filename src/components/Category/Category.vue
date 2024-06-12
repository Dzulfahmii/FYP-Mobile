<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
  kCard, kListItem as KListItem
} from "konsta/vue";
import {useRouter} from "vue-router";

const category = ref({});
const router = useRouter();
function getCategories(){
  fetch('http://api-asset.zapzyntax.online/Category/GetCategory/'+ router.currentRoute.value.params.id , {
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

const editCategory = async () =>{
  let res = await fetch('http://api-asset.zapzyntax.online/Category/UpdateCategory/' , {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category.value)
  })
  if(res.status === 200 || res.status === 204){
    alert('Category Updated Successfully');
    category.value =  await res.json();
  }
  else{
    alert('Category Update Failed' + res.stat);
  }


}

onMounted(() => {
  getCategories();
});

</script>

<template>
  <section>
    <k-block-title class="mx-2 text-xl">Category Asset View</k-block-title>
    
      <k-card class="my-10" >
          <k-list>
              <k-list-item class="font-bold border-b" title="Category Name: " >
                  <template  #inner>
                      <p class="font-normal">{{ category?.name ?? 'Not Available' }}</p>
                  </template>
              </k-list-item>
            <div class="px-5 ">
              <k-list-input :value="category?.name"
                            @input="category.name = $event.target.value"
                            placeholder="Edit here" class="-mx-5"></k-list-input>
            </div>
            <div class="flex gap-2 mx-5 my-4">
              <k-button class="px-5  " @click="editCategory">Apply</k-button>
            </div>
          </k-list>
      </k-card>
      

    

      
  </section>
</template>

<style scoped>

</style>