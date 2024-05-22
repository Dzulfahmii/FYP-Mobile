
<template>
    <section>
        <k-block-title>Information</k-block-title>
    <k-list strong  inset>
      <k-list-item class="font-bold border-b" title="Asset Name" >
        <template #inner>
            <p class="font-normal">{{ asset?.name ?? 'Not Available' }}</p>
        </template>
      </k-list-item>
      <k-list-item class="font-bold border-b"    title="SKU:" >
        <template  #inner>
            <p class="font-normal"> R7437378</p>
        </template>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Owner: " >
        <template  #inner>
            <p class="font-normal"  >{{ asset?.ownerId ?? "Not Available" }}</p>
        </template>
      </k-list-item>
      <k-list-item  class="font-bold border-b" title="Acquisition Date: " >
        <template  #inner>
            <p class="font-normal">28-02-2023</p>
        </template>
      </k-list-item>
        <k-list-item class="font-bold border-b" title="Serial Number: " >
            <template  #inner>
                <p class="font-normal">LCF45332532</p>
            </template>
        </k-list-item>
        <k-list-item class="font-bold border-b" title="Physical Location: " >
            <template  #inner>
                <p class="font-normal">Finance Room</p>
            </template>
        </k-list-item>
        <k-list-item class="font-bold border-b" title="Asser Type: " >
            <template  #inner>
                <p class="font-normal">Laptop</p>
            </template>
        </k-list-item>
        <k-list-item class="font-bold border-b" title="Supply by: " >
            <template  #inner>
                <p class="font-normal">Dell Sdn. Bhd.</p>
            </template>
        </k-list-item>
        <k-list-item  class="font-bold border-b"title="Price: " >
            <template  #inner>
                <p class="font-normal">RM2500</p>
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
  let res = await fetch('https://localhost:7043/Assets/GetAsset/'+router.currentRoute.value.params.id, {
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