import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';

const jBrowseComponent = () => import('../views/JBrowse.vue')
const humanPage = () => import('../views/Human.vue')
const flyPage = () => import('../views/Fly.vue')

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/Human",
    name: "human",
    component: humanPage,
    props:true
  },
  {
    path: "/Fly",
    name: "fly",
    component: flyPage,
    props:true
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