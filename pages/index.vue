<template>
  <div>
    <h1 class="d-flex justify-content-center fs-3 fw-bold text-secondary">
      Nuxt Koltiva Boilerplate
    </h1>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

// print /api_secret_token on terminal, and replace a nuxt config runtimeConfig
console.log(runtimeConfig.apiSecret);

// print /api on console browser
console.log(runtimeConfig.public.apiBase);
</script>
