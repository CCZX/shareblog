import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '/',
          redirect: { name: 'Article' }
        },
        {
          name: 'Article',
          path: 'article',
          component: () => import('./views/ArticleList.vue')
        },
        {
          path: 'tag',
          name: "Tag",
          component: () => import('./views/Tag.vue')
        },
        {
          name: 'Category',
          path: 'category',
          component: () => import('./views/Cate.vue')
        },
        {
          name: 'User',
          path: 'user',
          component: () => import('./views/User.vue')
        }
      ]
    }
  ]
})
