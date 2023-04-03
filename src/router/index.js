import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path:"/",
    component:()=>import('../views/Login-View/Login-View.vue')
  },
  {
    path:"/:email",
    component:()=>import("../views/User-Content/User-Content.vue"),
    name:"User-Content",
    children:[
      {
        name:"Algorithm-Setting",
        path:"Algorithm-Setting",
        component:()=>import('../views/User-Content/Algorithm-Setting/Algorithm-Setting.vue')
      },
      {
        name:"Model-Training",
        path:"Model-Training",
        component:()=>import('../views/User-Content/Model-Training/Model-Training.vue')
        
      },
      {
        name:"Simulation-Environment",
        path:"Simulation-Environment",
        component:()=>import('../views/User-Content/Simulation-Environment/Simulation-Environment.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
    next();
});
export default router
