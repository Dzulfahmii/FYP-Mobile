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
      <KButton @click="createSupplier" >Apply</KButton>
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
    const name = ref('');
    const telephoneNumber = ref('');
    function createSupplier(){
      fetch('http://api-asset.zapzyntax.online/Supplier/CreateSupplier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          telNo: telephoneNumber.value
        })
      }).then(response => {
        console.log(response);
      });
    }
    </script>