<template>
  <q-page>
    <BreadCrumb
      :title="'Our core Activities'"
      :desc="'Providing agricultural solutions to an oil dependent Nigeria.'"
    />

    <div class="wrapper">
      <div
        v-for="(activity, index) in activities"
        :key="index"
        :class="activity.flexDirection"
        class="flexx"
      >
        <div class="desc_container">
          <div
            class="text-2xl text-green relative poppins mb-4 under_after font-semibold"
            v-html="activity.title"
          ></div>
          <p v-html="activity.desc" class="text-lg my-4"></p>
        </div>
        <img
          :src="'./img/' + activity.img + '.png'"
          spinner-color="primary"
          spinner-size="82px"
          :class="activity.pseudo"
          class="img_container overflow-unset under_green mt-10 relative rounded-md"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import BreadCrumb from "../components/BreadCrumb.vue";
import Newsletter from "../components/Newsletter.vue";
import { ref } from "vue";
import { useMeta } from "quasar";

const metaData = {
  // sets document title
  title: "Activities",
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title) => `${title} - Palm Value NG`,

  // meta tags
  meta: {
    description: {
      name: "description",
      content: "Our Core Activities on Palm valley Nigeria",
    },
    keywords: {
      name: "keywords",
      content: "Our core Activities on palm valley nigeria",
    },
    equiv: {
      "http-equiv": "Content-Type",
      content: "text/html; charset=UTF-8",
    },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: "og:title",
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template(ogTitle) {
        return `${ogTitle} - Palm Valley Ng`;
      },
    },
  },
};
useMeta(metaData);
const activities = ref([
  {
    title: "<p>Agricultural Value <br />Chain Development</p>",
    img: "activities_1",
    flexDirection: "flex-row",
    pseudo: "bottom-left",
    desc: "We have a keen passion regarding Agricultural Value Chain Development Projects (AVDP) which will increase production and improve marketing of agricultural products, contributing to the Government’s priorities of farmer's self-sufficiency, crop diversification and rural poverty reduction. The AVDP will invest in agricultural mechanization, irrigation and water management. It will strengthen and climate-proof rural infrastructure through the rehabilitation of feeder roads and warehouses to improve product drying and storage capacity. It will also build the capacity of smallholder farmers through farmer field schools and provide them with credit for their investments in smallholder farms. ",
  },
  {
    title: "<p>Business Support <br />Services</p>",
    img: "activities_2",
    flexDirection: "flex-row-reverse",
    pseudo: "top-right",
    desc: "Small business is the root of all business. While it may not seem like it, all big businesses started small. Supporting small businesses is something we are really keen about",
  },
  {
    title: "<p>Agricultural Consultants</p>",
    img: "activities_3",
    flexDirection: "flex-row",
    pseudo: "bottom-left",
    desc: "We provide technical consultancy services and management support in the development of agriculture and agribusiness activities. Particular focus is on the development of nutrition-sensitive, organic and sustainable livestock and horticultural system",
  },
  {
    title: "<p>Linkages</p>",
    img: "handShake",
    flexDirection: "flex-row-reverse",
    pseudo: "top-right",
    desc: "We support smallholder farmers which endeavour to export their products through a programme called business linkages.  The business linkages programme aims to assist small producers in accessing the international markets by enhancing the productive capacities, enhancing compliance with technical requirements and by promoting certification. This programme seeks to integrate small agro-businesses into sophisticated supply chains, whether domestic or international as well as to help those producers seize opportunities for trade in agri-food products.The objectives of the business linkages programme is to increase access to markets for smallholder farmers To ensure compliance with technical equipment, to provide business support service to selected groups of smallholder farmers, to provide ongoing advisory support to smallholder farmers and to facilitate the provision of technical support and on-farm training.",
  },
  {
    title: "<p>Agribusiness Cluster <br />Formation (ABC)</p>",
    img: "activities_4",
    flexDirection: "flex-row",
    pseudo: "bottom-left",
    desc: "Limited evidence suggests that clusters can benefit smallholders when farmers are intentionally engaged through vertical linkages (market ties to other actors in multiple steps in the value chain) and horizontal linkages (e.g., producers’ organizations to increase farmer bargaining power or realize economies of scale). Clusters can be risky for smallholders when the focus is on higher value crops (such as coffee or cocoa) that involve higher costs and risks. Agribusiness incubators have become an important part of value chain development strategies since the 2000s, but investment in agribusiness in developing countries is still seen as a high-risk activity and cluster driven.",
  },
  {
    title: "<p>Produce Aggregation <br />and Off Take</p>",
    img: "truck",
    flexDirection: "flex-row-reverse",
    pseudo: "top-right",
    desc: "Aggregation boosts farmer revenues but risks diverting fruit and vegetable supply away from consumers in small rural markets.Via a systems model we identify levers to make horticultural aggregation more relevant to small markets.Market-based cold storage and boosting small market demand offer policy levers to improve spatial equity in consumption.Intervention combinations improve small market fruit and vegetable availability, whilst avoiding farmer revenue trade-offs. Packages of synergistic policies should be embraced to foster ‘win-wins’ in nutrition-sensitive food systems.",
  },
  {
    title: "<p>Warehouse Receipt <br />System</p>",
    img: "activities_5",
    flexDirection: "flex-row",
    pseudo: "bottom-left",
    desc: "Our warehouse receipt system (WRS) enables farmers to deposit storable goods (usually grains) in exchange for a warehouse receipt (WR). A WR is a document issued by warehouse operators as evidence that specified commodities of stated quantity and quality have been deposited at a particular location. Usually prices slump right after harvesting time. By deciding to sell the goods at a later time, when prices have picked up, the depositor can avoid price risk.",
  },
  {
    title: "<p>Mechanization Service <br />Providers</p>",
    img: "activities_6",
    flexDirection: "flex-row-reverse",
    pseudo: "top-right",
    desc: "Appropriate access to equipment can greatly improve yields, crop quality and incomes for smallholders in Asia and Africa. We are working on mechanization at different level: policy, research and implementation of a sustainable business model providing machinery rental option for smallholders in Nigeria.",
  },
]);
</script>

<style scoped lang="scss">
.under_after::after {
  content: "";
  width: 3em;
  display: block;
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 5px;
  border-radius: 0.2em;
  background-color: #ffd600;
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
  bottom: -3em;
  left: -3em;
}
.under_green.top-right::after {
  top: -3em;
  right: -3em;
}

.holder {
  margin: 3rem 0;
}

.flexx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 4rem 0;
}
.desc_container {
  flex: 1;
}

.img_container {
  flex: 1;
  // margin: 0 2rem;
  min-width: 300px;
  width: 100%;
  height: 500px;
  object-fit: contain;
}

@media (max-width: 800px) {
  .flexx {
    display: flex;
    flex-direction: column;
  }
}
</style>
