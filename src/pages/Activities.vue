<template>
    <q-page>
        <BreadCrumb :title="'Our core Activities'" :desc="'Providing agricultural solutions to an oil dependent Nigeria.'"/>
   
    <div class="wrapper">
      <div v-for="(activity, index) in activities" :key="index" :class="activity.flexDirection" class="flex md:flex-nowrap justify-evenly my-10 main_center  flex-center">
        <div class="desc_container">
          <div class="text-2xl text-green relative poppins mb-4 under_after font-semibold" v-html="activity.title">
            
          </div>
          <p class="text-lg my-4">
            Palm Valley Nigeria Limited (PVNL) is a limited liability company
            registered under the company Allied Matters Act of 1990 with RC No
            792177. The company was established in 2008 with the vision of
            providing agricultural solutions to an oil dependent Nigeria. PVNL
            has leverage on its wealth of experience and trained staff to
            support the development of Agricultural Value Chains in Nigeria. At
            PVNL, we provide Business Support to the vulnerable group in the VC
            which are mainly women and youth. They form 65-70% of the active
            work force that produces 70% of food in Nigeria.
          </p>
          
        </div>
         <q-img
              :src="'./img/' + activity.img + '.png'"
              spinner-color="primary"
              spinner-size="82px"
              :class="activity.pseudo"
              class="img_container overflow-unset under_green mt-10 relative rounded-md shadow-lg"
            />
        
      </div>
    </div>
    <div class="my-4">
        <Newsletter />
    </div>
    
    </q-page>
</template>

<script setup>
import BreadCrumb from '../components/BreadCrumb.vue'
import Newsletter from '../components/Newsletter.vue'
import {ref} from 'vue'
import { useMeta } from 'quasar'

const metaData = {
  // sets document title
  title: 'Activities',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - Palm Value NG`,

  // meta tags
  meta: {
    description: { name: 'description', content: 'Our Core Activities on Palm valley Nigeria' },
    keywords: { name: 'keywords', content: 'Our core Activities on palm valley nigeria' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle:  {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template (ogTitle) {
        return `${ogTitle} - Palm Valley Ng`
      }
    }
  }
}
useMeta(metaData)
const activities = ref([
    {
        title: '<p>Agricultural Value <br />Chain Development</p>',
        img: 'activities_1',
        flexDirection: 'flex-row',
        pseudo: 'bottom-left'
    },{
        title: '<p>Business Support <br />Services</p>',
        img: 'activities_2',
        flexDirection: 'flex-row-reverse',
        pseudo: 'top-right'
    },{
        title: '<p>Agricultural Consultants</p>',
        img: 'activities_3',
        flexDirection: 'flex-row',
        pseudo: 'bottom-left'
    },{
        title: '<p>Linkages</p>',
        img: 'handShake',
        flexDirection: 'flex-row-reverse',
        pseudo: 'top-right'
    },{
        title: '<p>Agribusiness Cluster <br />Formation (ABC)</p>',
        img: 'activities_4',
        flexDirection: 'flex-row',
        pseudo: 'bottom-left'
    },{
        title: '<p>Produce Aggregation <br />and Off Take</p>',
        img: 'truck',
        flexDirection: 'flex-row-reverse',
        pseudo: 'top-right'
    },{
        title: '<p>Warehouse Receipt <br />System</p>',
        img: 'activities_5',
        flexDirection: 'flex-row',
        pseudo: 'bottom-left'
    },{
        title: '<p>Mechanization Service <br />Providers</p>',
        img: 'activities_6',
        flexDirection: 'flex-row-reverse',
        pseudo: 'top-right'
    }
])
</script>

<style lang="scss" >
.under_after::after {
    content: "";
    width: 3em;
    display: block;
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 5px;
    border-radius: .2em;
    background-color: #FFD600;
    // margin: .5em 0;k
}
.img_container {
    overflow: unset !important;
}
.under_green::after {
    content: "";
    display: block;
    position: absolute;
    width: 10em;
    height: 10em;
    
    z-index: -1;
    background-color: green;
    border-radius: 3px;
}
.under_green.bottom-left::after {
    bottom:-3em;
    left: -3em;
}
.under_green.top-right::after {
    top:-3em;
    right: -3em;
}
</style>