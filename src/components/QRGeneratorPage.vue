<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
    kCard,
    kTable,
    kTableHead,
    kTableBody,
    kTableRow,
    kTableCell,
    kPage,
    kNavbar,
    kFab
} from "konsta/vue";
import {useRouter} from "vue-router";

const asset = ref('');
const assets = ref([]);
const getAssets = () => {
  fetch('http://api-asset.zapzyntax.online/Assets/GetAssets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    assets.value = data;
  });
}

const generateQr = async () =>{
  if(asset.value === ''){
    return;
  }
  const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${asset.value}`)
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}


onMounted(() => {
  getAssets();
});
</script>

<template>
  <section>
    <k-block-title class="mx-2 text-xl">QR Code Generator</k-block-title>
    <k-card class="my-10" >
      <k-list>
        <k-list-input label="Asset"
                      type="select"
                      dropdown
                      default-value="assets[0]"
                      placeholder="Please choose..."
                      :value="asset"
                      @input="e => {
                    asset = e.target.value;
                  }"
        >
          <option value="">Choose Asset</option>
          <option v-for="asset in assets" :key="asset.id" :value="asset.id">{{asset.assetName}}</option>
        </k-list-input>      </k-list>
      <section class="flex gap-2 mx-5 my-4">
        <KButton @click="generateQr">Generate</KButton>
      </section>
    </k-card>
  </section>
</template>

<style scoped>

</style>