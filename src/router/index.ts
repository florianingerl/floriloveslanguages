import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '@/views/HomeView.vue';
import HomeView from '@/views/vue-home.vue'
import VueDict from "@/components/atoms/layouts/Dictionary.vue";
import VueAnnaCat from "@/views/english/shortstories/CatAnna.vue";
import VueTurtoiseAnna from "@/views/english/shortstories/TurtoiseAnna.vue";
import VueEnglish from "@/views/english/NavigationEnglish.vue";
import VueDeutsch from "@/views/deutsch/NavigationGerman.vue";
import VueKatzeMagFisch from "@/views/deutsch/kurzgeschichten/CatVanessa.vue";
import VueVogelMarcia from "@/views/deutsch/kurzgeschichten/BirdMarcia.vue";
import VueVogelEichhoernchen from "@/views/deutsch/kurzgeschichten/BirdAndSquirrelAndreaAndAntoine.vue";
import VueFrancais from "@/views/french/NavigationFrench.vue";
import VueEspagnol from "@/views/espagnol/vue-espagnol.vue";
import VueNegationEspagnol from "@/views/espagnol/grammaire/vue-negation-espagnol.vue";
import VueComparatifEspagnol from "@/views/espagnol/grammaire/vue-comparatifs.vue";
import VueMonumentPoisson from "@/views/french/breveshistoires/vue-monument-poisson.vue";
import VueMaxHistoire2 from "@/views/french/breveshistoires/HistoireMax2.vue";
import VueRenardPoule from "@/views/french/breveshistoires/vue-renard-poule.vue";
import VueAspirateurEtAmour from "@/views/french/breveshistoires/AspirateurEtAmour.vue";
import VueAnnaStory from "@/views/english/books/LifeIsNotAToyAnna.vue";
import VueJealousyFraud from "@/views/english/shortstories/vue-jealous-katy.vue";
import VueSignUp from "@/views/vue-signup.vue";
import VueLogin from "@/views/vue-login.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          name: 'Sign up',
          path: '/signup',
          component: VueSignUp
        },
        {
          name: 'Login',
          path: '/login',
          component: VueLogin
        },
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
                },
                {
                  name: 'Comparatif en espagnol',
                  path: 'comparatifenespagnol',
                  component: VueComparatifEspagnol
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
              name: 'Un aspirateur n\'avale pas l\'amour',
              path: 'aspirateuretamour',
              component: VueAspirateurEtAmour
            },
            {
              name: 'Un renard religieux',
              path: 'renardreligeux',
              component: VueRenardPoule
            },

            {
              name: 'Monument poisson',
              path: 'monumentpoisson',
              component: VueMonumentPoisson
            },
            {
              name: 'Antoine et les poules',
              path: 'antoineetlespoules',
              component: VueMaxHistoire2
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
              component: VueVogelEichhoernchen
              //niveau 2

            },
            {
              name: "Katze mag Fisch",
              path: 'katzemagfisch',
              component: VueKatzeMagFisch
            }
            ,
            {
              name: "Äpfel mit Würmern für einen Vogel",
              path: 'vogelmarcia',
              component: VueVogelMarcia
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
              name: 'Advertisement with turtoises',
              path: 'advertisementwithturtoises',
              component: VueTurtoiseAnna
            },
            {
              name: 'Jealousy and fraud',
              path: 'jealousyandfraud',
              component: VueJealousyFraud
            },
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
