import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "../components/Layout.vue";
import Login from "../views/Login.vue";
import Home from "../views/home/index.vue";
import Member from "../views/member/index.vue";
import Supplier from "../views/supplier/index.vue";
import Goods from "../views/goods/index.vue";
import Staff from "../views/staff/index.vue";
import User from "../views/user/index.vue";
// ==================================================
import Yong from "@/views/user/biao/yong.vue"
import Ding from "@/views/user/biao/ding.vue"
import Guan from "@/views/user/biao/guan.vue"
import Shi from "@/views/user/biao/shi.vue"
import Shang from "@/views/user/biao/shang.vue"
Vue.use(VueRouter);



const routes: Array<RouteConfig> = [
  {
    path : "/login",
    name : "login",
    component : Login
  },
  {
    path : "/",
    name : "layout",
    component : Layout,
    redirect : "/home",
    children : [
      {
        path : "/home",
        name : "home",
        meta : {
          title : "首页"
        },
        component : Home
      }
    ]
  },
  {
    path : "/member",
    name : "member",
    component : Layout,
    children : [
        {
          path : "/",
          component : Member,
          meta : {
            title : "会员管理"
          }
        }
    ]
  },
  {
    path : "/goods",
    name : "goods",
    component : Layout,
    children : [
        {
          path : "/",
          component : Goods,
          meta : {
            title : "商品管理"
          }

        }
    ]
  },
  {
    path : "/supplier",
    name : "supplier",
    component : Layout,
    children : [
        {
          path : "/",
          component : Supplier,
          meta : {
            title : "供应商管理"
          }
        }
    ]
  },
  {
    path : "/staff",
    name : "staff",
    component : Layout,
    children : [
        {
          path : "/",
          component : Staff,
          meta : {
            title : "员工功能"
          }
        }
    ]
  },
  {
    path : "/user",
    name : "user",
    component : Layout,
    children : [
        {
          path : "/",
          component : User,
          meta : {
            title : "数据管理"
          }
        }
    ]
  },
  // =====================
  {
    path : "/yong",
    name : "yong",
    component : Layout,
    children : [
        {
          path : "/",
          component : Yong,
        }
    ]
  },
  {
    path : "/ding",
    name : "ding",
    component : Layout,
    children : [
        {
          path : "/",
          component : Ding,
        }
    ]
  },
  {
    path : "/shi",
    name : "shi",
    component : Layout,
    children : [
        {
          path : "/",
          component : Shi,
        }
    ]
  },
  {
    path : "/guan",
    name : "guan",
    component : Layout,
    children : [
        {
          path : "/",
          component : Guan,
        }
    ]
  },
  {
    path : "/shang",
    name : "shang",
    component : Layout,
    children : [
        {
          path : "/",
          component : Shang,
        }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
