<template>

    <k-block-title>New Asset</k-block-title>
      <k-list-input label="Asset Name" type="text" placeholder="Your asset name">
      </k-list-input>

      <k-list-input
        label="SKU" type="SKU" placeholder="SKU">
      </k-list-input>

      <k-list-input label="Owner" type="Owner" placeholder="Asset Owner"> 
      </k-list-input>

      <k-list-input label="Acquisation Date" type="Acquisation Date" placeholder="Acquisation date of Asset">
        </k-list-input>

     <k-list-input label="Serial Number" type="Serial Number" placeholder="Serial Number of Asset">
        </k-list-input>

        <k-list-input label="Physical Location" type="Physical Location" placeholder="Location of Asset">
        </k-list-input>
    
        <k-list-input label="Asset Type" type="Asset Type" placeholder="Type of Asset">
        </k-list-input>

        <k-list-input label="Supply By" type="Supply By" placeholder="Asset supplied by"> 
        </k-list-input>

        <k-list-input label="Price" type="Price" placeholder="Price">
        </k-list-input>

        <KButton>Cancel</KButton>
        <KButton>Submit</KButton>

  </template>



<script setup>
    import { ref } from 'vue';
    import {
     
      kBlockTitle,
      kList,
      kListInput, kApp as KApp, kButton as KButton,
    } from "konsta/vue";
    import {useRouter} from "vue-router";
    const isLoading = ref(false);
    const router = useRouter()
    </script>
  