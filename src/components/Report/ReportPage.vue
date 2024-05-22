<template>
    <section>
        <k-block-title>Report Asset View</k-block-title>
        <kCard class ="block overflow-x-auto mt-8">
            <k-table>
                <k-table-head>
                    <k-table-row header>
                        <k-table-cell header> ID</k-table-cell>
                        <k-table-cell header> SKU</k-table-cell>
                        <k-table-cell header class="text-right"> DATE </k-table-cell>
                        <k-table-cell header class="text-right"> ISSUES </k-table-cell>
                        <k-table-cell header class="text-right"> REMARKS BY </k-table-cell>
                    </k-table-row>
                </k-table-head>
                <k-table-body>
                    <k-table-row v-for="report in reports">
                        <k-table-cell>{{report.id}}</k-table-cell>
                        <k-table-cell>{{report.sku}}</k-table-cell>
                        <k-table-cell class="text-right">{{report.reportDate}}</k-table-cell>
                        <k-table-cell class="text-right">{{report.reportDescription}}</k-table-cell>
                        <k-table-cell class="text-right">{{report.reportBy}}</k-table-cell>
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
    kNavbar


} from "konsta/vue";
import {useRouter} from "vue-router";

const reports = ref([]);
const router = useRouter();
function getReports(){
  fetch('https://localhost:7043/Report/GetReports', {
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