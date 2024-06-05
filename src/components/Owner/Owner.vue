<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
  kCard, kListItem as KListItem
} from "konsta/vue";
import {useRouter} from "vue-router";

const owner = ref({});
const router = useRouter();
function getOwners(){
  fetch('https://localhost:7043/Owner/GetOwner/'+ router.currentRoute.value.params.id, {
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

const editOwner = () => {
  fetch('https://localhost:7043/Owner/UpdateOwner/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(owner.value)
  }).then(response => {
    alert('Owner updated successfully');
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
                <k-list-input :value="owner?.name"
                              @input="owner.name = $event.target.value"  placeholder="Edit here" class=""></k-list-input>

              </k-list-item>
            <k-list-item class="font-bold border-b" title="Telephone Number: " >
              <template  #inner>
                <p class="font-normal">{{ owner?.telNo ?? 'Not Available' }}</p>
              </template>
              <k-list-input :value="owner?.telNo"
                            @input="owner.telNo = $event.target.value"   placeholder="Edit here" class=""></k-list-input>
              <div class="mx-3">
                <k-button class="" @click="editOwner">Apply</k-button>
              </div>
            </k-list-item>
          </k-list>
      </k-card>
      
      <div class="px-5 ">
      </div>
    
      <section class="flex gap-2 mx-5 my-4">

      </section>
  </section>
</template>


<style scoped>

</style>