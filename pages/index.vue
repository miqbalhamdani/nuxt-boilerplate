<template>
  <div>
    <h1 class="d-flex justify-content-center fs-3 fw-bold text-secondary">Nuxt Koltiva Boilerplate</h1>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

// print /api_secret_token on terminal, and replace a nuxt config runtimeConfig
console.log(runtimeConfig.apiSecret); // eslint-disable-line no-console

// print /api on console browser
console.log(runtimeConfig.public.apiBase); // eslint-disable-line no-console

const { data } = await useAsyncData(async () => {
  const [hotels, patners] = await Promise.all([
    $fetch("https://www.misteraladin.com/api/generals/partners", { query: { perpage: 6 } }),
    $fetch("https://www.misteraladin.com/api/generals/hotel-popular-destinations"),
  ]);

  return { hotels, patners };
});
console.log("data: ", data); // eslint-disable-line no-console
</script>
