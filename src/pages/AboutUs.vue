<template>
  <q-page>
    <BreadCrumb
      :title="'About Us'"
      :desc="'Providing agricultural solutions to an oil dependent Nigeria.'"
    />
    <div class="wrapper q-pt-lg">
      <div
        class="flex flexer justify-between md:flex-nowrap my-10 mt-4 main_center flex-center"
      >
        <div style="flex: 1" class="big relative mb-40 md:order-last">
          <q-img
            no-native-menu
            :src="bigImg.img"
            spinner-color="red"
            class="absolute-full transition relative ease-in-out border delay-150 overflow-hidden shadow-lg rounded transform hover:-translate-y-2"
          >
            <template v-slot:error>
              <div
                class="absolute-full flex flex-center bg-negative text-white"
              >
                Cannot load image
              </div>
            </template>
          </q-img>
          <div>
            <div class="small_img_container">
              <div
                v-for="(img, index) in imgByStatus"
                :key="index"
                :class="img.size"
                class="small_img transition ease-in-out delay-150 overflow-hidden shadow-md rounded transform hover:-translate-y-2"
              >
                <img :src="img.img" />
              </div>
            </div>
            <div class="mt-24 arrow_container mb-30 flex justify-center gap-2">
              <q-btn
                class="flex justify-between items-center p-3 rounded small_btn text-yellow font-medium"
                @click="switchImage('-')"
              >
                <div class="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 12.2744C20 12.6541 19.7178 12.9679 19.3518 13.0176L19.25 13.0244L4.25 13.0244C3.8358 13.0244 3.5 12.6886 3.5 12.2744C3.5 11.8947 3.7822 11.5809 4.1482 11.5313L4.25 11.5244L19.25 11.5244C19.6642 11.5244 20 11.8602 20 12.2744Z"
                      fill="#FFD600"
                    />
                    <path
                      d="M10.829 17.7673C11.1225 18.0596 11.1235 18.5344 10.8313 18.828C10.5656 19.0948 10.149 19.1199 9.85492 18.9027L9.77062 18.8302L3.72062 12.8062C3.45302 12.5397 3.42862 12.1216 3.64762 11.8276L3.72062 11.7433L9.77062 5.71832C10.0641 5.42602 10.5389 5.42702 10.8312 5.72052C11.0969 5.98732 11.1203 6.40412 10.9018 6.69722L10.829 6.78122L5.31301 12.2751L10.829 17.7673Z"
                      fill="#FFD600"
                    />
                  </svg>
                </div>
              </q-btn>
              <q-btn
                class="flex justify-between items-center p-3 rounded small_btn text-yellow font-medium"
                @click="switchImage('+')"
              >
                <div class="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z"
                      fill="#FFD600"
                    />
                    <path
                      d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z"
                      fill="#FFD600"
                    />
                  </svg>
                </div>
              </q-btn>
            </div>
          </div>
        </div>

        <!-- <div class="relative mb-40 md:order-last">
           <div class=" big border shadow-lg rounded">
            <img class="transition ease-in-out delay-150  overflow-hidden shadow-md rounded transform hover:-translate-y-2" :src="bigImg"/>
          </div>

          <div class="small_img_container ">
            <div v-for="(img, index) in images" :key="index" @click="switchImg(index)" class="small_img transition ease-in-out delay-150  overflow-hidden shadow-md rounded transform hover:-translate-y-2"><img :src="img" />
            </div>
          </div>

        </div> -->
        <div class="desc_container">
          <h1 class="text-5xl poppins mb-4 font-extrabold">
            PalmValley<span class="text-green poppins px-4">NG</span>
          </h1>
          <p class="text-xl dc-con text-gray-800 my-8">
            Providing agricultural solutions to an oil dependent Nigeria.
            Nigeria has as much arable lands as it has oil. A country with a
            mass population of youth in urban and rural areas. Our goal is to
            promote Agricultural practice over oil and leverage the abundance of
            youth and commerce to grow a new agribusiness economy.
          </p>
          <!-- <q-btn
            class="flex justify-between items-center p-3 rounded bg_btn text-yellow font-medium"
          >
            <span>Create a free account</span>
            <div class="ml-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z"
                  fill="#FFD600"
                />
                <path
                  d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z"
                  fill="#FFD600"
                />
              </svg>
            </div>
          </q-btn> -->
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div
        class="flex flexer justify-between md:flex-nowrap my-10 gap-10 flex-center"
      >
        <iframe
          style="flex: 1"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/1OkFqF85y4Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <!-- <img src="../assets/img/group.png" /> -->

        <div style="flex: 1" class="desc_container my-5">
          <p
            class="text-2xl text-green relative poppins mb-4 under_after font-semibold"
          >
            Our <span class="text-yellow-500">Identity</span>
          </p>
          <p class="text-lg my-4">
            Palm Valley Nigeria Limited (PVNL) is a limited liability company
            registered under the company Allied Matters Act of 1990 with RC No
            792177. The company was established in 2008 with the vision of
            providing agricultural solutions to an oil dependent Nigeria...
          </p>
          <q-btn
            to="/company/about-us"
            class="flex btn justify-between items-center p-3 rounded bg_btn text-yellow font-medium"
          >
            <span>Read More</span>
            <div class="ml-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z"
                  fill="#FFD600"
                />
                <path
                  d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z"
                  fill="#FFD600"
                />
              </svg>
            </div>
          </q-btn>
        </div>
      </div>
    </div>
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
import { ref, reactive, computed } from "vue";
import { useMeta } from "quasar";
const images = reactive([
  {
    img: "/img/img1.jpeg",
    status: "active",
  },
  {
    img: "/img/img2.png",
    status: "inactive",
  },
  {
    img: "/img/img3.png",
    status: "inactive",
  },
]);
const index = ref(0);
const bigImg = ref(images[index.value]);
const changeImage = (val) => {
  bigImg.value = images[val];
  images.map((img) => (img.status = "inactive"));
  images[val].status = "active";
};
const imgByStatus = computed(() => {
  return images.filter((img) => img.status === "inactive");
});
const switchImage = (sign) => {
  console.log(images.length);
  if (sign === "+" && index.value < 2) {
    index.value++;
  } else if (sign === "-" && index.value > 0) {
    index.value--;
  }
  return changeImage(index.value);
};
const switchImg = (index) => {
  const bigImgSamp = bigImg.value;
  bigImg.value = images[index];
  images[index] = bigImgSamp;
};
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
.big {
  // max-width: 25em;
  max-width: 38em;
  height: 100%;
  z-index: 2;
  width: 100%;
  background-size: cover;
  img {
    width: 100%;
  }
}
.small_img_container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: -50px;
  right: 0;
  left: 0;
  z-index: 2;
  .small_img {
    max-width: 10em;

    img {
      width: 100%;
    }
  }
}
@media (min-width: 1024px) {
  .curved_green_bg {
    height: 75em;
    background-size: 100% 75em;
  }
}

@media screen and (max-width: 600px) {
  h1.text-5xl {
    font-size: 2rem !important;
    line-height: 1;
  }
  .under_dots.right::after {
    right: 0;
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
