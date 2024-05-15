<template>
  <section>

    <k-block-title class="text-xl">Supplier</k-block-title>
  <k-list>

    <k-list-input label="Name" type="text" placeholder="Company name of the asset">
      </k-list-input>

        <k-list-input label="Telephone Number" type="phone" placeholder="Telephone number of the supplier">
        </k-list-input>

    <section class="flex gap-2 mx-5 my-4">
      <KButton>Cancel</KButton>
      <KButton @click="createOwner" >Apply</KButton>
    </section>
  </k-list>
  </section>

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