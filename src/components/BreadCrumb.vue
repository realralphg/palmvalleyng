<template>
  <div class="breadcrumb flex justify-center items-center flex-col text-center">
    <p class="title font-bold poppins text-white text-4xl mb-4">{{ title }}</p>
    <p class="description text-white text-xl">{{ desc }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "route.name",
  },
  desc: {
    type: String,
    default: "",
  },
});
const data = [
  {
    title: "About Us",
    description:
      "Providing agricultural solutions to an oil dependent Nigeria.",
  },
  {
    title: "Our Businesses",
    description:
      "Palm Valley Nigeria is a household name in Agribusiness Support Service provision in Nigeria",
  },
  {
    title: "Our core Activities",
    description:
      "Providing agricultural solutions to an oil dependent Nigeria.",
  },
  {
    title: "Partnership with Agribusiness Clusters",
    description:
      "Providing business support services to the following agribusiness clusters and Cooperative associations.",
  },
  {
    title: "Our Businesses",
    description:
      "Palm Valley Nigeria is a household name in Agribusiness Support Service provision in Nigeria",
  },
];
// const route = useRoute()
// const selectBreadCrumb = computed(() => {
//
//     let obj;
//     console.log(route.path)
//     switch(route.path) {
//         case '/company/about-us':
//             obj = data[0];
//             break;
//         case '/company/activities':
//             obj = data[2];
//             break;
//             case '/company/businesses':
//             obj = data[4];
//             break;
//             case '/company/partnership':
//             obj = data[3];
//             break;
//         default :
//             obj = data[0]
//             // break;
//     }
//     return obj
// })
// selectBreadCrumb()
</script>

<style lang="scss" scoped></style>
