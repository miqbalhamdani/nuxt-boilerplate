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
          path: 'category',
          name: 'master.category.index',
          component: () => import("~/pages/master/category/categoryIndex.vue"),
        },
        {
          path: 'category/form',
          name: 'master.category.form',
          component: () => import("~/pages/master/category/categoryForm.vue"),
        },

        {
          path: 'level',
          name: 'master.level.index',
          component: () => import("~/pages/master/level/levelIndex.vue"),
        },
        {
          path: 'level/form',
          name: 'master.level.form',
          component: () => import("~/pages/master/level/levelForm.vue"),
        },
      ],
    },

    // Course
    // {
    //   path: 'course',
    //   name: 'course.index',
    //   component: () => import("~/pages/master/level/levelIndex.vue"),
    // },
    {
      path: '/course/form',
      name: 'course.form',
      component: () => import("~/pages/course/courseForm.vue"),
    },
  ],
};
