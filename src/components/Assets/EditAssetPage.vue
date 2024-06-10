<script setup>
import {onMounted, ref} from 'vue';
import {

  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton, kBlock as KBlock, kListItem as KListItem,
} from "konsta/vue";
import {useRouter} from "vue-router";

onMounted(() => {
  getAsset();
});

const asset = ref();
const router = useRouter();
const owners = ref([]);
const suppliers = ref([]);
const locations = ref([]);
const categories = ref([]);
const getAsset = () => {
  fetch('http://api-asset.zapzyntax.online/Assets/GetAsset/' + router.currentRoute.value.params.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    asset.value = data;
  });
}

function getOwners(){
  fetch('http://api-asset.zapzyntax.online/Owner/GetOwners', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    owners.value = data;
  });
}

function getSuppliers(){
  fetch('http://api-asset.zapzyntax.online/Supplier/GetSuppliers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    suppliers.value = data;
  });
}

function getLocations(){
  fetch('http://api-asset.zapzyntax.online/Location/GetLocations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    locations.value = data;
  });
}

function getCategories() {
  fetch('http://api-asset.zapzyntax.online/Category/GetCategories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    categories.value = data;
  });
}
const editAsset = () => {
  fetch('http://api-asset.zapzyntax.online/Assets/UpdateAsset/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(asset.value)
  }).then(response => {
    alert('Asset updated successfully');
    return response.json();
  }).then(data => {
    asset.value = data;
  });
}


</script>

<template>
  <section>
    <k-block-title class="mx-2 text-xl">Information</k-block-title>
    <k-list strong  inset>
      <k-list-item class="font-bold border-b" title="Asset Name" >
        <template #inner>
          <p class="font-normal">{{ asset?.assetName ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 "> 
        <k-list-input :value="asset?.assetName"
                            @input="asset.assetName = $event.target.value"
                            placeholder="Edit here" class="-mx-5"> </k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b"    title="SKU:" >
        <template  #inner>
          <p class="font-normal"> {{  asset?.sku ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.sku"
                      @input="asset.sku = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Owner: " >
        <template  #inner>
          <p class="font-normal"  >{{ asset?.ownerId ?? "Not Available" }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.ownerId"
                      @input="asset.ownerId = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item  class="font-bold border-b" title="Acquisition Date: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.purchaseDate ?? 'Not Available'}}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.purchaseDate"
                      @input="asset.purchaseDate = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Serial Number: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.serialNo ?? 'Not Available'}}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.serialNo"
                      @input="asset.serialNo = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Physical Location: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.locationId ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.locationId"
                      @input="asset.locationId = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Asset Type: " >
        <template  #inner>
          <p class="font-normal"> {{ asset?.categoryId ?? 'Not Available' }} </p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.categoryId"
                      @input="asset.categoryId = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Supply by: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.supplierId ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.supplierId"
                      @input="asset.supplierId = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item  class="font-bold border-b"title="Price: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.price ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.price"
                      @input="asset.price = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>

                      <div class="flex gap-2 mx-5 my-4">
              <k-button class="px-5  " @click="editAsset">Save</k-button>
            </div>
      </k-list-item>
    </k-list>
  </section>


</template>

<style scoped>

</style>