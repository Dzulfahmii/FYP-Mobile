<template>
    <k-page>
        <k-navbar title="OWNER" />
        <k-block-title>Owner Asset View</k-block-title>
        <div class ="block overflow-x-auto mt-8">
            <k-table>
                <k-table-head>
                    <k-table-row header>
                        <k-table-cell header> OWNER ASSET</k-table-cell>
                        <k-table-cell header class="text-right"> TEL. NUMBER </k-table-cell>
                    </k-table-row>
                </k-table-head>
                <k-table-body>
                    <k-table-row>
                        <k-table-cell>Dzulfahmi</k-table-cell>
                        <k-table-cell class="text-right">0123456789</k-table-cell>
                    </k-table-row>
                    <k-table-row>
                        <k-table-cell>Izwan</k-table-cell>
                        <k-table-cell class="text-right">0193885756</k-table-cell>
                    </k-table-row>
                    <k-table-row>
                        <k-table-cell>Ismail</k-table-cell>
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

const owners = ref([]);
const router = useRouter();
function getOwners(){
  fetch('https://localhost:7043/Assets/GetOwners', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    owners.value = data;
  });
}

onMounted(() => {
  getOwners();
});

</script>