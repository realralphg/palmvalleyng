<template>
  <q-page>
    <div class="wrapper">
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
            Palm Valley <span class="text-green poppins px-4">NG</span>
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
    <div class="world_bg">
      <div
        class="wrapper flex gap-10 py-10 justify-evenly items-center flex-wrap"
      >
        <WhoWeAre
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        />
      </div>
    </div>

    <div class="wrapper">
      <Clients />
      <div
        class="max-w-3xl text-center flex flex-col gap-10 justify-center items-center mx-auto"
      >
        <p
          class="head-text text-2xl font-semibold my-4 text-green relative poppins mb-4 under_after"
        >
          Measuring Impact
        </p>
        <q-img :src="'/img/chart.svg'" />
      </div>
    </div>
    <div class="curved_green_bg">
      <div class="wrapper trips">
        <div class="text-center flex flex-col justify-center items-center">
          <p
            class="text-2xl text-white relative poppins mb-4 under_after font-semibold"
          >
            Affiliations
          </p>
          <p class="text-white text-lg my-2 max-w-2xl">
            To successfully thrive in the agribusiness economy, we have
            partnered with global brands to enhance globally optimized best
            practices across all the Agribusiness value chains in which we play.
          </p>
        </div>
        <div>
          <Splide
            :options="{
              autoplay: true,
              rewind: true,

              padding: '5rem',
              gap: '2rem',
              arrowPath:
                'M31.7777 18.4166L17.9207 4.55963L21.5735 0.906799L41.6667 21L21.5735 41.0931L17.9207 37.4403L31.7777 23.5833H0.333344V18.4166H31.7777Z',
              autoWidth: true,
              classes: {
                arrows:
                  'splide__arrows flex gap-5 mb-10 flex justify-center gap-2',
                arrow: 'splide__arrow shadow-md rounded small_btn p-4',
                prev: 'splide__arrow--prev ',
                next: 'splide__arrow--next ',
              },
              focus: 'center',
              breakpoints: {
                640: {
                  perPage: 2,
                  gap: '.7rem',
                },
                480: {
                  perPage: 3,
                  gap: '.7rem',
                  type: 'loop',
                },
              },
            }"
          >
            <SplideSlide>
              <div
                class="slide_container slider_height border rounded bg-white shadow-lg p-4"
              >
                <q-img
                  src="/img/trip1.jpg"
                  class="shadow-lg slide-img rounded"
                />
                <div class="details_container my-4">
                  <p class="font-semibold text-lg">Alphabet Visitation</p>
                  <p class="slide_text">
                    Nigerian army farms and ranches visited Alphavet which is a
                    leading vetinerary pharmaceuticals manufacturing company.
                  </p>
                  <p class="text-gray-500 text-sm">
                    - Székesfehérvár, Homoksor, Hungary
                  </p>
                  <!-- <q-btn
                    class="flex my-4 justify-between items-center p-3 rounded bg_btn text-yellow font-medium"
                  >
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
            </SplideSlide>
            <SplideSlide>
              <div
                class="slide_container slider_height border rounded bg-white shadow-lg p-4"
              >
                <q-img
                  src="/img/agrofeed.jpg"
                  class="shadow-lg slide-img rounded"
                />
                <div class="details_container my-4">
                  <p class="font-semibold text-lg">Agrofeed Visitation</p>
                  <p class="slide_text">
                    Agrofeed is a global player in the feed industry and they
                    produce feeds for a wide range of livestock visited their
                    labs, production facility, they also produce feed
                    ingredients.
                  </p>
                  <p class="text-gray-500 text-sm">- Gyor, Hungary.</p>
                  <!-- <q-btn
                    class="flex my-4 justify-between items-center p-3 rounded bg_btn text-yellow font-medium"
                  >
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
            </SplideSlide>
            <SplideSlide>
              <div
                class="slide_container border slider_height rounded bg-white shadow-lg p-4"
              >
                <q-img src="/img/ste.jpg" class="shadow-lg slide-img rounded" />
                <div class="details_container my-4">
                  <p class="font-semibold text-lg">STE.Tech Visitation</p>
                  <p class="slide_text">
                    STE.Tech Bacteria cocktail boosts the imune systems of
                    animals including humans, plants and revitalizes soil
                    health. (Integrated soil fertility).
                  </p>
                  <p class="text-gray-500 text-sm">- Kiskunmajsa, Hungary</p>
                  <!-- <q-btn
                    class="flex my-4 justify-between items-center p-3 rounded bg_btn text-yellow font-medium"
                  >
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
            </SplideSlide>
            <SplideSlide>
              <div
                class="slide_container slider_height border rounded bg-white shadow-lg p-4"
              >
                <q-img
                  src="/img/babo4.jpg"
                  class="shadow-lg slide-img rounded"
                />
                <div class="details_container my-4">
                  <p class="font-semibold text-lg">Babolna Visitation</p>
                  <p class="slide_text">
                    Babolna holds the premium genetic material in poultry across
                    Europe. They are one of only four (4) companies that own a
                    genetic center globally.
                  </p>
                  <p class="text-gray-500 text-sm">- Babolna, Hungary</p>
                  <!-- <q-btn
                    class="flex my-4 justify-between items-center p-3 rounded bg_btn text-yellow font-medium"
                  >
                    <span>View More</span>
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
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
    <div class="wrapper"></div>
    <div class="wrapper">
      <div
        class="flex flex-col justify-center text-center items-center mb-10 my-4"
      >
        <p
          class="text-2xl relative poppins mb-4 text-green under_after font-semibold"
        >
          Partnership
        </p>
        <p class="max-w-lg text-lg">
          PVNL provides business support services to the following agribusiness
          clusters and Cooperative associations.
        </p>
      </div>
    </div>
    <div class="transp_bg">
      <div class="wrapper">
        <p class="text-4xl text-white my-2 mb-10 font-semibold">
          Partnership with Agribusiness <br />Clusters
        </p>
        <!-- <q-btn
          class="flex justify-between items-center p-3 bg-white rounded text-green font-medium"
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
        </q-btn> -->
      </div>
    </div>

    <div class="partnerr">
      <Splide
        :options="{
          padding: '5rem',
          gap: '2rem',
          autoplay: true,

          arrowPath:
            'M31.7777 18.4166L17.9207 4.55963L21.5735 0.906799L41.6667 21L21.5735 41.0931L17.9207 37.4403L31.7777 23.5833H0.333344V18.4166H31.7777Z',
          autoWidth: true,
          classes: {
            arrows: 'splide__arrows flex gap-5 mb-10 flex justify-center gap-2',
            arrow: 'splide__arrow shadow-md rounded small_btn p-4',
            prev: 'splide__arrow--prev ',
            next: 'splide__arrow--next ',
          },
          focus: 'center',
          breakpoints: {
            640: {
              perPage: 2,
              gap: '.7rem',
            },
            480: {
              perPage: 3,
              gap: '.7rem',
              type: 'loop',
            },
          },
        }"
      >
        <SplideSlide>
          <div class="partner slide_container slider_height">
            <div class="women"><img src="/img/women.jpeg" alt="" /></div>

            <h4 class="text-weight-bold">
              Nasara Women
              <br />
              Cooperative Union
            </h4>
            <p><span class="text-weight-bold">Membership: </span>10000</p>
            <p>
              <span class="text-weight-bold">Location: </span>Pampaida Ikara LGA
            </p>
            <p>
              <span class="text-weight-bold">Value chain: </span>Rice, Maize and
              Soyabeans
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="partner slide_container slider_height">
            <div class="women"><img src="/img/ginger.jpeg" alt="" /></div>

            <h4 class="text-weight-bold">
              Jaba Ginger Farmers’ <br />
              Cooperative Society
            </h4>
            <p><span class="text-weight-bold">Membership: </span> 2000</p>
            <p><span class="text-weight-bold">Location: </span> Kwoi</p>
            <p><span class="text-weight-bold">Value chain: </span>Ginger</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="partner slide_container slider_height">
            <div class="women"><img src="/img/pepper.jpeg" alt="" /></div>

            <h4 class="text-weight-bold">Chikun Chili Pepper</h4>
            <p><span class="text-weight-bold">Membership: </span> 1000</p>
            <p><span class="text-weight-bold">Location: </span> Kaduna</p>
            <p>
              <span class="text-weight-bold">Value chain: </span> Tomato and
              chill pepper
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="partner slide_container slider_height">
            <div class="women"><img src="/img/ground.jpeg" alt="" /></div>

            <h4 class="text-weight-bold">Groundnut Cluster</h4>
            <p><span class="text-weight-bold">Membership: </span> 600</p>
            <p>
              <span class="text-weight-bold">Location: </span> Pampaida, Ikara
              LGA
            </p>
            <p><span class="text-weight-bold">Value chain: </span> Groundnut</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="partner slide_container slider_height">
            <div class="women"><img src="/img/soya.jpeg" alt="" /></div>

            <h4 class="text-weight-bold">Soybean Cluster</h4>
            <p><span class="text-weight-bold">Membership: </span>5000</p>
            <p>
              <span class="text-weight-bold">Location: </span>Yarkasuwa Lere LGA
            </p>
            <p><span class="text-weight-bold">Value chain: </span>Soyabeans</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="partner slide_container slider_height">
            <div class="women"><img src="/img/wom.jpeg" alt="" /></div>

            <h4 class="text-weight-bold">
              Yeyock Sabzuro Women <br />
              Ginger Coop Society
            </h4>
            <p><span class="text-weight-bold">Membership: </span>1500</p>
            <p><span class="text-weight-bold">Location: </span>Kwoi</p>
            <p><span class="text-weight-bold">Value chain: </span>Ginger</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="partner slide_container slider_height">
            <div class="women"><img src="/img/wo.jpeg" alt="" /></div>

            <h4 class="text-weight-bold">
              Nasara Women
              <br />
              Cooperative Union
            </h4>
            <p><span class="text-weight-bold">Membership: </span>1000</p>
            <p>
              <span class="text-weight-bold">Location: </span>Pampaida Ikara LGA
            </p>
            <p>
              <span class="text-weight-bold">Value chain: </span>Rice, Maize and
              Soyabeans
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <!-- <Clusters /> -->
    <div>
      <div class="wrapper">
        <div class="flexx justify-evenly my-10 main_center flex-center">
          <div class="desc_container my-5">
            <div
              class="text-2xl text-green relative poppins mb-4 under_after font-semibold"
            >
              <span class="font-bold">Our</span> Businesses
            </div>
            <p class="my-5 text-lg font-medium">
              PVNL provides business support services to the following
            </p>
            <p class="text-lg my-4">
              Palm Valley Nigeria is a household name in Agribusiness Support
              Service provision in Nigeria. We work with other private investors
              in the Agricultural Value Chain to form a community with like
              minds at revolutionizing agriculture in Nigeria.
            </p>
            <q-btn
              to="/company/businesses"
              class="flex btn justify-between items-center p-2 rounded bg_btn text-yellow font-medium"
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
          <q-img
            src="../assets/img/circle.png"
            spinner-color="primary"
            spinner-size="82px"
            class="img_container"
          />
        </div>
      </div>
    </div>

    <div
      class="text-2xl max-w-xl mx-auto my-10 font-light flex justify-center items-center flex text-green poppins"
    >
      <span class="font-bold relative under_after mr-1">Our Success </span
      >Stories
    </div>
    <div class="bg_btn p-4 testimony_container py-10 h-50">
      <div>
        <Splide
          :options="{
            padding: '5rem',
            gap: '2rem',

            arrowPath:
              'M31.7777 18.4166L17.9207 4.55963L21.5735 0.906799L41.6667 21L21.5735 41.0931L17.9207 37.4403L31.7777 23.5833H0.333344V18.4166H31.7777Z',
            autoWidth: true,
            classes: {
              arrows:
                'splide__arrows flex gap-5 mb-10 flex justify-center gap-2',
              arrow: 'splide__arrow shadow-md rounded small_btn p-4',
              prev: 'splide__arrow--prev ',
              next: 'splide__arrow--next ',
            },
            focus: 'center',
            breakpoints: {
              640: {
                perPage: 2,
                gap: '.7rem',
              },
              480: {
                perPage: 3,
                gap: '.7rem',
                type: 'loop',
              },
            },
          }"
        >
          <SplideSlide v-for="(testimony, index) in testimonies" :key="index">
            <TestimonySlide :testimony="testimony" :index="index" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <!-- <div class="blog_container mb-20">
      <div class="wrapper">
        <div
          class="flex flex-col justify-center text-center items-center mb-10 my-4"
        >
          <p
            class="text-2xl relative poppins mb-4 text-green under_after font-semibold"
          >
            Blog and Update
          </p>
          <p class="max-w-lg">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempory
          </p>
        </div>
        <Splide
          :options="{
            padding: '5rem',
            gap: '2rem',
            arrowPath:
              'M31.7777 18.4166L17.9207 4.55963L21.5735 0.906799L41.6667 21L21.5735 41.0931L17.9207 37.4403L31.7777 23.5833H0.333344V18.4166H31.7777Z',
            autoWidth: true,
            classes: {
              arrows:
                'splide__arrows flex gap-5 mb-10 flex justify-center gap-2',
              arrow: 'splide__arrow shadow-md rounded small_btn p-4',
              prev: 'splide__arrow--prev ',
              next: 'splide__arrow--next ',
            },
            focus: 'center',
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 3,
                gap: '.7rem',
                type: 'loop',
              },
              480: {
                perPage: 3,
                gap: '.7rem',
              },
            },
          }"
        >
          <SplideSlide v-for="(blog, index) in blogs" :key="index">
            <BlogCard :blog="blog" :index="index" />
          </SplideSlide>
        </Splide>
      </div>
    </div> -->
    <div class="bg_btn py-6">
      <div class="wrapper">
        <div class="max-w-2xl my-4 mx-auto tex-center">
          <p
            class="text-2xl relative poppins mb-4 text-white under_after font-semibold"
          >
            Contact Us
          </p>
          <!-- <p class="text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempory
          </p> -->
        </div>
        <Form />
      </div>
    </div>
    <!-- <div class="wrapper">
      <div>
        <div
          class="text-2xl max-w-xl mx-auto my-10 font-light flex justify-center items-center flex text-green poppins"
        >
          <span class="font-bold relative under_after mr-1">Our Partners </span>
        </div>
      </div>

      <div
        class="gap-10 items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 flax-wrap"
      >
        <div
          class="p-2 hover:shadow-lg p-2 rounded"
          v-for="(partner, index) in partners"
          :key="index"
        >
          <img :src="partner" class="w-full" />
        </div>
      </div>
    </div> -->
  </q-page>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useMeta } from "quasar";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import WhoWeAre from "components/WhoWeAre.vue";
import TestimonySlide from "components/testimonySlide.vue";
import Clients from "components/Clients.vue";
import Slide from "components/Slide.vue";
import Form from "components/Form.vue";
import BlogCard from "components/BlogCard.vue";
import Clusters from "components/Clusters.vue";

const metaData = {
  title: "Palm valley Ng",
  meta: {
    description: {
      name: "description",
      content:
        "Palm valley Ng Providing agricultural solutions to an oil dependent Nigeria.",
    },
    keywords: {
      name: "keywords",
      content: "palm valley nigeria agricultural solutions about us contact us",
    },
    equiv: {
      "http-equiv": "Content-Type",
      content: "text/html; charset=UTF-8",
    },
  },
};
useMeta(metaData);
const images = reactive([
  {
    img: "/img/img1.png",
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
const blogs = ref([
  {
    img: "/img/blog/img1.png",
    date: "12 October,2021",
    desc: "Africa Agriculture Pioneer Wins 2017 World Food Prize.",
  },
  {
    img: "/img/blog/img2.png",
    date: "12 October,2021",
    desc: "Why a New Potato Variety could be a Game-Changer For...",
  },
  {
    img: "/img/blog/img3.png",
    date: "12 October,2021",
    desc: "High-tech farming in Canada...",
  },
  {
    img: "/img/blog/img4.png",
    date: "12 October,2021",
    desc: "High-tech farming in Canada...",
  },
]);
const services = ref([
  {
    img: "/img/Eyes.svg",
    title: "Vision",
    desc: "To Provide agricultural solutions to an oil dependent Nigeria",
  },
  {
    img: "/img/optical.svg",
    title: "Mission",
    desc: "To provide Business Support to the vulnerable group in the VC which are mainly women and youth",
  },
  {
    img: "/img/tilda.svg",
    title: "Core Value",
    desc: " Building business relationships and linkages to financial institutions, input, and out markets as well as forward integration.",
  },
]);
// const partners = ref([
//   "/img/partners/img1.png",
//   "/img/partners/img2.png",
//   "/img/partners/img3.png",
//   "/img/partners/img4.png",
//   "/img/partners/img5.png",
//   "/img/partners/img6.png",
//   "/img/partners/img7.png",
// ]);
const slides = ref([
  {
    img: "/img/slide1.png",
    title: "Vision",
    desc: "To Provide agricultural solutions to an oil dependent Nigeria",
  },
  {
    img: "/img/slide2.png",
    title: "Mission",
    desc: "To provide Business Support to the vulnerable group in the VC which are mainly women and youth",
  },
  {
    img: "/img/slide3.png",
    title: "Core Value",
    desc: " Building business relationships and linkages to financial institutions, input, and out markets as well as forward integration.",
  },
]);
const testimonies = ref([
  "PVNL in partnership with Base of the Pyramid Innovation Center, Netherland (implemented by 2SCALE) supported the development of marketing concept for Tombrown processing among 2,000 women and youth groundnut processors in Pampaida, Ikara LGA Kaduna State in year 2016.",
  "PVNL provided business support to N2Africa project on soybeans inoculation at Lere, Kubau, Kajuru and Jema'a LGA from 2013 to 2017.",
  "PVNL provided business support to N2Africa project on soybeans inoculation at Lere, Kubau, Kajuru and Jema'a LGA from 2013 to 2017.",
]);
</script>

<style scoped lang="scss">
.partnerr {
  margin: 1rem 0 3rem;
  width: 100%;
}
.partner {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1rem 1rem;
  min-height: 400px !important;
  width: 270px;
  transition: all 0.5s ease-in-out;
}

.women {
  margin-bottom: 0.95rem;
}

.women img {
  width: 100%;
  height: 200px;
}
.partner:hover {
  transform: scale(1.1);
}
.slide_container {
  // min-height: 30em;
  width: 25em;
}

.partner h4 {
  font-size: 1.1rem;
  line-height: 1.6rem;
  margin: 0.75rem 0;
}
.partner p {
  margin: 0.35rem 0;
}
.btn {
  width: 40%;
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
.slide_container {
  min-height: 28em;
  width: 25em;
}

.slide_text {
  height: 95px;
  margin-bottom: 0.65rem;
}
.slide-img {
  height: 200px;
}
.big:hover {
  z-index: 4;
}
.small_btn {
  background: white;
  transition: 0.25s ease-in-out;
}
.small_btn:hover {
  background: linear-gradient(110.24deg, #448b42 36.53%, #05bd01 115.27%);
  transform: scale(1.1);
}
.testimony_container {
  height: 40em;
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
.main_center {
  margin: 4em 0;
}
.desc_container {
  // max-width: 500px;
}
.dc-con {
  padding: 0 3rem 0 0;
}

// .img_container {
//   max-width: 30em;
//   img {
//     width: 100%;
//   }
// }

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
  margin: 0 2rem;
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

@media (max-width: 1000px) {
  .flexer {
    display: flex;
    flex-direction: column-reverse;
  }
}
@media (min-width: 768px) {
  .arrow_container {
    left: -12em;
    position: absolute;
    justify-content: start;
    margin-bottom: 0;
  }
}
@media (max-width: 430px) {
  .btn {
    width: 60%;
  }
  .dc-con {
    padding: 0;
  }
}
</style>
