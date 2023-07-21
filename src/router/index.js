import { createRouter, createWebHistory } from 'vue-router'
import TodoApp from "../views/TodoApp";

const routes = [
  {
    path: '/',
    name: 'TodoApp',
    component: TodoApp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
