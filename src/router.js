import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Jobs from "./pages/Jobs.vue";
import NotFound from "./pages/NotFound.vue";
import Job from "./pages/Job.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/jobs", component: Jobs, name: "jobs" },
  { path: "/jobs/:id", component: Job, name: "job" },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
