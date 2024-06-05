<script setup>
import {onMounted, ref} from 'vue';
import {

  kBlockTitle,
  kList,
  kListInput, kApp as KApp, kButton as KButton, kBlock as KBlock, kListItem as KListItem,
} from "konsta/vue";
import {useRouter} from "vue-router";
</script>

<template>
  <section>
    <k-block-title>Information</k-block-title>
    <k-list strong  inset>
      <k-list-item class="font-bold border-b" title="Asset Name" >
        <template #inner>
          <p class="font-normal">{{ asset?.name ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 "> 
        <k-list-input :value="asset?.name"
                            @input="asset.name = $event.target.value"
                            placeholder="Edit here" class="-mx-5"> </k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b"    title="SKU:" >
        <template  #inner>
          <p class="font-normal"> {{  asset?.SKU ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.SKU"
                      @input="asset.SKU = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Owner: " >
        <template  #inner>
          <p class="font-normal"  >{{ asset?.ownerId ?? "Not Available" }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.ownerId"
                      @input="asset.ownerId = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item  class="font-bold border-b" title="Acquisition Date: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.purchase_date ?? 'Not Available'}}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.purchase_date"
                      @input="asset.purchase_date = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Serial Number: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.serial_no ?? 'Not Available'}}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.serial_no"
                      @input="asset.serial_no = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Physical Location: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.locationId ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.locationId"
                      @input="asset.locationId = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Asset Type: " >
        <template  #inner>
          <p class="font-normal"> {{ asset?.categoryId ?? 'Not Available' }} </p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.categoryId"
                      @input="asset.categoryId = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item class="font-bold border-b" title="Supply by: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.supplierId ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.supplierId"
                      @input="asset.supplierId = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>
      </k-list-item>
      <k-list-item  class="font-bold border-b"title="Price: " >
        <template  #inner>
          <p class="font-normal">{{ asset?.price ?? 'Not Available' }}</p>
        </template>
        <div class="px-5 ">
        <k-list-input :value="asset?.price"
                      @input="asset.price = $event.target.value"
                      placeholder="Edit here" class="-mx-5"></k-list-input> </div>

                      <div class="flex gap-2 mx-5 my-4">
              <k-button class="px-5  " @click="editAsset">Save</k-button>
            </div>
      </k-list-item>
    </k-list>
  </section>


</template>

<style scoped>

</style>