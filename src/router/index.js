import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import path from 'path';

const jBrowseComponent = () => import('../views/JBrowse.vue')
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children:[
      {
        path: "",
        redirect: "samples"
      },
      {
        path: "samples",
        name: "samples",
        component: () => import('../views/Samples.vue')
      },
      {
        path: "expression-profiles",
        name: "expression-profiles",
        component: () => import('../views/ExpressionProfiles.vue')
      },
      {
        path: "/jbrowse2",
        name: "jbrowse2",
        component: jBrowseComponent,
      },
    ]
  },
  // {
  //   path: "/samples",
  //   name: "samples",
  //   component: () => import('../views/Samples.vue')
  // },
  // {
  //   path: "/genes",
  //   name: "genes",
  //   component: () => import('../views/Genes.vue')
  // },
  // {
  //   path: "/jbrowse2",
  //   name: "jbrowse2",
  //   component: jBrowseComponent,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;