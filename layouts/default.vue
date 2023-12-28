<template>
  <main>
    <Sidebar />
    <div class="content-ds">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
    <Header />
  </main>
</template>

<style lang="scss" scoped>
.content-ds {
  width: 100%;
  position: relative;
  top: 91px;
  max-width: calc(100% - 240px);
  margin-left: auto;
  margin-right: 0;
  padding: 20px;
}
</style>
