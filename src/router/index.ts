import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../components/Layout.vue";
import Login from "../views/Login.vue"




Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: Home
  // },
  {
    path:"/layout",
    component:Layout,
  },
  {
    path:"/",
    component:Login
  }

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
