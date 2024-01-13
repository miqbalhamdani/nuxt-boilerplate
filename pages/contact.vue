<template>
  <div>
    <h1 class="d-flex justify-content-center fs-3 fw-bold text-secondary">
      Page Contact
    </h1>

    <quasar-q-button color="black" label="Black">Iqbal </quasar-q-button>
  </div>
</template>

<script setup lang="ts">
// $fetch will always call when refresh
const menus = await $fetch('https://www.misteraladin.com/api/generals/homepage-menus')
console.log('menus: ', menus);
</script>