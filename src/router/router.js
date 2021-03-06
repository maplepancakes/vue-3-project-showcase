import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import Feedback from '../pages/Feedback.vue';
import ListApp from '../pages/ListApp.vue';
import CalendarApp from '../pages/CalendarApp.vue';
import MarkdownApp from '../pages/MarkdownApp.vue';
import SliderApp from '../pages/SliderApp.vue';
import CalculatorApp from '../pages/CalculatorApp.vue';
import RandomColoursApp from '../pages/RandomColoursApp.vue';
import ChatApp from '../pages/ChatApp.vue';

const routes = 
[
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
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
  },
  {
    path: '/randomColoursApp',
    name: 'Random Colours Application',
    component: RandomColoursApp,
  },
  {
    path: '/chatApp',
    name: 'Chat Application',
    component: ChatApp,
  }
]

const router = createRouter(
{
  history: createWebHistory(),
  routes,
})

export default router
