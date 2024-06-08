<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
    kCard, kListItem as KListItem, kListInput as KListInput
} from "konsta/vue";
import {useRouter} from "vue-router";

const supplier = ref({});
const router = useRouter();
function GetSuppliers(){
  fetch('http://api-asset.zapzyntax.online/Supplier/GetSupplier/' + router.currentRoute.value.params.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    supplier.value = data;
  });
}

const editSupplier = () => {
  fetch('http://api-asset.zapzyntax.online/Supplier/UpdateSupplier/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(supplier.value)
  }).then(response => {
    alert('Supplier updated successfully');
    return response.json();
  }).then(data => {
    supplier.value = data;
  });
}

onMounted(() => {
  GetSuppliers();
});

</script>

<template>
    <section>
      <k-block-title class="text-xl">Supplier Asset View</k-block-title>
        <k-card class="my-15" >
            <k-list>
                <k-list-item class="font-bold border-b" title="Supplier Name: " >
                    <template  #inner>
                        <p class="font-normal">{{ supplier?.name ?? 'Not Available' }}</p>
                    </template>
                  <k-list-input :value="supplier?.name"
                                @input="supplier.name = $event.target.value"  placeholder="Edit here" class=""></k-list-input>
  
                </k-list-item>
              <k-list-item class="font-bold border-b" title="Telephone Number: " >
                <template  #inner>
                  <p class="font-normal">{{ supplier?.telNo ?? 'Not Available' }}</p>
                </template>
                <k-list-input :value="supplier?.telNo"
                              @input="supplier.telNo = $event.target.value"   placeholder="Edit here" class=""></k-list-input>
                <div class="mx-3">
                  <k-button class="" @click= "editSupplier">Apply</k-button>
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
