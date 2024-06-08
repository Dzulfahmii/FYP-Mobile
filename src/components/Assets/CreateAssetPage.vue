<template>

  <section>
    <k-block-title class="text-xl">Assets</k-block-title>
    <k-list class="strong-ios ">
    <k-list-input :value="name" @input="e => {
      name = e.target.value;
    }" label="Asset Name" type="text" placeholder="Your asset name">
    </k-list-input>

    <k-list-input
        :value="sku"
        @input="e => {
          sku = e.target.value;
        }"
        label="SKU" type="SKU" placeholder="SKU">
    </k-list-input>

      <k-list-input
          :value="owner"
          @input="e => {
            owner = e.target.value;
          }"
          label="Owner"
          type="select"
          dropdown
          default-value="Male"
          placeholder="Please choose..."

      >
        <option v-for="owner in owners" :key="owner.id" :value="owner.id">{{owner.name}}</option>
      </k-list-input>

    <k-list-input 
      :value="acquisitionDate"
      @input="e => {
        acquisitionDate = e.target.value;
      }"
      label="Acquisation Date" type="date" placeholder="Acquisation date of Asset">
    </k-list-input>

    <k-list-input 
      :value="serialNumber"
      @input="e => {
        serialNumber = e.target.value;
      }"
      label="Serial Number" type="Serial Number" placeholder="Serial Number of Asset">
    </k-list-input>

    <k-list-input
        dropdown

        :value="location"
      @input="e =>
      {
        location = e.target.value;
      }"
      label="Physical Location" type="select" placeholder="Location of Asset"
    >
      <option selected="selected" disabled>Please Select</option>
      <option v-for="location in locations" :key="location.id" :value="location.id">{{location.locationName}}</option>
    </k-list-input>

    <k-list-input 
      :value="category"
      @input="e => {
        category = e.target.value;
      }"
      label="Asset Type" type="select" placeholder="Type of Asset">
      <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
    </k-list-input>

    <k-list-input label="Supply By"
                  type="select"
                  dropdown
                  default-value=""
                  placeholder="Please choose..."
                  :value="supplier"
                  @input="e => {
                    supplier = e.target.value;
                  }"
    >
      <option v-for="supplier in suppliers" :key="supplier.id" :value="supplier.id">{{supplier.name}}</option>
    </k-list-input>

    <k-list-input 
      :value="price"
      @input="e => {
        price = e.target.value;
      }"
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

  function createAsset() {
  fetch('http://api-asset.zapzyntax.online/Assets/CreateAsset', {
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


onMounted(() => {
  getOwners();
  getSuppliers();
  getLocations();
  getCategories();
});
</script>
  