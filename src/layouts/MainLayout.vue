<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-base border-b no-shadow p-2" reveal :reveal-offset="500">
      <div class="wrapper flex justify-between items-center">
        <q-avatar class="bg-green w-12 h-12">
          <img src="../assets/img/palm_logo.png" />
        </q-avatar>
        <ul class="flex">
          <li
            v-for="(link, index) in essentialLinks"
            :key="index"
            class="li_dropdown_link text-gray-600 font-medium p-2 px-4 relative"
          >
            <router-link :to="{ path: link.link }">
              {{ link.title }}
            </router-link>
            <ul v-if="link.sublink" class="absolute top-2 mt-7 left-3 li_dropdown_container  rounded sm:w-40 text-sm divide-y z-10 border bg-white shadow">
            <li class="p-2 px-4 cursor-default" v-for="(sublink, i) in link.sublink" :key="i"><router-link :to="{ path: sublink.link }">
              {{ sublink.title }}
            </router-link></li>
            <!-- <li class="p-2 px-4 cursor-default">Our Partnership</li> -->
            <!-- <div class></div> -->  
          </ul>
          </li>

        </ul>
        <ul class="flex">
          <li
            
          >
           <q-btn flat  class="
              sigin_btn
              mr-2
              px-4
              text-green
              border border-green
              rounded
              font-medium
              p-2
            ">
             Sign In
           </q-btn>
            
          </li>
          <li
            
          >
          <q-btn flat  class="
              register_btn
              mr-2
              px-6
              bg-yellow
              rounded
              text-black
              font-medium
              p-2
            ">
            Register
          </q-btn>
            
          </li>
        </ul>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer class="py-6 mt-4 pt-10 text-white">
      <!-- <p class="text-red-500">This is the footer</p> -->
      <div
        class="wrapper flex-col text-lg flex sm:grid grid-cols-3 gap-10 justify-between"
      >
        <div>
          <div class="flex my-2 mb-4 items-center">
            <q-avatar class=" w-12 h-12">
              <img src="../assets/img/palm_logo.png" />
            </q-avatar>
            <p class="px-2 font-semibold text-lg poppins">Palm Valley Ng</p>
          </div>
          <p class="w-3/4">
            Lorem ipsum dolor sit amet consect etur adi pisicing elit sed.
          </p>
          <hr class="opacity-50 w-3/4 mx-auto my-4" />
          <ul class="order-last">
            <li class="flex mb-4 items-center">
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.64881 9.35429C11.6406 12.3453 12.3193 8.88504 14.2242 10.7886C16.0607 12.6246 17.1162 12.9924 14.7894 15.3185C14.498 15.5528 12.6462 18.3707 6.13845 11.8647C-0.370109 5.358 2.44619 3.50433 2.68048 3.21296C5.0129 0.880384 5.3744 1.94204 7.21087 3.778C9.11577 5.68237 5.65699 6.36331 8.64881 9.35429Z"
                    fill="#FFD600"
                  />
                </svg>
              </div>
              <span class="px-2">+234 8035888719, +234 8037864289</span>
            </li>
            <li class="flex mb-4 items-center">
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7045 2.25C13.7102 2.25 14.6777 2.6475 15.3895 3.36075C16.102 4.0725 16.5002 5.0325 16.5002 6.0375V11.9625C16.5002 14.055 14.7977 15.75 12.7045 15.75H5.29524C3.20199 15.75 1.50024 14.055 1.50024 11.9625V6.0375C1.50024 3.945 3.19449 2.25 5.29524 2.25H12.7045ZM13.8978 7.15499L13.9578 7.09499C14.137 6.87749 14.137 6.56249 13.9495 6.34499C13.8453 6.23324 13.702 6.16499 13.5528 6.14999C13.3953 6.14174 13.2453 6.19499 13.132 6.29999L9.75026 8.99999C9.31526 9.36074 8.69201 9.36074 8.25026 8.99999L4.87526 6.29999C4.64201 6.12749 4.31951 6.14999 4.12526 6.35249C3.92276 6.55499 3.90026 6.87749 4.07201 7.10249L4.17026 7.19999L7.58276 9.86249C8.00276 10.1925 8.51201 10.3725 9.04526 10.3725C9.57701 10.3725 10.0953 10.1925 10.5145 9.86249L13.8978 7.15499Z"
                    fill="#FFD600"
                  />
                </svg>
              </div>
              <span class="px-2">palmvalleyng@gmail.com</span>
            </li>
            <li class="flex mb-4">
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.625 7.73832C2.625 4.28842 5.50791 1.5 8.99508 1.5C12.4921 1.5 15.375 4.28842 15.375 7.73832C15.375 9.47677 14.7428 11.0907 13.7021 12.4587C12.5541 13.9676 11.1391 15.2823 9.54641 16.3143C9.18188 16.5528 8.85291 16.5708 8.45284 16.3143C6.85105 15.2823 5.43607 13.9676 4.29787 12.4587C3.25649 11.0907 2.625 9.47677 2.625 7.73832ZM6.89564 7.93256C6.89564 9.08827 7.83872 9.99725 8.99506 9.99725C10.1522 9.99725 11.1043 9.08827 11.1043 7.93256C11.1043 6.78584 10.1522 5.83262 8.99506 5.83262C7.83872 5.83262 6.89564 6.78584 6.89564 7.93256Z"
                    fill="#FFD600"
                  />
                </svg>
              </div>
              <span class="px-2"
                >Shop G32, Barnawa Phase II Shopping <br />
                Complex, Barnawa Kaduna.</span
              >
            </li>
          </ul>
        </div>
        <div>
          <div class="flex my-2 mb-4">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z"
                  fill="#FFD600"
                />
              </svg>
            </div>
            <span class="px-2 font-semibold text-xl poppins">Address</span>
          </div>
          <ul>
            <li class="mb-1">
              <p class="text-yellow">Office Address</p>
              <p class="my-1 px-2">
                Shop G32, Barnawa Phase II Shopping Complex, Barnawa Kaduna.
              </p>
            </li>
            <li class="mb-1">
              <p class="text-yellow">Field Office:</p>
              <p class="my-1 px-2">
                Bakin Kasuwa, Yarkasuwa Lere LGA, Kaduna State
              </p>
            </li>
            <li class="mb-1">
              <p class="text-yellow">Address II:</p>
              <p class="my-1 px-2">
                No 29 A, Christopher Abashiya Road, Tsauni Kura GRA, Sabon Tasha
                Kaduna
              </p>
            </li>
            <li class="mb-1">
              <p class="text-yellow">Warehouse Facilities</p>
              <p class="my-1 px-2">
                Sabon Gari Kwoi, 2. Bakin Kasuwa, Yarkasuwa Lere LGA Kaduna
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-semibold poppins text-xl mb-4">Our Newsletter</p>
          <p class="my-4">
            Sign up now to get daily latest news & updates from us
          </p>
          <form class="flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              class="
                
                rounded-full
                px-4
                flex-1
                text-gray-500
                
                mr-2
                p-3
                bg-white
              "
            />
            <button class="bg-yellow p-3 px-4 rounded my-1 text-black shadow">Submit</button>
          </form>
        </div>
        <div></div>
      </div>
    </footer>
  </q-layout>
</template>
<style lang="scss">
li.links {
  color: green;
}
.li_dropdown_container {
  display: none;
}
.li_dropdown_link:hover {
  .li_dropdown_container {
    display: block;
  }
}
</style>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: "Home",
    caption: "quasar.dev",
    icon: "school",
    link: "/",
  },
  {
    title: "Company",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "/company/about-us",
    sublink: [{
    title: "About Us",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "/company/about-us"},{
      title: "Our Businesses",
      caption: "github.com/quasarframework",
      icon: "code",
      link: "/company/businesses",
    },{
      title: "Partnership",
      caption: "github.com/quasarframework",
      icon: "code",
      link: "/company/partnership",
    }]
  },
  {
    title: "Our Core Activites",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "/company/activities",
  },
  {
    title: "Contact Us",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
