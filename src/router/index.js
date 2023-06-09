import Vue from "vue";
import VueRouter from "vue-router";

import WaterDrink from "../views/WaterDrink.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: WaterDrink,
  },
  {
    path: "/water-drink",
    name: "water-drink",
    component: WaterDrink,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
