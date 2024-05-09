<template>
    <k-page>
        <k-navbar title="CATEGORY" />
        <k-block-title>Category Asset View</k-block-title>
        <div class ="block overflow-x-auto mt-8">
            <k-table>
                <k-table-head>
                    <k-table-row header>
                        <k-table-cell header> CATEGORY NAME</k-table-cell>
                    </k-table-row>
                </k-table-head>
                <k-table-body>
                    <k-table-row>
                        <k-table-cell>Laptop</k-table-cell>
                    </k-table-row>
                    <k-table-row>
                        <k-table-cell>Printer</k-table-cell>
                    </k-table-row>
                    <k-table-row>
                        <k-table-cell>Notebook</k-table-cell>
                    </k-table-row>
                    </k-table-body>
            </k-table>
        </div>
    </k-page>
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
    kNavbar


} from "konsta/vue";
import {useRouter} from "vue-router";

const categories = ref([]);
const router = useRouter();
function getCategories(){
  fetch('https://localhost:7043/Assets/GetCategories', {
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