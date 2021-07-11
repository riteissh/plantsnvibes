import Vue from 'vue';
import Router from 'vue-router';
//import firebase from 'firebase'
import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';
import TaskDetail from '@/pages/Dashboard/TaskDetail';

// Charts
import ChartsPage from '@/pages/Charts/Charts';

// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';
import store from './store';


Vue.use(Router);

const router = new Router({
  //mode: 'history',
  //base: '/#',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: '/task-detail/:id-:name',
          name: 'TaskDetail',
          component: TaskDetail
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  /*const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = this.$store.getters.user
  console.log(currentUser)
  if(requiresAuth && !currentUser) {
      next("/login")
  } else if(requiresAuth && currentUser) {
      next()
  }else{
      next()
  }*/
  if (to.matched.some(record => record.meta.requiresLogin) && store.state.user.authenticated == false) {
    store.commit("setGlobalError", "You need to log in before you can perform this action.")
    next("/Login")
} else {
    next()
}
})

export default router
