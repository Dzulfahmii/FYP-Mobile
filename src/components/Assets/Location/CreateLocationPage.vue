<template>
<section>
  <k-block-title>Location</k-block-title>
  <k-list>
  <k-list-input :value="locationName"
                @input="locationName = $event.target.value" label="Name" type="text" placeholder="Location of asset"></k-list-input>
  <section class="flex gap-2 mx-5 my-4">
    <KButton>Cancel</KButton>
    <KButton @click="createLocation">Apply</KButton>
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
    const locationName = ref('');
    function createLocation(){
      fetch('https://localhost:7043/Location/CreateLocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          locationName: locationName.value
        })
      }).then(response => {
        console.log(response);
      });
    }
    </script>
  