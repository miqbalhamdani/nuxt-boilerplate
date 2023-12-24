<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink class="nav-link" to="/about">About page</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink class="nav-link" to="/contact">Contact page</NuxtLink>
      </li>
    </ul>

    <div class="container">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
