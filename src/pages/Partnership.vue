<template>
    <div >
      <BreadCrumb :title="'Partnership with Agribusiness Clusters'" :desc="'Palm Valley Nigeria is a household name in Agribusiness Support Service provision in Nigeria'"/>
        <div class="wrapper ">
            <p class="my-2 font-medium text-lg">PVNL provides business support services to the following agribusiness clusters and Cooperative associations</p>
        <div class="q-pa-md">
            <q-table
            grid
            card-class="bg_btn text-white "
            :rows="rows"
            :columns="columns"
            row-key="name"
            :pagination="pagination"
            :filter="filter"
            hide-header
            >
            <!-- <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
                </q-input>
            </template> -->
            </q-table>
        </div>
        </div>
        
        <Newsletter />
    </div>
</template>

<script setup>
import BreadCrumb from '../components/BreadCrumb.vue'
import Newsletter from '../components/Newsletter.vue'
import { ref } from 'vue'
const filter = ref('')
const pagination = ref({
        rowsPerPage: 3 // current rows per page being displayed
      })
const columns = [
  {
    name: 'desc',
    required: true,
    label: 'Name of Group',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Membership', align: 'center', label: 'Membership', field: 'membership', sortable: true },
  { name: 'Location', label: 'Location', field: 'location', sortable: true },
  { name: 'Value Chain', label: 'Value Chain', field: 'value_chain' }
]

const rows = [
  {
    name: 'Nasara Women Cooperative Union',
    membership: 10000,
    location: 'Pampaida Ikara LGA',
    value_chain: 'Rice, Maize and Soyabeans'
    
  },
  {
    name: 'Jaba Ginger Farmers Cooperative Society',
    membership: 2000,
    location: 'Kwoi',
    value_chain: 'Ginger'
    
  },
  {
    name: 'Chikun Chili Pepper',
    membership: 10000,
    location: 'Kaduna',
    value_chain: 'Tomato and Chili Pepper'
    
  },
  {
    name: 'Groundnut Cluster',
    membership: 600,
    location: 'Pampaida Ikara LGA',
    value_chain: 'Groundnut'
    
  },
  {
    name: 'Soybean Cluster',
    membership: 5000,
    location: 'Yarkasuwa Lere LGA',
    value_chain: 'Soyabeans'
    
  },
  {
    name: 'Yeyock Sabzuro Women Ginger Coop Society',
    membership: 1500,
    location: 'Kwoi',
    value_chain: 'Ginger'
    
  },
]
</script>

<style lang="scss" scoped>
.wrapper {
    margin: 1em auto;
}
</style>