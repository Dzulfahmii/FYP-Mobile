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
    function createOwner(){
      fetch('http://api-asset.zapzyntax.online/Owner/CreateOwner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          telNo: telephoneNumber.value
        })
      }).then(response => {
        alert('Owner created successfully');
        console.log(response);
      });
    }

    </script>

<template>

  <section>
    <k-block-title>Owner</k-block-title>
    <k-list >
        <k-list-input  :value="name"
                       @input="name = $event.target.value" label="Name" type="text" placeholder="Owner of Asset">
        </k-list-input>

        <k-list-input :value="telephoneNumber"
                      @input="telephoneNumber = $event.target.value" label="Telephone Number" type="telephone" placeholder="Telephone number of owner">
        </k-list-input>

      <section class="flex gap-2 mx-5 my-4">
          <KButton>Cancel</KButton>
          <KButton @click="createOwner" >Apply</KButton>
        </section>

    </k-list>
  </section>

</template>