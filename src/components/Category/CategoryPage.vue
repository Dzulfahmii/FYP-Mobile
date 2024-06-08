<template>
        <section>
        <k-block-title>Category Asset View</k-block-title>
          <kFab
              @click="router.push({ name:'createCategory'})"
              class="fixed right-4-safe ios:top-15-safe material:top-18-safe z-20 bg-green-600"
          >
            <template #icon>
              <img :src="PlusIcon" alt="plus icon" />
            </template>
          </kFab>
        <kCard class ="block overflow-x-auto mt-8">
            <k-table>
                <k-table-head>
                    <k-table-row header>
                        <k-table-cell header> CATEGORY NAME</k-table-cell>
                    </k-table-row>
                </k-table-head>
                <k-table-body>
                    <k-table-row v-for="category in categories" >
                        <k-table-cell @click="router.push({ name:'category' ,params:{id:category.id}})">{{ category.name }}</k-table-cell>
                    </k-table-row>
                    </k-table-body>
            </k-table>
        </kCard>
        </section>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {
  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton,
    kCard,
    kTable,
    kTableHead,
    kTableBody,
    kTableRow,
    kTableCell,
    kPage,
    kNavbar,
    kFab,


} from "konsta/vue";
import PlusIcon from '../../assets/plus-large-svgrepo-com.svg'
import {useRouter} from "vue-router";
import category from "./Category.vue";

const categories = ref([]);
const router = useRouter();
function getCategories(){
  fetch('http://api-asset.zapzyntax.online/Category/GetCategories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    categories.value = data;
  });
}

onMounted(() => {
  getCategories();
});

</script>