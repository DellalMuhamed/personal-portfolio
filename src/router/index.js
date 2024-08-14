import { createRouter, createWebHistory } from "vue-router";
import aboutView from "../views/aboutView.vue";
import resumeView from "@/views/resumeView.vue";
import portfolioView from "@/views/portfolioView.vue";
import blogView from "@/views/blogView.vue";

const routes = [
  {
    path: "/",
    name: "about",
    component: aboutView,
  },
  {
    path: "/resume",
    name: "resume",
    component: resumeView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: portfolioView,
  },
  {
    path: "/blog",
    name: "blog",
    component: blogView,
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/contactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
