import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/samples",
    name: "samples",
    component: () => import('../views/Samples.vue')
  },
  {
    path: "/expression-profiles",
    name: "expression-profiles",
    component: () => import('../views/ExpressionProfiles.vue')
  },
  {
    path: "/jbrowse2",
    name: "jbrowse2",
    component: () => import('../views/GenomeBrowser.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;