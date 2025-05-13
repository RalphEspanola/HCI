import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/auth/LoginView.vue'
import CourseView from '../views/system/CourseView.vue'
import CalendarView from '../views/system/CalendarView.vue'
import MessagesView from '../views/system/MessagesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/courses',
      name: 'courses',
      component: CourseView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView,
    },
  ],
})

export default router
