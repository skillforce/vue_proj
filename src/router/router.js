import MainPage from "@/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";
import PostsList from "@/pages/PostsList";
import About from "@/pages/About";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostsList,
  },
  {
    path: "/test",
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
