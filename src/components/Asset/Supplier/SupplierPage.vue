<template>
    <k-block-title>Supplier</k-block-title>
    <k-list-input label="Name" type="text" placeholder="Company' name of the asset">
      </k-list-input>

        <k-list-input label="Telephone Number" type="number" placeholder="Telephone number of the supplier">
        </k-list-input>

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