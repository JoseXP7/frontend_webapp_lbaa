import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useToken } from '@/assets/composables/useToken'
const { getToken } = useToken()

const isAuth = (to, from, next) => {
  const token = getToken()
  if (!token) {
    //redirigir al login cuando no esta logueado
    next({ name: 'login' })
  } else {
    next()
  }
}

const isLoginAuth = (to, from, next) => {
  const token = getToken()
  if (token) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sections',
      name: 'sections',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SectionsView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginAdminView.vue'),
      beforeEnter: isLoginAuth,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/myprofile',
      name: 'myprofile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardProfile.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/createUser',
      name: 'createUser',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardCreateUser.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/studentsList',
      name: 'studentsList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardListSt.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/addStudent',
      name: 'addStudent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardAddSt.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/uptStudent',
      name: 'uptStudent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardUptSt.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/sectionsList',
      name: 'sectionsList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardListSec.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/addSection',
      name: 'addSection',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardAddSec.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/adminList',
      name: 'adminList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardListAdm.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/obrerosList',
      name: 'obrerosList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardListObr.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/docentesList',
      name: 'docentesList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardListDoc.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/vigilantesList',
      name: 'vigilantesList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardListVig.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/cocinerosList',
      name: 'cocinerosList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardListCoc.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/addDocente',
      name: 'addDocente',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardAddDoc.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/addAdministrativo',
      name: 'addAdministrativo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardAddAdm.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/addObrero',
      name: 'addObrero',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardAddObr.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/addVigilante',
      name: 'addVigilante',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardAddVig.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/addCocinero',
      name: 'addCocinero',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardAddCoc.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/uptDocente',
      name: 'uptDocente',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardUptDoc.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/uptAdministrativo',
      name: 'uptAdministrativo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardUptAdm.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/uptObrero',
      name: 'uptObrero',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardUptObr.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/uptVigilante',
      name: 'uptVigilante',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardUptVig.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/uptCocinero',
      name: 'uptCocinero',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardUptCoc.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/uploadTask',
      name: 'uploadTask',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardUploadTask.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/deleteStudent',
      name: 'deleteStudent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardDelSt.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/deleteDocente',
      name: 'deleteDocente',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardDelDoc.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/deleteAdministrativo',
      name: 'deleteAdministrativo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardDelAdm.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/deleteObrero',
      name: 'deleteObrero',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardDelObr.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/deleteVigilante',
      name: 'deleteVigilante',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardDelVig.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/deleteCocineros',
      name: 'deleteCocineros',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardDelCoc.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/uploadProject',
      name: 'uploadProject',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardUploProject.vue'),
      beforeEnter: isAuth,
    },
    {
      path: '/uptProject',
      name: 'uptProject',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardUptProyecto.vue'),
      beforeEnter: isAuth,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const isMobileNavActive =
    document.body.classList.contains('mobile-nav-active')
  if (isMobileNavActive) {
    document.body.classList.remove('mobile-nav-active')
  }
  next()
})

export default router
