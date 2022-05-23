import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';

const humanComponent = () => import('../views/Human.vue')
const flyComponent = () => import('../views/Fly.vue')
const jBrowseComponent = () => import('../views/JBrowse.vue')


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/human",
    name: "Human",
    component: humanComponent,
  },
  {
    path: "/fly",
    name: "Fly",
    component: flyComponent,
  },
  {
    path: "/jbrowse2",
    name: "JBrowse2",
    component: jBrowseComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;