<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white no-shadow p-2" elevated>
      <div class="wrapper flex justify-between items-center">
        <q-avatar class="bg-green w-12 h-12">
                <img src="../assets/img/palm_logo.png">
              </q-avatar>
            <ul class="flex">
              <li v-for="(link, index) in essentialLinks" :key="index" class="text-green font-medium px-4">
              <router-link
      :to="{ 'path': link.link }"
     
    >
      {{link.title}}
    </router-link></li>
            </ul>
            <ul class="flex">
              <li class="sigin_btn mr-2 px-4 text-green border border-green rounded font-medium p-2">Sign In</li>
              <li class="register_btn mr-2 px-6 bg-yellow rounded text-black font-medium p-2">Register</li>
            </ul>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss">
li.links {
  color: green;
}
</style>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/'
  },
  {
    title: 'About Us',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/company/about-us'
  },
  {
    title: 'Our Core Activites',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Contact Us',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
