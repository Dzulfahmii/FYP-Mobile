<template>
    <section>

        <k-block-title class="mx-2 text-xl">Supplier Asset View</k-block-title>
        <kFab
            @click="router.push({ name: 'CreateSupplier' })"
              class="fixed right-4-safe ios:top-15-safe material:top-18-safe z-20 bg-green-600"
          >
            <template #icon>
              <img :src="PlusIcon" alt="plus icon" />
            </template>
          </kFab>
        <k-card class ="block overflow-x-auto mt-8">
            <k-table>
                <k-table-head>
                    <k-table-row header>
                        <k-table-cell header> ASSET SUPPLIER</k-table-cell>
                        <k-table-cell header class="text-right"> TEL. NUMBER </k-table-cell>
                    </k-table-row>
                </k-table-head>
                <k-table-body>
                    <k-table-row v-for="supplier in suppliers">
                        <k-table-cell @click="router.push({ name:'Supplier' ,params:{id:supplier.id}})">
                          {{supplier.name}}</k-table-cell>
                        <k-table-cell class="text-right">{{supplier.telNo}}</k-table-cell>
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
    kNavbar,
    kFab


} from "konsta/vue";
import {useRouter} from "vue-router";
import PlusIcon from '../../assets/plus-large-svgrepo-com.svg'
import supplier from "./Supplier.vue";

const suppliers = ref([]);
const router = useRouter();
function GetSuppliers(){
  fetch('http://api-asset.zapzyntax.online/Supplier/GetSuppliers', {
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