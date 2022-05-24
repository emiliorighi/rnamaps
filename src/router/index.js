import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';

const organismComponent = () => import('../views/Organism.vue')
const jBrowseComponent = () => import('../views/JBrowse.vue')


const routes = [
  {
    path: "/",
    name: "H¡home",
    component: Home,
  },
  {
    path: "/:organism",
    name: "organism",
    component: organismComponent,
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