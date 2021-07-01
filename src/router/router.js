import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ListApp from '../pages/ListApp.vue';
import CalendarApp from '../pages/CalendarApp.vue';
import MarkdownApp from '../pages/MarkdownApp.vue';
import SliderApp from '../pages/SliderApp.vue';
import CalculatorApp from '../pages/CalculatorApp.vue';

const routes = 
[
  {
    path: '/homePage',
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
  {
    path: '/markdownApp',
    name: 'Markdown Application',
    component: MarkdownApp,
  },
  {
    path: '/sliderApp',
    name: 'Slider Application',
    component: SliderApp,
  },
  {
    path: '/calculatorApp',
    name: 'Calculator Application',
    component: CalculatorApp,
  }
]

const router = createRouter(
{
  base: '/homePage/',
  history: createWebHistory(),
  routes,
})

export default router
