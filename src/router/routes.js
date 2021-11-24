
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue')},
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      {path:'', component:() => import('pages/loginPage.vue')},
      {path:'/signUp', component:() => import ('pages/signUpPage.vue')},
      {path:'/signUp2', component:()=> import ('pages/signUpPage2.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
