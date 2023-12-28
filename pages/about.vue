<template>
  <div>
    <h1 class="d-flex justify-content-center fs-3 fw-bold text-secondary">Page About</h1>
  </div>
</template>

<script setup lang="ts">
// useFetch and useAsyncData use keys to prevent refetching the same data.
// so, when you refresh, useFetch will not call again
const query = {
  filter: "active",
  position: "landingpage",
  domain: "desktop",
  page: 1,
  perpage: 5,
};
const { data } = await useFetch("https://www.misteraladin.com/api/generals/banners", { query });
console.log("data: ", data);
</script>
