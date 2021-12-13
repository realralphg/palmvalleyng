<template>
  <q-page>
    <div class="wrapper">
      <div class="flex justify-evenly my-10 main_center flex-center">
        <div class="desc_container">
          <h1 class="text-5xl poppins mb-4 font-extrabold">
            Palm Valley <span class="text-green poppins px-4">NG</span>
          </h1>
          <p class="text-xl font-semibold text-gray-800 my-8">
            Providing agricultural solutions to an oil dependent Nigeria.
          </p>
          <q-btn
            class="
              flex
              justify-between
              items-center
              p-3
              rounded
              bg_btn
              text-yellow
              font-medium
            "
            >
            <span>Get Started</span>
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
        <div class="img_container">
          <img src="../assets/img/girls.png" />
        </div>
      </div>
      <div class="flex justify-evenly flex-center">
        <div class="img_container">
          <img src="../assets/img/group.png" />
        </div>
        <div class="desc_container">
          <p class="text-2xl text-green relative poppins mb-4 under_after font-semibold">
            Our <span class="text-yellow-500">Identity</span>
          </p>
          <p class="text-lg my-4">
            Palm Valley Nigeria Limited (PVNL) is a limited liability company
            registered under the company Allied Matters Act of 1990 with RC No
            792177. The company was established in 2008 with the vision of
            providing agricultural solutions to an oil dependent Nigeria...
          </p>
          <q-btn
            class="
              flex
              justify-between
              items-center
              p-3
              rounded
              bg_btn
              text-yellow
              font-medium
            "
            >
            <span>Get Started</span>
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
    <div class="world_bg">
      <div
        class="
          wrapper
          flex
          xs:grid
          grid-cols-3
          gap-10
          sm:h-full
          justify-evenly
          items-center
          flex-wrap
        "
      >
        <div
          class="
            p-4
            shadow-xl
            rounded-md
            flex border border-gray-100
            items-center
            text-center
            flex-col
            justify-center
            services_card
            bg-white
          "
        >
          
          <p class="font-bold text-green text-xl my-2">Vision</p>
          <p class="my-2">
            To Provide agricultural solutions to an oil dependent Nigeria
          </p>
        </div>
        <div
          class="
            p-4
            shadow-xl
            rounded-md
            flex border border-gray-100
            items-center
            text-center
            flex-col
            justify-center
            services_card
            bg-white
          "
        >
       
          <p class="font-bold text-green text-xl my-2">Mission</p>
          <p class="my-2">
            To provide Business Support to the vulnerable group in the VC which
            are mainly women and youth
          </p>
        </div>
        <div
          class="
            p-4
            shadow-xl
            rounded-md
            flex border border-gray-100
            items-center
            text-center
            flex-col
            justify-center
            services_card
            bg-white
          "
        >
         
          <p class="font-bold text-green text-xl block my-2">Core Value</p>
          <p class="my-2">
            Building business relationships and linkages to financial
            institutions, input, and out markets as well as forward integration.
          </p>
        </div>
      </div>
    </div>
    <div>
      
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
<style lang="scss">
.services_card {
  height: 12em;
  max-width: 28em;
}
.main_center {
  margin: 7em 0;
}
.desc_container {
  max-width: 500px;
}
.img_container {
  max-width: 30em;
  img {
    width: 100%;
  }
}

</style>
