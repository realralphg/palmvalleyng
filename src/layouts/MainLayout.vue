<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg_btn text-yellow text-base no-shadow py-4 p-2"
      reveal
      :reveal-offset="500"
    >
      <div class="wrapper header flex flex-nowrap justify-between items-center">
        <div class="flex items-center gap-2">
          <q-avatar class="bg-transparent w-12 h-12">
            <img src="../assets/img/palm_logo.png" />
          </q-avatar>
          <p class="hidden sm:block text-white poppins text-lg">
            Palm Valley Ng
          </p>
        </div>

        <nav class="desktop_nav">
          <ul class="flex link_list flex-nowrap">
            <li
              v-for="(link, index) in essentialLinks"
              :key="index"
              class="li_dropdown_link relative py-2"
            >
              <router-link
                v-if="link.link"
                :to="{ path: link.link }"
                class="text-white font-medium p-2 px-4"
              >
                {{ link.title }}
              </router-link>
              <p
                class="text-white font-medium p-2 inline px-4 cursor-default"
                v-else
              >
                {{ link.title }}
              </p>
              <ul
                v-if="link.sublink"
                class="absolute top-2 text-green mt-7 left-3 li_dropdown_container rounded sm:w-40 text-sm divide-y z-10 border bg-white shadow"
              >
                <li
                  class="p-2 px-4 sub_link cursor-default"
                  v-for="(sublink, i) in link.sublink"
                  :key="i"
                >
                  <router-link :to="{ path: sublink.link }">
                    {{ sublink.title }}
                  </router-link>
                </li>
                <!-- <li class="p-2 px-4 cursor-default">Our Partnership</li> -->
                <!-- <div class></div> -->
              </ul>
            </li>
          </ul>
        </nav>
        <!-- <ul class="desktop_nav flex flex-nowrap link_list justify-end">
          <li>
            <q-btn
              flat
              class="
                sigin_btn
                mr-2
                px-4
                text-white
                border border-yellow
                rounded
                font-medium
                p-2
              "
            >
              Sign In
              </q-btn>
          </li>
          <li>
            <q-btn
              flat
              class="
                register_btn
                mr-2
                px-6
                bg-yellow
                rounded
                text-green
                font-medium
                p-2
              "
            >
              Register
              </q-btn>
          </li>
        </ul> -->
        <div
          class="menu_btn"
          @click="toggleLeftDrawer"
          aria-hidden="true"
        ></div>
      </div>
    </q-header>
    <div :class="leftDrawerOpen ? 'active' : ''" class="mobile_menu">
      <div
        class="close_btn absolute top-0 right-0 m-4"
        aria-hidden="true"
        @click="toggleLeftDrawer"
      ></div>
      <div class="m-auto w-10/12">
        <ul class="flex items-center mx-auto link_list">
          <li
            v-for="(link, index) in essentialLinks"
            :key="index"
            class="li_dropdown_link text-gray-600 flex flex-col items-center font-medium p-2 px-4 relative"
          >
            <div
              class="cursor-default select-none"
              @click="changeRoute(link.link)"
            >
              {{ link.title }}
            </div>
            <ul
              v-if="link.sublink"
              class="sm:w-40 text-base flex flex-col items-center z-10 my-2 mx-4 bg-white"
            >
              <li
                class="p-2 px-4 cursor-default"
                v-for="(sublink, i) in link.sublink"
                :key="i"
              >
                <div
                  class="cursor-default select-none"
                  @click="changeRoute(sublink.link)"
                >
                  {{ sublink.title }}
                </div>
              </li>
              <!-- <li class="p-2 px-4 cursor-default">Our Partnership</li> -->
              <!-- <div class></div> -->
            </ul>
          </li>
        </ul>
        <ul
          class="flex link_list mx-auto justify-center items-center gap-5 flex-col"
        >
          <li>
            <q-btn
              flat
              class="sigin_btn mr-2 px-4 text-green border border-green rounded font-medium p-2"
            >
              Sign In
            </q-btn>
          </li>
          <li>
            <q-btn
              flat
              class="register_btn mr-2 px-6 bg-yellow rounded text-black font-medium p-2"
            >
              Register
            </q-btn>
          </li>
        </ul>
      </div>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer class="py-6 pt-10 text-white">
      <!-- <p class="text-red-500">This is the footer</p> -->
      <div
        class="wrapper text-md flex flex-wrap sm:grid md:grid-cols-3 sm:grid-cols-2 gap-10 justify-between"
      >
        <div>
          <div class="flex my-2 mb-4">
            <span class="px-2 font-semibold text-yellow text-xl poppins"
              >Contact</span
            >
          </div>

          <ul class="order-last">
            <li class="flex nowrap mb-4 items-center">
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
                <a
                  class="text-white text-center"
                  href="https://www.facebook.com/manzo.maigari"
                  target="_blank"
                >
                  <i
                    style="font-size: 2em"
                    class="ri-facebook-fill px-2 text-yellow"
                  ></i>
                  <!-- <q-icon
                    class="link bg-red text-white"
                    name="ion-logo-facebook"
                    style="font-size: 2em"
                  /> -->
                </a>

                <a
                  class="text-white text-center"
                  href="https://www.facebook.com/manzo.maigari"
                  target="_blank"
                >
                  <i
                    style="font-size: 2em"
                    class="ri-linkedin-fill px-2 text-yellow"
                  ></i>
                </a>

                <a
                  class="text-white text-center"
                  href="https://www.facebook.com/manzo.maigari"
                  target="_blank"
                >
                  <i
                    style="font-size: 2em"
                    class="ri-twitter-fill px-2 text-yellow"
                  ></i>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="last">
          <div class="flex my-2 mb-4">
            <span class="px-2 font-semibold text-yellow text-xl poppins"
              >Location</span
            >
          </div>
          <ul>
            <li class="mb-1">
              <p class="">Office Address</p>
              <p class="my-1">
                Suite 1&10, 220 Legacy Plaza, Sir Patrick Ibrahim Yakowa Way,
                Kamazo Kaduna
              </p>
            </li>
          </ul>
        </div>
        <div>
          <span class="px-2 font-semibold text-yellow text-xl poppins"
            >Quick Links</span
          >

          <div @click="$router.push('/')" class="q-mt-md cursor-pointer">
            <p class="q-ml-sm">Home</p>
          </div>
          <div
            @click="$router.push('/company/about-us')"
            class="q-mt-sm cursor-pointer"
          >
            <p class="q-ml-sm">About Us</p>
          </div>
          <div
            @click="$router.push('/company/businesses')"
            class="q-mt-sm cursor-pointer"
          >
            <p class="q-ml-sm">Our Businesses</p>
          </div>
          <div
            @click="$router.push('/company/partnership')"
            class="q-mt-sm cursor-pointer"
          >
            <p class="q-ml-sm">Partnership</p>
          </div>
          <div
            @click="$router.push('/our-activities')"
            class="q-mt-sm cursor-pointer"
          >
            <p class="q-ml-sm">Our Core Activities</p>
          </div>
          <div
            @click="$router.push('/company/contact-us')"
            class="q-mt-sm cursor-pointer"
          >
            <p class="q-ml-sm">Contact Us</p>
          </div>

          <div class="text-caption text-grey-6">
            <q-btn
              class="q-mt-sm text-yellow"
              no-caps
              small
              outline
              icon="mail"
              type="a"
              href="https://www.manzomaigari.com/webmail/"
              target="_blank"
            >
              <span class="q-pl-sm">Check Mail</span>
            </q-btn>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  </q-layout>
</template>
<style lang="scss">
.header {
  flex: 1 1 0%;
}
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
.mobile_menu {
  display: none;
}

@media (max-width: 1024px) {
  .mobile_menu {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    font-size: 1.4em;
    align-items: center;
    z-index: 9999;
    transition: 0.35s ease-in-out;
    transform: translateX(-100%);

    .link_list {
      flex-direction: column;
      width: 80%;
    }
  }
  .last {
    order: 999;
  }
  .desktop_nav {
    display: none;
  }
  .mobile_menu.active {
    transform: translateX(0);
  }
}
@media (min-width: 1024px) {
  .menu_btn,
  .close_btn {
    display: none;
  }
}
.li_dropdown_link > .router-link-exact-active::after,
.li_dropdown_link a:hover::after {
  position: absolute;
  content: "";
  bottom: 0px;
  width: 40%;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 0.4em;
  margin: 0 auto;
  background-color: yellow;
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
    title: "About Us",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "/company/about-us",
  },
  {
    title: "Our Businesses",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "/company/businesses",
  },
  {
    title: "Partnership",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "/company/partnership",
  },
  {
    title: "Our Core Activites",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "/our-activities",
  },
  {
    title: "Contact Us",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "/company/contact-us",
  },
];

import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };
    const changeRoute = (path) => {
      router.push({ path: path });
      toggleLeftDrawer();
    };
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer,
      changeRoute,
    };
  },
});
</script>
