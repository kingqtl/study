import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import search from '@/pages/search'
import searchlist from '@/pages/searchlist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path:'/search',
          name:'search',
          component:search,
          children:[
            {
              path:'/searchlist',
              name:'searchlist',
              component:searchlist
            }
          ]


        }
      ]
    }
  ]
})
