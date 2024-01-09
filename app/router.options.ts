import type { RouterConfig } from "@nuxt/schema";
import PassThrough from "~/components/PassThrough";

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
      component: () => import("~/pages/about.vue"),
    },
    {
      name: "contact",
      path: "/contact",
      component: () => import("~/pages/contact.vue"),
    },

    // master
    {
      path: "/master",
      component: PassThrough,
      children: [
        {
          // category
          path: 'category',
          component: () => import("~/pages/master/category/categoryIndex.vue"),
          children: [
            {
              path: '',
              name: 'master.category.index',
              component: () => import("~/pages/master/category/categoryIndex.vue"),
            },
            {
              path: 'form',
              name: 'master.category.form',
              component: () => import("~/pages/master/category/categoryForm.vue"),
            },
          ]
        },
        {
          // level
          path: 'level',
          component: () => import("~/pages/master/level/levelIndex.vue"),
          children: [
            {
              path: '',
              name: 'master.level.index',
              component: () => import("~/pages/master/level/levelIndex.vue"),
            },
            {
              path: 'form',
              name: 'master.level.form',
              component: () => import("~/pages/master/level/levelForm.vue"),
            },
          ]
        },

      ],
    },
  ],
};
