<script setup lang="ts">
import KtvButton from "@/components/button/Button.vue";
import KtvTextField from "@/components/form/input/Input.vue";
const runtimeConfig = useRuntimeConfig();

// print /api_secret_token on terminal, and replace a nuxt config runtimeConfig
console.log(runtimeConfig.apiSecret);

// print /api on console browser
console.log(runtimeConfig.public.apiBase);

const { data } = await useAsyncData(async () => {
  const [hotels, patners] = await Promise.all([
    $fetch("https://www.misteraladin.com/api/generals/partners", {
      query: { perpage: 6 },
    }),
    $fetch(
      "https://www.misteraladin.com/api/generals/hotel-popular-destinations"
    ),
  ]);

  return { hotels, patners };
});
console.log("data: ", data);
</script>

<template>
  <div>
    <h1 class="d-flex justify-content-center fs-3 fw-bold text-secondary">
      Nuxt Koltiva Boilerplate
    </h1>

    <KtvButton label="nastar"></KtvButton>
    <KtvButton
      label="nastar"
      type="accent-danger"
      size="extra-large"
    ></KtvButton>
    <KtvButton icon="IconHome"></KtvButton>
    <KtvButton
      label="Button Small"
      leftIcon="IconHome"
      size="small"
    ></KtvButton>
    <KtvButton label="nastar" rightIcon="Icon360"></KtvButton>
    <KtvButton
      label="nastar"
      leftIcon="Icon123"
      rightIcon="IconCube"
      size="large"
    ></KtvButton>
    <KtvTextField />

    <!-- <q-btn color="primary" label="Primary" />
    <QBtn color="secondary" label="Secondary" />
    <LazyQBtn color="amber" glossy label="Amber" /> -->
  </div>
</template>
