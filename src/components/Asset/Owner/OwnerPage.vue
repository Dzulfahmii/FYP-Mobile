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
      fetch('https://localhost:7043/Owner/CreateOwner', {
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

<template>
    <k-block-title>Owner</k-block-title>
    <k-list>
        <k-list-input  :value="name"
                       @input="name = $event.target.value" label="Name" type="text" placeholder="Owner of Asset">
        </k-list-input>

        <k-list-input :value="telephoneNumber"
                      @input="telephoneNumber = $event.target.value" label="Telephone Number" type="telephone" placeholder="Telephone number of owner">
        </k-list-input>

    
        <KButton>Cancel</KButton>
        <KButton @click="createOwner" >Apply</KButton>
    </k-list>


</template>