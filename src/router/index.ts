import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '@/views/HomeView.vue';
import HomeView from '@/views/vue-home.vue'
import VueDict from "@/components/atoms/layouts/vue-dict.vue";
import VueAnnaCat from "@/views/english/shortstories/vue-anna-cat.vue";
import VueEnglish from "@/views/english/vue-english.vue";
import VueDeutsch from "@/views/deutsch/vue-deutsch.vue";
import VueKatzeMagFisch from "@/views/deutsch/kurzgeschichten/vue-katze-vanessa.vue";
import VueFrancais from "@/views/french/vue-francais.vue";
import VueEspagnol from "@/views/espagnol/vue-espagnol.vue";
import VueNegationEspagnol from "@/views/espagnol/grammaire/vue-negation-espagnol.vue";
import VueMonumentPoisson from "@/views/french/breveshistoires/vue-monument-poisson.vue";
import VueRenardPoule from "@/views/french/breveshistoires/vue-renard-poule.vue";
import VueAnnaStory from "@/views/english/books/vue-anna-story.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          name: 'Espagnol',
          path: '/esp/:language',
          component: VueDict,
          children: [
            {
              name: 'Navigation Espagnol',
              path: '',
              component: VueEspagnol
            },
            {
              name: 'grammaire',
              path: 'grammaire',
              children: [
                {
                  name: 'Négation en espagnol',
                  path: 'negationenespagnol',
                  component: VueNegationEspagnol
                }
              ]
            }
          ]
        },
  
    {
      name: 'Français',
      path: '/fr/:language',
      component: VueDict,
      children: [
        {
          name: "navigation françaises",
          path: '',
          component: VueFrancais
        },
        {
          name: "Histoires brèves",
          path: 'breveshistoires',
          children: [
            {
              name: 'Un renard religieux',
              path: 'renardreligeux',
              component: VueRenardPoule
            },

            {
              name: 'Monument poisson',
              path: 'monumentpoisson',
              component: VueMonumentPoisson
            }
          ]
        }
      ]
    },
    {
      name: 'Deutsch',
      path: '/de/:language',
      component: VueDict,
      children: [
        {
          name: "Deutsch Navigation",
          path: '',
          component: VueDeutsch
        },
        {
          name: "Kurzgeschichten",
          path: 'kurzgeschichten',
          children: [
            {
              name: "Ein Vogel und ein Eichhörnchen",
              path: "vogelundeichhoernchen",
              component: VueKatzeMagFisch
              //niveau 2

            },
            {
              name: "Katze mag Fisch",
              path: 'katzemagfisch',
              component: VueKatzeMagFisch
            }
          ]
        }
      ]
    },
    {
      name: 'English',
      path: '/en/:language',
      component: VueDict,
      children: [
        {
          name: "English navigation",
          path: '',
          component: VueEnglish
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

        {
          name: 'Books', path: 'books',
          children: [
            {
              name: 'Life is not a toy',
              path: 'lifeisnotatoy',
              component: VueAnnaStory
            },
            {
              name: 'Raw food',
              path: 'rawfood/:page',
              component: HomeView
            },

            {
              name: 'Fred',
              path: 'fred/:page',
              component: HomeView
            },

          ]
        },
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
          children: [{
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

  ]}]
})

export default router
