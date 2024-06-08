
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
            <p class="font-normal"  >{{ asset?.ownerId ?? "Not Available" }}</p>
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
                <p class="font-normal">{{ asset?.locationId ?? 'Not Available' }}</p>
            </template>
        </k-list-item>
        <k-list-item class="font-bold border-b" title="Asset Type: " >
            <template  #inner>
                <p class="font-normal"> {{ asset?.categoryId ?? 'Not Available' }} </p>
            </template>
        </k-list-item>
        <k-list-item class="font-bold border-b" title="Supply by: " >
            <template  #inner>
                <p class="font-normal">{{ asset?.supplierId ?? 'Not Available' }}</p>
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

const asset = ref();
const router = useRouter();
async function GetAsset(){
  let res = await fetch('http://api-asset.zapzyntax.online/Assets/GetAsset/'+router.currentRoute.value.params.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(res.status === 200){
    let data = await res.json();
    asset.value = data;
  }
  else{

    console.log('Error');
    await router.push({name:'Assets'});
  }

}

onMounted(() => {
  GetAsset();
});

</script>