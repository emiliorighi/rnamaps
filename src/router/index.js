import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
const jBrowseComponent = () => import('../views/JBrowse.vue')
const humanPage = () => import('../views/Human.vue')
const humanNew = () => import('../views/HumanNew.vue')
const flyNew = () => import('../views/FlyNew.vue')
const orgNew = () => import('../views/OrganismNew.vue')
const plot = () => import('../components/ScatterPlot.vue')
const flyPage = () => import('../views/Fly.vue')
const expDetails = () => import('../views/ExperimentDetails.vue')
const singleGeneExpression = () => import('../views/SingleGeneExpression.vue')
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
    path: "/test-org/:organism",
    name: "test",
    props:true,
    component: orgNew,
  },
  {
    path: "/human",
    name: "human",
    component: humanPage,
  },
  {
    path: "/human-new",
    name: "human-new",
    component: humanNew,
  },
  {
    path: "/fly-new",
    name: "fly-new",
    component: flyNew,
  },
  {
    path: "/fly",
    name: "fly",
    component: flyPage,
  },
  {
    path: '/single-gene-expression',
    name: 'single-gene',
    component: singleGeneExpression
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