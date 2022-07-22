import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WhoAreYou from '../views/WhoAreYou.vue'
import LoginRecruiter from '../views/LoginRecruite.vue'
import LoginStudent from '../views/LoginStudent.vue'
import UserID from "../views/UserID.vue"
import ProphetUserID from "../views/ProphetUserID.vue"


const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/who-are-you',
    name: 'WhoAreYou',
    component: WhoAreYou
  },
  {
    path: '/login-recruiter',
    name: 'LoginRecruiter',
    component: LoginRecruiter
  },
  {
    path: '/login-Student',
    name: 'LoginStudent',
    component: LoginStudent
  },
  {
    path: '/UserID',
    name: 'UserID',
    component: UserID
  },
  {
    path: '/UserID/ProphetUserID',
    name: 'ProphetUserID',
    component: ProphetUserID
  }
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
});

export default router
