
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/dashboard', name: 'dashboard', component: () => import('../views/Dashboard.vue') },
  // route level code-splitting
  // this generates a separate chunk (config.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  /* webpackChunkName: "config" */
  { path: '/config', name: 'config', component: () => import('../views/Config.vue') },
  { path: '/login', name: 'login', component: () => import('../views/Login.vue') },
  { path: '/logout', name: 'logout', component: () => import('../views/Login.vue') },
  { path: '/logs', name: 'logs', component: () => import('../views/Logs.vue') },
  { path: '/maintenance', name: 'maintenance', component: () => import('../views/Maintenance.vue') },
  { path: '/statistics', name: 'statistics', component: () => import('../views/Statistics.vue') },
  // { path: '/register', name: 'register', component: RegisterView },
  { path: "/:pathMatch(.*)*", name: 'notFound', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

router.beforeEach(async (to, from, next) => {
  // store.state.login = 'loginOk';
  console.log('before route: from ' + from.name + ' to ' + to.name);
  if (store.state.login == 'loginOk' && to.name == 'logout') {
    await store.dispatch('setLogout');
  }
  if (store.state.login == 'pending' || (to.name !== 'login' && from.name != to.name)) {
    await store.dispatch('getLoginStatus');
  }
  if (store.state.login !== 'loginOk' && to.name !== 'login' && to.name !== 'home') {
    console.log(`redirect to 'login' instead of '${to.name}'.`);
    next({ name: "login" });
  } else {
    console.log(`proceed to '${to.name}' normally.`);
    next();
  }
});

export default router
