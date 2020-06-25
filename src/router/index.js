import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import search from '@/pages/search'
import searchlist from '@/pages/searchlist'
import hotmusic from '@/pages/hotmusic'
import gddetial from '@/pages/gddetial'
import player from '../components/player.vue'
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


        },
        {
          path:'/hotmusic',
          name:'hotmusic',
          component:hotmusic,
        },
        {
          path:'/gddetial',
          name:'gddetial',
          component:gddetial,
        },
        {
          path:'/player',
          name:'player',
          components:{
           a: player,
          }
        }
      ]
    }
  ]
})
