
<template>
    <section>
        <k-block-title class= "mx-2 text-xl">Asset Information</k-block-title>

    <k-list strong  inset>
      <div class="my-5 mx-5">
        <k-button @click="()=>router.push({name:'EditAsset', params:{id:asset.id}})" class="" outline>Edit</k-button>

      </div>
      <k-list-item class="font-bold border-b" title="Asset Name" >
        <template #inner>
            <p class="font-normal">{{ asset?.assetName ?? 'Not Available' }}</p>
        </template>
      </k-list-item>
      <k-list-item class="font-bold border-b"    title="SKU:" >
        <template  #inner>
            <p class="font-normal"> {{  asset?.sku ?? 'Not Available' }}</p>
        </template>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Owner: " >
        <template  #inner>
            <p class="font-normal"  >{{ owner.name ?? "Not Available" }}</p>
        </template>
      </k-list-item>
      <k-list-item  class="font-bold border-b" title="Acquisition Date: " >
        <template  #inner>
            <p class="font-normal">{{ asset?.purchaseDate ?? 'Not Available'}}</p>
        </template>
      </k-list-item>
        <k-list-item class="font-bold border-b" title="Serial Number: " >
            <template  #inner>
                <p class="font-normal">{{ asset?.serialNo ?? 'Not Available'}}</p>
            </template>
        </k-list-item>
        <k-list-item class="font-bold border-b" title="Physical Location: " >
            <template  #inner>
                <p class="font-normal">{{ location?.locationName ?? 'Not Available' }}</p>
            </template>
        </k-list-item>
        <k-list-item class="font-bold border-b" title="Asset Type: " >
            <template  #inner>
                <p class="font-normal"> {{ category?.name ?? 'Not Available' }} </p>
            </template>
        </k-list-item>
        <k-list-item class="font-bold border-b" title="Supply by: " >
            <template  #inner>
                <p class="font-normal">{{ supplier?.name ?? 'Not Available' }}</p>
            </template>
        </k-list-item>
        <k-list-item  class="font-bold border-b"title="Price: " >
            <template  #inner>
                <p class="font-normal">{{ asset?.price ?? 'Not Available' }}</p>
            </template>
        </k-list-item>
        </k-list>   
    </section>


</template>





<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListItem,
    kApp as KApp, kButton as KButton,
    kPage,
    kNavbar


} from "konsta/vue";
import {useRouter} from "vue-router";
const owner = ref([]);
const supplier = ref([]);
const location = ref([]);
const category = ref([]);
const asset = ref();
const router = useRouter();
function getOwners(ownerId){
  fetch('http://api-asset.zapzyntax.online/Owner/GetOwner/' + ownerId
      , {
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

function getSuppliers(supplierId){
  fetch('http://api-asset.zapzyntax.online/Supplier/GetSupplier/'+supplierId, {
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

function getLocations(locationId){
  fetch('http://api-asset.zapzyntax.online/Location/GetLocation/'+locationId , {
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

function getCategory(categoryId){
  fetch('http://api-asset.zapzyntax.online/Category/GetCategory/'+categoryId, {
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

async function getAsset(){
  let res = await fetch('http://api-asset.zapzyntax.online/Assets/GetAsset/'+router.currentRoute.value.params.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(res.status === 200){
    let data = await res.json();
    asset.value = data;
    getOwners(asset.value.ownerId);
    getSuppliers(asset.value.supplierId);
    getLocations(asset.value.locationId);
    getCategory(asset.value.categoryId);
  }
  else{

    console.log('Error');
    await router.push({name:'Assets'});
  }

}

onMounted(() => {
  getAsset();

});

</script>