<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
    kCard, kListItem as KListItem, kListInput as KListInput,
    kDialog as KDialog,
    kDialogButton as KDialogButton,
} from "konsta/vue";
import {useRouter} from "vue-router";

const supplier = ref({});
const router = useRouter();
const dialogOpened = ref(false);
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



const deleteSupplier = () => {
  //open a modal to confirm delete



  fetch('http://api-asset.zapzyntax.online/Supplier/DeleteSupplier/' + router.currentRoute.value.params.id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    router.push({name: 'Suppliers'});
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
                <div class="mx-4">
                  <k-button class="" @click= "editSupplier">Apply</k-button>
                  <k-button class="bg-red-600 border-none mt-1" @click="() => dialogOpened = true">Delete</k-button>
                </div>
                <k-dialog :opened="dialogOpened" @close="dialogOpened = false">
                  <template #title>Deleting Supplier</template>
                    Are you sure you want to delete this supplier? This action cannot be undone.

                  <template #buttons>
                    <k-dialog-button @click="dialogOpened = false">Cancel</k-dialog-button>
                    <k-dialog-button @click="deleteSupplier">Delete</k-dialog-button>
                  </template>

                </k-dialog>
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
