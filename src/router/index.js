import { createRouter, createWebHistory } from "vue-router";
import PropertiesPage from "../views/PropertiesPage.vue";
import PropertyDetails from "../views/PropertyDetails.vue";

const routes = [
  { path: "/", component: PropertiesPage },
  {
    path: "/property/:id",
    component: PropertyDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
