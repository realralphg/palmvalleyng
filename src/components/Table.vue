<template>
  <div class="q-pa-none">
    <q-table
      color="primary"
      card-class="bg-grey-4 text-black"
      table-class="text-black"
      table-header-class="text-black"
      flat
      bordered
      title="PVNL provides business support services to the following agribusiness clusters and Cooperative associations. "
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name of Group',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'membership', align: 'center', label: 'Membership', field: 'membership'},
        { name: 'location', align: 'left', label: 'Location', field: 'location'},
        { name: 'valuechain', align: 'left', label: 'Value Chain', field: 'valuechain' }
      ],

      data: [
        {
          name: 'Nasara Women Cooperative Union',
          membership: 10000,
          location: 'Pampaida Ikara LGA',
          valuechain: 'Rice, Maize and Soyabeans',
        },
        {
          name: 'Jaba Ginger Farmers’ Cooperative Society',
          membership: 2000,
          location: 'Kwoi',
          valuechain: 'Ginger',
        },
        {
          name: 'Chikun Chili Pepper',
          membership: 1000,
          location: 'Kaduna',
          valuechain: 'Tomato and Chili Pepper',
        },
        {
          name: 'Groundnut Cluster',
          membership: 600,
          location: 'Pampaida, Ikara LGA',
          valuechain: 'Groundnut',
        },
        {
          name: 'Soybean Cluster',
          membership: 5000,
          location: 'Yarkasuwa Lere LGA',
          valuechain: 'Soyabeans',
        },
        {
          name: 'Yeyock Sabzuro Women Ginger Coop Society',
          membership: 1500,
          location: 'Kwoi',
          valuechain: 'Ginger',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>