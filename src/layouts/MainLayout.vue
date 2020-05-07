<template>
  <q-layout view="lHh Lpr lFf">
    <q-header >
      <q-toolbar >
        <q-icon name='leak_remove' size="sm"></q-icon>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="button"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <span class="toolbar-title">Palm Valley NG</span> 
        </q-toolbar-title>

        <q-space/>
          
        <q-breadcrumbs class="text-grey-4" active-color="white" id="breadcrumbs">
          <q-btn flat no-caps to="/"> <q-breadcrumbs-el label="Home" /> </q-btn>
          <q-btn flat no-caps to="/aboutus"> <q-breadcrumbs-el label="About Us" /> </q-btn>
          <q-btn flat no-caps to="/contactus"> <q-breadcrumbs-el label="Contact Us" /> </q-btn>
        </q-breadcrumbs>
       
        <q-tabs class="text-grey-4 q-ml-md">          
          <q-tab name="SignIn" label="Sign In" @click="inception = true"/>
        </q-tabs>
        
      </q-toolbar>
    </q-header>

    <q-dialog v-model="inception">
      <q-card>
        <q-card-section class="row">         
            <div class="text-h6 text-weight-light text-primary">Sign In</div>
            <q-space></q-space>
            <q-btn flat label="x" class="text-red" v-close-popup />                
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="text" label="Username" style="max-width: 300px"/>
          <q-input v-model="pass" label="Password" type="password" style="max-width: 300px"/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">          
          <q-btn color="primary" label="Sign In" v-close-popup />
          <q-btn outline label="Sign Up" @click="secondDialog = true" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="secondDialog" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-white text-white" style="width: 300px">
        <q-card-section class="row">
          <div class="text-h6 text-weight-light text-primary">Sign Up</div>
          <q-space></q-space>
          <q-btn flat label="x" class="text-red" v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="text" label="Username" style="max-width: 300px"/>
          <q-input v-model="pass" label="Password" type="password" style="max-width: 300px"/>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn color="primary" label="Save" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-footer>
      <div class="text-center">
        <div>Copyright 2020</div>
        <div class="text-grey-6">Greysoft Technologies</div>
      </div>
    </q-footer>
    <q-drawer
        v-model="leftDrawerOpen"
        :width="250"
        overlay
        bordered
        content-class="bg-primary"
    >
      <q-list>
        <q-item-label header class="text-white text-h5 text-weight-light">
          Palm Valley NG
        </q-item-label>

        <q-item class="text-grey-5" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{link.label}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false,
      inception: false,
      secondDialog: false,
      text: '',
      pass: '',
      essentialLinks: [

        {
          label: 'Home',
          icon: 'eco',
          to: '/'
        },

        {
          label: 'About Us',
          icon: 'eco',
          to: '/aboutus'
        },

        {
          label: 'Contact Us',
          icon: 'eco',
          to: '/contactus'
        },
      ], 

    }
  }
}
</script>

<style scoped>
@media (min-width: 600px){
  .button{
    display: none
  }
}

@media (max-width: 600px){
  #breadcrumbs{
    display: none
  }

  .toolbar-title{
    display: none
  }
}

.q-router-link--exact-active{
  color: white !important;
}
</style>