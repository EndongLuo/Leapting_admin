export default [
  // 重定向
  {
    path: '/',
    redirect: '/login',
    meta: { isShow: true },
  },
  {
    path:'/login',
    name:'Login',
    component:() => import('@/views/Login.vue')
  },
  {
    path:'/layout',
    name:'layout',
    component:() => import('@/views/layout')
  }
  // {
  //   path: '/home',
  //   component: () => import('@/pages/Home'),
  //   meta: { isShow: true },
  // },
  // {
  //   path: '/search/:keyword?',
  //   component: () => import('@/pages/Search'),
  //   name: 'search',
  //   meta: { isShow: true, title: '搜索' },
  // },
  
];
