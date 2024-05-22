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
</script>

<template>
  <section>
    <k-block-title>Information</k-block-title>
    <k-list strong  inset>
      <k-list-item class="font-bold border-b" title="Asset Name" >
        <template #inner>
        </template>
      </k-list-item>
    </k-list>
  </section>
</template>

<style scoped>

</style>