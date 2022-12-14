import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/example",
      name: "example",
      component: () => import("@/views/Example.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/Main.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () =>
            import("@/components/MainComponents/MainDashboard.vue"),
        },
        {
          path: "/sponsor",
          name: "sponsor",
          component: () =>
            import("@/components/MainComponents/MainSponsors.vue"),
        },
        {
          path: "/students",
          name: "students",
          component: () =>
            import("@/components/MainComponents/MainStudents.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
