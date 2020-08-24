import store from '../store/store'
const routes = [
  {
    path: '/',
    component: () => import('layouts/NewLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/covid19', component: () => import('pages/Covid19Assistment.vue') },
      { path: '/chatcovid', component: () => import('components/ChatBotCovid.vue') },
      { path: '/freequeries', component: () => import('pages/FreeQueriesPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/NewLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/Login.vue') }
    ],
    beforeEnter (to, from, next) {
      if (!store.state.userDetails.userId){
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/home',
    component: () => import('layouts/NewLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
      { path: '/consultdoctor', component: () => import('pages/ConsultDoctorPage.vue') },
      { path: '/doctornearme', component: () => import('pages/DoctorNearMePage.vue') },
      { path: '/profiledoctor/:doctorId', component: () => import('pages/ProfileDoctorPage.vue') },
      { path: '/listdoctor/:doctypeID/:doctypeType', component: () => import('pages/ListDoctorPage.vue') },
      { path: '/consulthistory', component: () => import('pages/ConsultationHistoryPage.vue') }
    ],
    beforeEnter (to, from, next) {
      if (store.state.userDetails.userId){
        next()
      } else {
        next('/')
      }
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
