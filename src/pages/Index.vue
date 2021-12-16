<template>
  <q-page>
    
    <div class="wrapper">
      <div class="flex justify-evenly md:flex-nowrap my-10 main_center flex-center">
        <div class="big relative mb-40 md:order-last">
          <q-img
            no-native-menu
              :src="bigImg"
              spinner-color="red"
            class="absolute-full transition relative ease-in-out border delay-150  overflow-hidden shadow-lg rounded transform hover:-translate-y-2"
            >
            <template v-slot:error>
            <div class="absolute-full flex flex-center bg-negative text-white">
              Cannot load image
            </div>
          </template>
        
          </q-img>
          <div class="small_img_container ">
              <div v-for="(img, index) in images" :key="index" @click="switchImg(index)" class="small_img transition ease-in-out delay-150  overflow-hidden shadow-md rounded transform hover:-translate-y-2"><img :src="img" />
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
          </q-btn>
        </div>
        
      </div>
      <div class="flex justify-evenly  md:flex-nowrap my-10 gap-10  flex-center">
        
          <q-img
              src="../assets/img/group.png"
              spinner-color="primary"
              spinner-size="82px"
              class="img_container"
            />
          <!-- <img src="../assets/img/group.png" /> -->
        
        <div class="desc_container my-5">
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
    <div class="world_bg ">
      <div
        class="
          wrapper
          flex
         
           gap-10
          py-10
          justify-evenly
          items-center
          flex-wrap
        "
      >
        <WhoWeAre v-for ="(service, index) in services" :key="index" :service="service"/>
        
        
      </div>
    </div>
    
    <div class="wrapper">
        <Clients />
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from "vue";
import WhoWeAre from 'components/WhoWeAre.vue'
import Clients from 'components/Clients.vue'

    const bigImg = ref('/img/img1.png')
    const images = reactive([
    '/img/img2.png','/img/img3.png'
  ])
  const switchImg = (index) => {
    const bigImgSamp = bigImg.value;
    images[index] = bigImgSamp
  }
  const services = ref([
    {
      img: '/img/Eyes.svg',
      title: 'Vision',
      desc: 'To Provide agricultural solutions to an oil dependent Nigeria'
    }, {
      img: '/img/optical.svg',
      title: 'Mission',
      desc: 'To provide Business Support to the vulnerable group in the VC which are mainly women and youth'
    }, {
      img: '/img/tilda.svg',
      title: 'Core Value',
      desc: ' Building business relationships and linkages to financial institutions, input, and out markets as well as forward integration.'
    }
  ])
</script>
<style lang="scss">

.big {
  // max-width: 25em;
  max-width: 28em;
    height: 26em;
    z-index: 2;
    width: 100%;
    background-size: cover;
  img {
    width: 100%;
  }
}
.big:hover {
  z-index: 4
}
.small_img_container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: -70px;
  right: 0;
  left: 0;
  z-index: 2;
.small_img {
  
  max-width: 11em;
   img {
     width: 100%
   }
}
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
