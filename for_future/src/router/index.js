import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/Home"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/Login"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;