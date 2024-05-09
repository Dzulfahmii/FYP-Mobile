<template>

  <section>
    <k-block-title class="text-xl">Assets</k-block-title>
    <k-list class="strong-ios ">
    <k-list-input label="Asset Name" type="text" placeholder="Your asset name">
    </k-list-input>

    <k-list-input
        v-model="sku"
        label="SKU" type="SKU" placeholder="SKU">
    </k-list-input>

      <k-list-input
          label="Owner"
          type="select"
          dropdown
          default-value="Male"
          placeholder="Please choose..."

      >
        <option v-for="owner in owners" :key="owner.id" :value="owner.id">{{owner.name}}</option>
      </k-list-input>

    <k-list-input 
      v-model="acquisitionDate"
      label="Acquisation Date" type="date" placeholder="Acquisation date of Asset">
    </k-list-input>

    <k-list-input 
      v-model="serialNumber"
      label="Serial Number" type="Serial Number" placeholder="Serial Number of Asset">
    </k-list-input>

    <k-list-input 
      v-model="location"
      label="Physical Location" type="select" placeholder="Location of Asset">
      <option v-for="location in locations" :key="location.id" :value="location.id">{{location.locationName}}</option>
    </k-list-input>

    <k-list-input 
      v-model="category"
      label="Asset Type" type="select" placeholder="Type of Asset">
      <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
    </k-list-input>

    <k-list-input label="Supply By"
                  type="select"
                  dropdown
                  default-value=""
                  placeholder="Please choose..."
    >
      <option v-for="supplier in suppliers" :key="supplier.id" :value="supplier.id">{{supplier.name}}</option>
    </k-list-input>

    <k-list-input 
      v-model="price"
      label="Price" type="number" placeholder="Price">
    </k-list-input>
    <section class="flex gap-2 mx-5 my-4">
      <KButton>Cancel</KButton>
      <KButton @click="createAsset">Apply</KButton>
    </section>
    </k-list>

    </section>


</template>


<script setup>
import {onMounted, ref} from 'vue';
import {

  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton, kBlock as KBlock,
} from "konsta/vue";
import {useRouter} from "vue-router";

const isLoading = ref(false);
const owners = ref([]);
const suppliers = ref([]);
const locations = ref([]);
const categories = ref([]);
const sku = ref('');
const name = ref('');
const owner = ref('');
const acquisitionDate = ref(new Date().toString());
const serialNumber = ref('');
const location = ref('');
const router = useRouter()
const category = ref('');
const supplier = ref('');
const price = ref(0);


function getOwners(){
  fetch('https://localhost:7043/Owner/GetOwners', {
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
  fetch('https://localhost:7043/Supplier/GetSuppliers', {
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
  fetch('https://localhost:7043/Location/GetLocations', {
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
  fetch('https://localhost:7043/Category/GetCategories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    categories.value = data;
  });

  async function createAsset() {
    fetch('https://localhost:7043/Asset/CreateAsset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        sku: sku.value,
        ownerId: owner.value,
        acquisitionDate: acquisitionDate.value,
        serialNumber: serialNumber.value,
        locationId: location.value,
        categoryId: category.value,
        supplierId: supplier.value,
        price: price.value
      })
    }).then(response => {
      console.log(response);
    });
  }
}


onMounted(() => {
  getOwners();
  getSuppliers();
  getLocations();
  getCategories();
});
</script>
  