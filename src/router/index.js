import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layouts/Layout.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Skill from '../views/Skill.vue'
import Achievement from '../views/Achievement.vue'
import Project from '../views/Project.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import NotFound from '../views/Errors/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      { path: ':catchAll(.*)', component: NotFound },
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: 'about',
        name: 'about',
        component: About,
      },
      {
        name: 'experience',
        path: 'experience',
        component: Experience,
      },
      {
        path: 'skill',
        name: 'skill',
        component: Skill,
      },
      {
        path: 'achievement',
        name: 'achievement',
        component: Achievement,
      },
      {
        path: 'project',
        name: 'project',
        component: Project,
      },
      {
        path: 'project/:dir',
        name: 'projectdetail',
        component: ProjectDetail,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
