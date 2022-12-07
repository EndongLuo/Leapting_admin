export default [
  // 重定向
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/layout',
    component: () => import('@/views/layout'),
    meta: { isShow: true ,title: 'leapting'},
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home'),
        meta: { isShow: true ,title: '首页'},

      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test'),
        meta: { isShow: true ,title: 'test'},
      },
      
    ]
  },

  // {
  //   path: '/search/:keyword?',
  //   component: () => import('@/pages/Search'),
  //   name: 'search',
  //   meta: { isShow: true, title: '搜索' },
  // },
  
];
