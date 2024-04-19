<template>
    <k-block-title>Category</k-block-title>
    <k-list-input label="Category" type="text" placeholder="Category of asset"></k-list-input>
    <KButton>Cancel</KButton>
     <KButton>Apply</KButton>



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