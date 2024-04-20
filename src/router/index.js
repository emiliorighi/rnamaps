import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/HomeNew.vue';

const jBrowseComponent = () => import('../views/JBrowse.vue')
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/jbrowse2",
    name: "jbrowse2",
    component: jBrowseComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;