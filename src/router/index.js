import { createRouter, createWebHistory } from 'vue-router'
import TodoApp from "../views/TodoApp";
import LoginView from "../views/LoginView"
import RegisterView from "../views/RegisterView"
const routes = [
  {
    path: '/',
    name: 'TodoApp',
    component: TodoApp
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
