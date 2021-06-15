import { createRouter, createWebHistory } from 'vue-router';
import ListApp from '../pages/ListApp.vue';
import CalendarApp from '../pages/CalendarApp.vue';
import HomePage from '../pages/HomePage.vue';

const routes = 
[
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: '/listApp',
    name: 'List Application',
    component: ListApp,
  },
  {
    path: '/calendarApp',
    name: 'Calendar Application',
    component: CalendarApp,
  },
]

const router = createRouter(
{
  history: createWebHistory(),
  routes,
})

export default router
