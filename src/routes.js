import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/notFound';

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundPage,
    },
  ],
});

export default routes;
