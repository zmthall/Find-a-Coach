import { createRouter, createWebHistory } from "vue-router";
import CoachesPage from "../views/coaches/CoachesPage.vue";
import CoachPage from "../views/coaches/CoachPage.vue";
import CoachRegistration from "../views/coaches/CoachRegistration.vue";
import RequestsPage from "../views/requests/RequestsPage.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "coaches" },
    },
    {
      path: "/coaches",
      name: "coaches",
      component: CoachesPage,
    },
    {
      path: "/coaches/:id",
      name: "coach",
      component: CoachPage,
      props: true,
    },
    {
      path: "/coaches/:id/contact",
      name: "contact",
      component: CoachPage,
      props: true,
    },
    {
      path: "/registration",
      name: "registration",
      component: CoachRegistration,
    },
    {
      path: "/requests",
      name: "requests",
      component: RequestsPage,
    },
    {
      path: "/:notFound(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
  linkActiveClass: "active-link",
});

export default router;
