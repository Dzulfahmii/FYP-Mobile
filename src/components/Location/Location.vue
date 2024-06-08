<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
  kCard, kListItem as KListItem
} from "konsta/vue";
import {useRouter} from "vue-router";

const location = ref([]);
const router = useRouter();
function getLocations(){
  fetch('http://api-asset.zapzyntax.online/Location/GetLocation/' + router.currentRoute.value.params.id ,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    location.value = data;
  });
}

const editLocation = async () =>{
  let res = await fetch('http://api-asset.zapzyntax.online/Location/UpdateLocation/' , {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(location.value)
  })
  if(res.status === 200 || res.status === 204){
    alert('Location Updated Successfully');
    location.value =  await res.json();
  }
  else{
    alert('Location Update Failed' + res.stat);
  }
}

onMounted(() => {
  getLocations();
});

</script>

<template>
  <section>
    <k-block-title class="text-xl">Location Asset View</k-block-title>

    <k-card class="my-15" >
      <k-list>
        <k-list-item class="font-bold border-b" title="Category Name: " >
          <template  #inner>
            <p class="font-normal">{{ location?.locationName ?? 'Not Available' }}</p>
          </template>
        </k-list-item>
        <div class="px-5 ">
          <k-list-input :value="location?.locationName"
                        @input="location.locationName = $event.target.value"
                        placeholder="Edit here" class="-mx-5"></k-list-input>
        </div>
        <div class="flex gap-2 mx-5 my-4">
          <k-button class="px-5  " @click="editLocation">Apply</k-button>
        </div>
      </k-list>
    </k-card>
  </section>
</template>


<style scoped>

</style>