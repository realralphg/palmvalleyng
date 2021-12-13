<template>
    <q-page>
    <div class="wrapper">
      <div v-for="(activity, index) in activities" :key="index" :class="activity.flexDirection" class="flex justify-evenly my-10 main_center flex-center">
        <div class="desc_container">
          <div class="text-2xl text-green poppins mb-4 font-semibold" v-html="activity.title">
            
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
        <div class="img_container">
          <img :src="'./img/' + activity.img + '.png'" />
        </div>
      </div>
    </div>
    </q-page>
</template>

<script setup>
import {ref} from 'vue'
const activities = ref([
    {
        title: '<p>Agricultural Value <br />Chain Development</p>',
        img: 'activities_1',
        flexDirection: 'flex-row',
    },{
        title: '<p>Business Support <br />Services</p>',
        img: 'activities_2',
        flexDirection: 'flex-row-reverse',
    },{
        title: '<p>Agricultural Consultants</p>',
        img: 'activities_3',
        flexDirection: 'flex-row',
    },{
        title: '<p>Linkages</p>',
        img: 'handShake',
        flexDirection: 'flex-row-reverse',
    },{
        title: '<p>Agribusiness Cluster <br />Formation (ABC)</p>',
        img: 'activities_4',
        flexDirection: 'flex-row',
    },{
        title: '<p>Produce Aggregation <br />and Off Take</p>',
        img: 'truck',
        flexDirection: 'flex-row-reverse',
    },{
        title: '<p>Warehouse Receipt <br />System</p>',
        img: 'activities_5',
        flexDirection: 'flex-row',
    },{
        title: '<p>Mechanization Service <br />Providers</p>',
        img: 'activities_6',
        flexDirection: 'flex-row-reverse',
    }
])
</script>

<style lang="scss" scoped>

</style>