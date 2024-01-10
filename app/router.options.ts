import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: "index",
      path: "/",
      component: () => import("~/pages/index.vue").then((r) => r.default || r),
    },
    {
      name: "about",
      path: "/about",
      component: () => import("~/pages/about.vue").then((r) => r.default || r),
    },
    {
      name: "contact",
      path: "/contact",
      component: () => import("~/pages/contact.vue").then((r) => r.default || r),
    },
  ],
};