<script setup>

import {
  kButton as KButton, kList as KList,
  kListInput as KListInput
} from "konsta/vue";
import {ref} from "vue";


const sku = ref('');
const reportDate = ref('');
const reportDescription = ref('');
const reportBy = ref('');

function createReport(){
  fetch('http://api-asset.zapzyntax.online/Report/CreateReport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sku: sku.value,
      reportDate: reportDate.value,
      reportDescription: reportDescription.value,
      reportBy: reportBy.value
    })
  }).then(response => {
    return response.json();
  }).then(data => {
    alert('Report Created');
    console.log(data);
  });
}

</script>

<template>
  <section>
    <k-list>
      <k-list-input
          :value="sku"
          @input="sku = $event.target.value"
          label="SKU" type="text" placeholder="#SKU12345"/>
      <k-list-input
          :value="reportDate"
          @input="reportDate = $event.target.value"
          label="Date" type="date" placeholder="Your asset name"/>
      <k-list-input
          :value="reportDescription"
          @input="reportDescription = $event.target.value"
          label="Remark Issues" type="text" placeholder="Your asset name"/>
      <k-list-input
          :value="reportBy"
          @input="reportBy = $event.target.value"
          label="Remarks By" type="text" placeholder="Your asset name"/>
    </k-list>
    <section class="flex gap-2 mx-5 my-4">
      <k-button>Cancel</k-button>
      <k-button @click="createReport" >Submit</k-button>
    </section>

  </section>
</template>

<style scoped>

</style>