import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';

const organismPage = () => import('../views/OrganismNew.vue')
const jBrowseComponent = () => import('../views/JBrowse.vue')
const plot = () => import('../components/ScatterPlot.vue')
const expDetails = () => import('../views/ExperimentDetails.vue')
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/fly",
    name: "fly",
    component: () => import('../views/Fly.vue'),
  },
  {
    path: "/human",
    name: "human",
    props:{organism:'human'},
    component: organismPage,
  },
  {
    path: "/experiments/:id",
    name: "experiments",
    component: expDetails,
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