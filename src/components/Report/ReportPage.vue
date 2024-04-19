<script setup>

import {
  kButton as KButton, kList as KList,
  kListInput as KListInput
} from "konsta/vue";
</script>

<template>
  <section>
    <k-list>
      <k-list-input label="SKU" type="text" placeholder="#SKU12345"/>
      <k-list-input label="Date" type="date" placeholder="Your asset name"/>
      <k-list-input label="Remark Issues" type="text" placeholder="Your asset name"/>
      <k-list-input label="Remarks By" type="text" placeholder="Your asset name"/>
    </k-list>
    <section class="flex gap-2 mx-5 my-4">
      <k-button>Cancel</k-button>
      <k-button>Submit</k-button>
    </section>

  </section>
</template>

<style scoped>

</style>