<template>
    <section>

        <k-block-title class="text-xl mx-2">Owner Asset View</k-block-title>
        <k-card class ="block overflow-x-auto mt-8">
            <k-table>
                <k-table-head>
                    <k-table-row header>
                        <k-table-cell header> OWNER ASSET</k-table-cell>
                        <k-table-cell header class="text-right"> TEL. NUMBER </k-table-cell>
                    </k-table-row>
                </k-table-head>
                <k-table-body>
                    <k-table-row v-for="owner in owners" >
                        <k-table-cell  @click="router.push({ name:'Owner' ,params:{id:owner.id}})">
                          {{ owner.name }}
                        </k-table-cell>
                        <k-table-cell class="text-right">{{ owner.telNo }}</k-table-cell>
                    </k-table-row>
                    </k-table-body>
            </k-table>
        </k-card>
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

const owners = ref([]);
const router = useRouter();
function getOwners(){
  fetch('https://localhost:7043/Owner/GetOwners', {
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