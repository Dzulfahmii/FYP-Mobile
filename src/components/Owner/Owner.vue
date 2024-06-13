<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
  kCard, kListItem as KListItem,
  kDialog as KDialog,
  kDialogButton as KDialogButton,
} from "konsta/vue";
import {useRouter} from "vue-router";
const dialogOpened = ref(false);
const owner = ref({});
const router = useRouter();
function getOwners(){
  fetch('http://api-asset.zapzyntax.online/Owner/GetOwner/'+ router.currentRoute.value.params.id, {
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
const deleteOwner = () => {
  fetch('http://api-asset.zapzyntax.online/Owner/DeleteOwner/' + router.currentRoute.value.params.id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    router.push({name: 'Owners'});
  });
}
const editOwner = () => {
  fetch('http://api-asset.zapzyntax.online/Owner/UpdateOwner/', {
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
    <k-block-title class="mx-2 text-xl">Owner Asset View</k-block-title>
      <k-card class="my-10" >
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
              <div class="mx-4">
                <k-button class="" @click="editOwner">Apply</k-button>
                <k-button class="bg-red-600 border-none mt-1" @click="() => dialogOpened = true">Delete</k-button>
              </div>
              <k-dialog   :opened="dialogOpened" @close="dialogOpened = false">
                <template #title>Deleting Owner</template>
                Are you sure you want to delete this owner? This action cannot be undone.

                <template #buttons>
                  <k-dialog-button @click="dialogOpened = false">Cancel</k-dialog-button>
                  <k-dialog-button @click="deleteOwner">Delete</k-dialog-button>
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