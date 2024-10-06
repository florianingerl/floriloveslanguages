<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const menuItems = ref([
  { 
    name: 'Englisch', 
    submenu: ['Short stories', 'Grammar', 'Vocabulary', 'Books'] 
  },
   { 
     name: 'Français', 
     submenu: ['Brèves histoires', 'Grammaire', 'Vocabulaire', 'Livres'] 
   },
   { 
     name: 'Deutsch', 
     submenu: ['Kurzgeschichten', 'Grammatik', 'Vokabeln', 'Bücher'] 
   },
   { 
     name: 'Informatik', 
     submenu: ['Reguläre Ausdrücke'] 
   }
])
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const getSubItemDescription = (subItem : string) => {
  // You can replace this with actual descriptions for each sub-item
  return `Entdecken Sie unsere maßgeschneiderten Angebote für ${subItem} und wie sie Ihren Erfolg fördern können.`
}
</script>

<template>
  <header>
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/en/english/vocabulary/conjunctions">conjunctions</RouterLink>
      <RouterLink to="/en/english/shortstories/thecatdetective">The cat detective</RouterLink>
      <RouterLink to="/en/english">English</RouterLink>
      <RouterLink to="/de/deutsch">Deutsch</RouterLink>
      <RouterLink to="/fr/french">Français</RouterLink>
    </nav> -->
    <nav class="fixed top-0 left-0 w-full bg-gradient-to-r from-emerald-700 to-teal-600 text-white shadow-lg z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-evenly items-center">
        <a href="#" class="text-3xl font-extrabold tracking-tight hover:text-emerald-200 transition-colors duration-300">
          FRAG FLORIAN!
        </a>
        
        <Button @click="toggleMenu" variant="ghost" size="icon" class="md:hidden text-white hover:text-emerald-200">
          <Menu v-if="!isMenuOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </Button>
        
        <div :class="['md:block', { 'hidden': !isMenuOpen }]" class="w-full md:w-auto">
          <NavigationMenu class="mx-auto">
            <NavigationMenuList class="flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 flex-start">
              <NavigationMenuItem v-for="(item, index) in menuItems" :key="index">
                <NavigationMenuTrigger class="bg-transparent hover:bg-emerald-600 px-4 py-2 rounded-md transition-colors duration-300">
                  {{ item.name }}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul class="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-lg shadow-xl">
                    <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex" class="row-span-3">
                      <NavigationMenuLink :href="'#' + subItem.toLowerCase().replace(/ /g, '-')">
                        <div class="text-lg font-semibold text-emerald-700 mb-1 hover:text-emerald-600 transition-colors duration-300">{{ subItem }}</div>
                        <p class="text-sm text-gray-600 line-clamp-2">
                          {{ getSubItemDescription(subItem) }}
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact">
                  <Button class="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                    Contact
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  </nav>
  </header>
</template>

<style scoped lang="scss">

</style>