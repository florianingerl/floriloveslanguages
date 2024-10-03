import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import VueDict from "./../components/vue-dict.vue";
import VueAnnaCat from "./../views/english/shortstories/vue-anna-cat.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      name: 'English',
      path: '/en/:language',
      component: VueDict,
      children: [
        {
          name: "English dictionary",
          path: '',
          component: VueDict
        },
  
        {
          name: 'Vocabulary', path: 'vocabulary',
          children: [
            {
              name: 'Conjunctions',
              path: 'conjunctions',
              component: HomeView
            }
          ]
        },
        
        {name: 'Books', path: 'books', 
    children: [
      {name: 'Raw food',
       path: 'rawfood/:page',
       component: HomeView },
  
       {name: 'Fred',
        path: 'fred/:page',
        component: HomeView },
      
    ] },
    {
      name: 'Short stories',
      path: 'shortstories',
      children: [
        {
          name: 'The cat detective',
          path: 'thecatdetective',
          component: VueAnnaCat
  
        },
        {
          name: 'Advertisement and turtoises',
          path: 'annaturtoises',
          component: HomeView
        }
    ]
    },
    
    
    {
      name: 'Grammar',
      path: 'grammar',
      children: [ {
        name: 'Enough and Too',
        path: 'enoughtoo',
        component: HomeView
      },
      {
        name: 'Even',
        path: 'even',
        component: HomeView
      }
    
    ]
    }]
      
    },
  
  ]
})

export default router
