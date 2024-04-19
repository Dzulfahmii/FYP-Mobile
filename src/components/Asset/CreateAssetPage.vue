<template>

  <section>
    <k-block-title class="text-xl">Assets</k-block-title>
    <k-list class="strong-ios ">
    <k-list-input label="Asset Name" type="text" placeholder="Your asset name">
    </k-list-input>

    <k-list-input
        label="SKU" type="SKU" placeholder="SKU">
    </k-list-input>

    <k-list-input label="Owner" type="Owner" placeholder="Asset Owner">
    </k-list-input>

    <k-list-input label="Acquisation Date" type="date" placeholder="Acquisation date of Asset">
    </k-list-input>

    <k-list-input label="Serial Number" type="Serial Number" placeholder="Serial Number of Asset">
    </k-list-input>

    <k-list-input label="Physical Location" type="Physical Location" placeholder="Location of Asset">
    </k-list-input>

    <k-list-input label="Asset Type" type="Asset Type" placeholder="Type of Asset">
    </k-list-input>

    <k-list-input label="Supply By" type="Supply By" placeholder="Asset supplied by">
    </k-list-input>

    <k-list-input label="Price" type="number" placeholder="Price">
    </k-list-input>
    <section class="flex gap-2 mx-5 my-4">
      <KButton>Cancel</KButton>
      <KButton>Apply</KButton>
    </section>
    </k-list>

    </section>


</template>


<script setup>
import {ref} from 'vue';
import {

  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton, kBlock as KBlock,
} from "konsta/vue";
import {useRouter} from "vue-router";

const isLoading = ref(false);
const router = useRouter()
</script>
  