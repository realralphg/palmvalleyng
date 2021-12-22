<template>
  <q-page>
    <div class="wrapper">
      <div class="flex justify-evenly my-10 main_center flex-center">
        <div class="desc_container">
          <div
            class="
              text-2xl text-green
              relative
              poppins
              mb-4
              under_after
              font-semibold
            "
          >
            Our Business
          </div>
          <p class="text-lg my-4">
            Palm Valley Nigeria is a household name in Agribusiness Support
            Service provision in Nigeria. We work with other private investors
            in the Agricultural Value Chain to form a community with like minds
            at revolutionizing agriculture in Nigeria. We form partnership with
            donor organization to support smallholder farmers increase
            productivity and income.
          </p>
        </div>
        <div class="img_container">
          <img src="../assets/img/business.png" />
        </div>
      </div>
     <p class="font-medium text-base  py-2">The following are organizations we have established partnership to support the growth of Agriculture in Nigeria:</p>
      <div class="border overflow-hidden my-4 mb-20 shadow-lg text-base rounded-lg" bordered>
        <q-list>
            <div v-for="(title, index) in data"
            :key="index">
                <q-expansion-item 
            
            group="somegroup"
            icon="work"
            :label="title.title"
            default-opened
            header-class="text-gray-600"
          >
            <q-card>
              <q-card-section>
                <p v-if="title.desc">{{title.desc}}</p>
                <ul v-if="title.sublist">
                    <li v-for="i in title.sublist" :key="i" class="p-2 flex items-center"><q-icon size="xs" name="circle" class="px-2 text-sm text-gray-600"/>{{i}}</li>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

            </div>
          
          
        </q-list>
      </div>
    </div>
    <Newsletter />
  </q-page>
</template>

<script setup>
import Newsletter from '../components/Newsletter.vue'
import {ref} from 'vue'
const data = ref([
  {
    title: "International Fertilizer Development Centre ( IFDC )",
    desc: "PVNL was introduced to IFDC during the 1,000s + project in 2009. At the end of project they scale up to 2SCALE “Towards Sustainable Clusters in Agribusiness through Learning in Entrepreneurship."
  },
  {
    title: "International Institute For Tropical Agriculture ( IITA )",
    sublist: [
        "N2Africa Project – Putting Nitrogen Fixation to Work for Smallholder Farmers in Africa",
        "Agresult- Aflasafe Program",
        "Harvest Field – Suppliers of Aflasafe to PVNL"
    ]
  },{
      title: 'OCP Africa Fertilizers',
      desc: "PVNL entered a 3 years contract with OCP Africa Fertilizer to provide business support services to selected farmers in Nigeria under the OCP Africa Agribooster program. In this partnership we also provide training and build capacities of smallholder farmers in Agribusiness and enterprises. We leverage on our experience in project monitoring to provide technical backstopping on monitoring and evaluation of other private investors implementing OCP Africa Agribooster program."
  }, {
      title: 'Cellulant',
      desc: "Cellulant is a pan-African FinTech company that provides for Africa’s agricultural sector. An Agritech solution known as Agrikore, which powers a Food Processing Marketplace for sourcing of quality raw materials from local farmers to Food & Beverage Processors. PVNL has entered partnership with Cellulant to support smallholder farmers mop up excess grains and provide market linkages."
  }
]);
</script>

<style lang="scss" scoped></style>
