import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layouts/LayoutPage.vue'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Experience from '../views/ExperiencePage.vue'
import Skill from '../views/SkillPage.vue'
import Achievement from '../views/AchievementPage.vue'
import Project from '../views/ProjectPage.vue'
import ProjectDetail from '../views/ProjectDetailPage.vue'
import NotFound from '../views/Errors/NotFoundPage.vue'

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
