import MainPage from "@/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";
import PostsList from "@/pages/PostsList";
import About from "@/pages/About";
import PostIdPage from "@/components/PostIdPage/PostIdPage";

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
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
