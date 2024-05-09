<template>
    <k-page>
        <k-navbar title="REPORT" />
        <k-block-title>Report Asset View</k-block-title>
        <div class ="block overflow-x-auto mt-8">
            <k-table>
                <k-table-head>
                    <k-table-row header>
                        <k-table-cell header> SKU</k-table-cell>
                        <k-table-cell header class="text-right"> DATE </k-table-cell>
                        <k-table-cell header class="text-right"> ISSUES </k-table-cell>
                        <k-table-cell header class="text-right"> REMARKS BY </k-table-cell>
                    </k-table-row>
                </k-table-head>
                <k-table-body>
                    <k-table-row>
                        <k-table-cell>A55356</k-table-cell>
                        <k-table-cell class="text-right">5/7/2024</k-table-cell>
                        <k-table-cell class="text-right">Broken</k-table-cell>
                        <k-table-cell class="text-right">Sulaiman</k-table-cell>
                    </k-table-row>
                    <k-table-row>
                        <k-table-cell>R43563</k-table-cell>
                        <k-table-cell class="text-right">6/8/2024</k-table-cell>
                        <k-table-cell class="text-right">Faulty Screen</k-table-cell>
                        <k-table-cell class="text-right">Izwan</k-table-cell>
                    </k-table-row>
                    <k-table-row>
                        <k-table-cell>U75743</k-table-cell>
                        <k-table-cell class="text-right">3/9/2024</k-table-cell>
                        <k-table-cell class="text-right">Missing Keyboard</k-table-cell>
                        <k-table-cell class="text-right">Ismail</k-table-cell>
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

const reports = ref([]);
const router = useRouter();
function getReports(){
  fetch('https://localhost:7043/Assets/GetOwners', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    reports.value = data;
  });
}

onMounted(() => {
  getReports();
});

</script>