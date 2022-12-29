import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';

const organismPage = () => import('../views/Organism.vue')
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
    path: "/test",
    name: "test",
    component: () => import('../components/BubbleMatrix.vue'),
  },
  {
    path: "/:organism",
    name: "organism",
    props:true,
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