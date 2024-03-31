<template>
    <div class="flex justify-center mx-2">
        <kSearchbar class="max-w-3xl mx-2" @search="handleSearch" placeholder="Search suppliers"></kSearchbar>
        <!-- Add your other components and content here -->
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kSearchbar,
    kList,
    kListItem,
  } from 'konsta/vue';

</script>

<style>
/* Add your custom styles here */
</style>