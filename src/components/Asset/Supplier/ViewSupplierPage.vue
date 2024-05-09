<template>
    <k-page>
        <k-navbar title="SUPPLIER" />
        <k-block-title>Supplier Asset View</k-block-title>
        <div class ="block overflow-x-auto mt-8">
            <k-table>
                <k-table-head>
                    <k-table-row header>
                        <k-table-cell header> ASSET SUPPLIER</k-table-cell>
                        <k-table-cell header class="text-right"> TEL. NUMBER </k-table-cell>
                    </k-table-row>
                </k-table-head>
                <k-table-body>
                    <k-table-row>
                        <k-table-cell>Intel</k-table-cell>
                        <k-table-cell class="text-right">0123456789</k-table-cell>
                    </k-table-row>
                    <k-table-row>
                        <k-table-cell>Acer</k-table-cell>
                        <k-table-cell class="text-right">0193885756</k-table-cell>
                    </k-table-row>
                    <k-table-row>
                        <k-table-cell>Dell</k-table-cell>
                        <k-table-cell class="text-right">0183495865</k-table-cell>
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

const suppliers = ref([]);
const router = useRouter();
function GetSuppliers(){
  fetch('https://localhost:7043/Assets/GetSuppliers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    suppliers.value = data;
  });
}

onMounted(() => {
  GetSuppliers();
});

</script>