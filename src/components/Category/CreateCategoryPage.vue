<template>
  <section>
    <k-block-title>Category</k-block-title>
  <k-list>
    <k-list-input :value="categoryName"
                  @input="categoryName = $event.target.value" label="Category" type="text" placeholder="Category of asset"></k-list-input>
  </k-list>
    <section class="flex gap-2 mx-5 my-4">
     <KButton>Cancel</KButton>
     <KButton @click="createCategory">Apply</KButton>
    </section>
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
    const categoryName = ref('');
    function createCategory(){
      fetch('http://api-asset.zapzyntax.online/Category/CreateCategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          name: categoryName.value
        })
      }).then(response => {
        console.log(response);
      });
    }
    </script>