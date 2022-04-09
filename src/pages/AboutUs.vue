<template>
  <q-page>
    <BreadCrumb
      :title="'About Us'"
      :desc="'Providing agricultural solutions to an oil dependent Nigeria.'"
    />
    <div class="wrapper">
      <div class="flex justify-evenly my-10 main_center flex-center">
        <div class="desc_container my-5">
          <div
            class="text-2xl text-green relative poppins mb-4 under_after font-semibold"
          >
            Incorporation
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
        <div
          class="img_container under_dots right relative rounded-md shadow-lg"
        >
          <img src="../assets/img/aboutUs.png" class="rounded" />
        </div>
      </div>
      <div class="flex flexer justify-evenly flex-center">
        <div
          class="img_container under_dots right relative rounded-md shadow-lg"
        >
          <img class="rounded" src="../assets/img/group.png" />
        </div>

        <div class="desc_container my-5">
          <p
            class="text-2xl text-green relative poppins mb-4 under_after font-semibold"
          >
            One-stop-shop
          </p>
          <p class="text-lg my-4">
            PVNL is a one-stop-shop that seeks to address the many challenges
            faced by smallholder farmers in Nigeria. We derive our strength in
            partnerships to achieve our goals and set objectives. Through
            partnerships, we provide premium services for our ever-increasing
            clientele base across different states in Nigeria. We are not
            limited to conventional Agriculture, but we also provide digital
            platform to increase participation and investment in E-Extension
          </p>
        </div>
      </div>
      <div
        class="flex flexer justify-evenly my-10 mb-20 main_center flex-center"
      >
        <div class="img_container under_dots right relative sm:order-last">
          <img src="../assets/img/man.png" class="rounded-md shadow-lg" />
        </div>

        <div class="desc_container my-5">
          <div
            class="text-2xl text-green relative poppins mb-4 under_after font-semibold"
          >
            Our Core Activities
          </div>
          <p class="text-lg my-4">
            Our core values are building business relationships and linkages to
            financial institutions, input, and out markets as well as forward
            integration. We also build capacity and train SHF on Good
            Agricultural Practices (GAP), Farmer Business School (FBS) and
            Standard manufacturing Practices. Over the years the company's
            strength has been tailored towards increased productivity,
            livelihood enhancement and income generation of smallholder farmers
            from end to end basis.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="wrapper">
        <div
          class="mx-auto max-w-4xl shadow-lg my-20 border gap-10 items-center rounded-md sm:grid grid-cols-2 p-4"
        >
          <div class="flex gap-4 sm:flex-nowrap justify-center items-center">
            <div class="rate">
              <img :src="'/img/workforce.svg'" />
            </div>
            <div class="m-4 text-2xl font-medium">Active Workforce</div>
          </div>
          <div
            class="flex gap-4 sm:flex-nowrap justify-center my-2 items-center"
          >
            <div class="rate">
              <img :src="'/img/foodPercent.svg'" />
            </div>
            <div class="m-4 text-2xl font-medium">Of Food in Nigeria</div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="flex justify-evenly my-10 main_center flex-center">
        <div class="desc_container my-5">
          <div
            class="text-2xl text-green relative poppins mb-4 under_after font-semibold"
          >
            Our Core Activities
          </div>
          <p class="text-lg my-4">
            Our core activities includes but not limited to:
          </p>
          <div class="" style="max-width: 350px">
            <q-list>
              <q-item v-for="(list, index) in data" :key="index">
                <q-item-section avatar>
                  <q-icon :class="'text-green'" :name="list.icon" />
                </q-item-section>

                <q-item-section style="font-size: 1rem">{{
                  list.title
                }}</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
        <div
          class="img_container under_dots right relative rounded-md shadow-lg"
        >
          <img :src="'/img/truck2.png'" class="rounded" />
        </div>
      </div>
    </div>

    <div class="curved_green_bg">
      <div class="wrapper">
        <div class="p-4 w-full bg-white">
          <div
            class="text-2xl mb-10 text-green relative poppins mb-4 under_after font-semibold"
          >
            Our Gallery
          </div>
          <div class="images_container gap-4">
            <div class="div1">
              <img :src="'/img/gallery/img.png'" class="rounded" />
            </div>
            <div class="div2">
              <img :src="'/img/gallery/img2.png'" class="rounded" />
            </div>
            <div class="div3">
              <img :src="'/img/gallery/img3.png'" class="rounded" />
            </div>
            <div class="div4">
              <img :src="'/img/gallery/img4.png'" class="rounded" />
            </div>
            <div class="div5">
              <img :src="'/img/gallery/img5.png'" class="rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg_btn py-10 mt-2">
      <div class="wrapper">
        <div class="max-w-2xl mx-auto tex-center">
          <p
            class="text-2xl relative poppins mb-4 text-white under_after font-semibold"
          >
            Contact Us
          </p>
        </div>
        <Form />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import BreadCrumb from "../components/BreadCrumb.vue";
import Newsletter from "../components/Newsletter.vue";
import Form from "../components/Form.vue";
import { ref } from "vue";
import { useMeta } from "quasar";

const metaData = {
  // sets document title
  title: "About Us",
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title) => `${title} - Palm Value NG`,

  // meta tags
  meta: {
    description: {
      name: "description",
      content:
        "Providing agricultural solutions to an oil dependent Nigeria. on Palm valley Nigeria",
    },
    keywords: {
      name: "keywords",
      content:
        "Providing agricultural solutions to an oil dependent Nigeria. on palm valley nigeria",
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
const data = ref([
  {
    icon: "grass",
    title: "Agricultural Value Chain Development",
  },
  {
    icon: "link",
    title: "Linkages",
  },
  {
    icon: "agriculture",
    title: "Produce Aggregation and Off Take",
  },
  {
    icon: "people",
    title: "Coaching and Mentoring",
  },
  {
    icon: "people",
    title: "Agribusiness Cluster Formation (ABC)",
  },
  {
    icon: "settings",
    title: "Mechanization Service Providers",
  },
  {
    icon: "warehouse",
    title: "Warehouse Receipt System",
  },
  {
    icon: "support_agent",
    title: "Business Support Services",
  },
  {
    icon: "grass",
    title: "Agricultural Consultants",
  },
]);
</script>

<style lang="scss" scoped>
.desc_container {
  max-width: 500px;
}
.img_container {
  max-width: 30em;
  img {
    width: 100%;
  }
}
.rate {
  max-width: 100px;
  img {
    width: 100%;
  }
}
.img_wrapper {
  max-height: 35em;
  img {
    height: 100%;
  }
}
.left_bottom {
  bottom: -1em;
  left: 0.25em;
}
.curved_green_bg {
  height: auto;
  background-size: cover;
}
@media (min-width: 1024px) {
  .curved_green_bg {
    height: 75em;
    background-size: 100% 75em;
  }
}
@media (min-width: 448px) {
  .images_container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    // grid-column-gap: 0px;
    // grid-row-gap: 0px;

    div {
      img {
        width: 100%;
      }
    }
  }

  .div1 {
    grid-area: 1 / 1 / 5 / 3;
  }
  .div2 {
    grid-area: 1 / 3 / 3 / 5;
  }
  .div3 {
    grid-area: 3 / 3 / 5 / 5;
  }
  .div4 {
    grid-area: 3 / 5 / 5 / 7;
  }
  .div5 {
    grid-area: 1 / 5 / 3 / 7;
  }
}
</style>
