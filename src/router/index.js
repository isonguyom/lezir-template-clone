import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 60,
        behavior: "smooth",
      };
    }
  },
});

export default router;
