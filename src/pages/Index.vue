<template>
  <q-page>
    <div class="carouDiv">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        autoplay
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide
          v-for="(img, index) in carousel"
          :key="index"
          :name="index + 1"
          :img-src="img.img"
        />
      </q-carousel>
      <div
        style="max-width: 800px; margin: 0 auto"
        class="container carouText text-center text-h5 text-weight-bold q-pb-md"
      >
        <div>
          <h1 class="text-3xl poppins mb-4 font-extrabold">
            Palm Valley Nigeria <span class="text-green poppins">Limited</span>
          </h1>
          <div>
            Strategically enhancing agricultural productivity and providing
            increased access to credit and markets for women and smallholder
            farmers in Nigerian rural communities.
          </div>
        </div>
      </div>
    </div>

    <section class="projects-section">
      <div class="projects-wrap wofan container">
        <div class="left">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-8 grey--text text--darken-3"
          >
            <span class="text-green poppins">WOFAN</span>
            <span class="text-red-14">
              ICON<span class="text-orange-10">2</span>
            </span>
            PROJECT
          </h2>
          <p
            class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light"
          >
            The Women Farmers Advancement Network (WOFAN) in collaboration with
            Palm Valley Nigeria Limited is implementing the WOFAN ICON2 project
            powered by Mastercard Foundation. The project is strategically
            designed to drive sustainable agricultural growth and economic
            development in Benue, Nasarawa, and Kaduna States in Nigeria. ICON2
            aims to strengthen agricultural enterprise value chains, generate
            employment opportunities, and enhance income for women and youth
            farmers and processors. With a focus on fostering a positive
            perception of agriculture as a viable source of income, the project
            seeks to improve access to financial products and services for
            individual farmers through cooperative structures.
          </p>
        </div>
        <div class="right">
          <div class="image-grid">
            <div class="image-row">
              <div class="image image-01">
                <img src="~/assets/img/wof1.jpg" alt="" />
              </div>
              <!-- <div class="image image-02">
                <img src="~/assets/img/wof2.jpg" alt="" />
              </div> -->
              <div class="image image-03">
                <img src="~/assets/img/wof3.jpg" alt="" />
              </div>
            </div>
            <div class="image-row">
              <div class="image image-04">
                <img src="~/assets/img/wof4.jpg" alt="" />
              </div>
              <div class="image image-05">
                <img src="~/assets/img/wof5.jpg" alt="" />
              </div>
              <div class="image image-06">
                <img src="~/assets/img/wof6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="projects-section curved_green_bg">
        <div class="partnerr training">
          <Splide
            :options="{
              padding: '5rem',
              gap: '2rem',
              autoplay: true,

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
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/s1.jpg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">
                  Mbakukwa Youth Development
                </h4>
                <p>
                  Mbakukwa Youth Development Association Cooperative
                  Transplanting in their Demo Farm Plot
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/s2.jpg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">Farmers Field Day</h4>
                <p>Farmers Field Day at Zonkwa, Zangon Kataf</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/s3.jpg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">Farmers Field Day</h4>
                <p>
                  Farmers Field Day at Manchok, Kaura, to expose community
                  partners to new tehnologies in rice production
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/s4.jpg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">Farmers Field Day</h4>
                <p>
                  Farmers Field Day at Manchok, Kaura, to expose community
                  partners to new tehnologies in rice production
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/sfive.jpg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">
                  Market Linkage training
                </h4>
                <p>
                  Market Linkage training on negotiation, marketing and pricing
                  skills in Kaduna state
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/sSix.jpg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">
                  Market Linkage training
                </h4>
                <p>
                  Market Linkage training on negotiation, marketing and pricing
                  skills in Benue state
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/s7.jpg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">
                  Market Linkage training
                </h4>
                <p>
                  Market Linkage training on negotiation, marketing and pricing
                  skills in Nasarawa state
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/harvest1.jpeg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">Farmers Harvest</h4>
                <p>
                  Farmers joyfully harvesting their rice produce after a
                  bountiful yield as a result of good agronomic practice which
                  is a key deliverable of the WOFAN ICON2 Project.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/harvest2.jpeg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">Farmers Harvest</h4>
                <p>
                  Farmers joyfully harvesting their rice produce after a
                  bountiful yield as a result of good agronomic practice which
                  is a key deliverable of the WOFAN ICON2 Project.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="partner slide_container slider_height">
                <div class="women"><img src="/img/harvest1.jpeg" alt="" /></div>

                <h4 class="text-h6 text-weight-bold">Farmers Harvest</h4>
                <p>
                  Farmers joyfully harvesting their rice produce after a
                  bountiful yield as a result of good agronomic practice which
                  is a key deliverable of the WOFAN ICON2 Project.
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </section>

    <section class="projects-section">
      <div class="projects-wrap ocp side container">
        <div class="right">
          <div class="image-grid">
            <div class="image-row">
              <div class="image image-01">
                <img src="~/assets/img/ocp1.jpg" alt="" />
              </div>
              <div class="image image-02">
                <img src="~/assets/img/ocp2.jpg" alt="" />
              </div>
              <div class="image image-03">
                <img src="~/assets/img/ocp3.jpg" alt="" />
              </div>
            </div>
            <div class="image-row">
              <div class="image image-04">
                <img src="~/assets/img/ocp4.jpg" alt="" />
              </div>
              <!-- <div class="image image-05">
                <img src="~/assets/img/ocp5.jpg" alt="" />
              </div> -->
              <div class="image image-06">
                <img src="~/assets/img/ocp5.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="left">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-8 grey--text text--darken-3"
          >
            OCP AFRICA AND PALM ALLEY & AGROLOG
          </h2>
          <p
            class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light"
          >
            Palm Valley Nigeria Limited partners with OCP Africa and Agrolog
            Limited on an Agribooster initiative aimed at revolutionizing ginger
            farming in Kachia, Kaduna state. This strategic alliance marries OCP
            Fertilizers' expertise in cutting-edge agricultural solutions with
            Palm Valley's unwavering commitment to community empowerment, and
            Agrolog's dedication to sustainable farming practices. The
            collective mission is singular and resolute: to elevate the
            productivity and quality of ginger farming, enhance the lives of
            local farmers, and champion the adoption of environmentally
            sustainable agricultural methodologies. With a shared vision for a
            thriving, sustainable agricultural landscape, this partnership
            aspires to spark a transformative wave in Kachia, Kaduna, and
            beyond.
          </p>
        </div>
      </div>
    </section>
    <section class="projects-section">
      <div class="projects-wrap agra container">
        <div class="left">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-8 grey--text text--darken-3"
          >
            AGRA
          </h2>
          <p
            class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light"
          >
            Palm Valley Nigeria Limited in partnership with Alliance for a Green
            Revolution in Africa (AGRA) embarks on an Inclusive Agricultural
            Transformation Project to increase household incomes, financial
            inclusion, food security and resilience for 50,000 smallholder women
            and youths in Kaduna and Niger State, Nigeria. Specific objectives
            include; Increase productivity for women smallholder farmers in
            Niger and Kaduna States, Strengthened and expanded women"s access to
            output markets and Increased capacity of small holder farming
            households and agricultural systems to better prepare for and adapt
            to shocks and stress.
          </p>
        </div>
        <div class="right">
          <div class="image-grid">
            <div class="image-row">
              <div class="image image-01">
                <img src="~/assets/img/agra1.jpg" alt="" />
              </div>
              <div class="image image-02">
                <img src="~/assets/img/agra5.jpg" alt="" />
              </div>
              <div class="image image-03">
                <img src="~/assets/img/agra3.jpg" alt="" />
              </div>
            </div>
            <div class="image-row">
              <div class="image image-04">
                <img src="~/assets/img/agra4.jpg" alt="" />
              </div>
              <div class="image image-05">
                <img src="~/assets/img/agra2.jpg" alt="" />
              </div>

              <div class="image image-06">
                <img src="~/assets/img/agra6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="curved_green_bg">
      <div class="wrapper trips">
        <div class="text-center flex flex-col justify-center items-center">
          <p
            class="text-2xl text-white relative poppins mb-4 under_after font-semibold"
          >
            PVNL-AGRA Agricultural Transformation Project
          </p>
          <p class="text-white text-lg my-2 max-w-8xl">
            Palm Valley in partnership with Alliance for a Green Revolution in
            Africa (AGRA) embarks on an Inclusive Agricultural Transformation
            Project to increase household incomes, financial inclusion, food
            security and resilience for 50,000 smallholder women and youths in
            Kaduna and Niger State, Nigeria.
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
                class="slide_contain slider_height border rounded bg-white shadow-lg p-4"
              >
                <q-img
                  src="/img/sm1.jpeg"
                  class="shadow-lg slide-img rounded"
                />
                <div class="details_container my-4">
                  <h4 class="font-semibold text-lg">Training</h4>
                  <p>
                    Palm Valley's End of Season Training on Harvest and Post
                    Harvest Processing for Quality Ginger in Kaduna.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                class="slide_contain slider_height border rounded bg-white shadow-lg p-4"
              >
                <q-img
                  src="/img/sm2.jpeg"
                  class="shadow-lg slide-img rounded"
                />
                <div class="details_container my-4">
                  <h4 class="font-semibold text-lg">Training</h4>
                  <p>
                    Training of Sales and Marketing Ambassadors on Market
                    Prospecting.
                  </p>

                  <a
                    class="q-pa-sm bg-green text-white q-mt-md"
                    target="_blank"
                    href="https://www.instagram.com/p/Ck-tdmVtPyF/"
                    >Read more</a
                  >
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                class="slide_contain slider_height border rounded bg-white shadow-lg p-4"
              >
                <q-img
                  src="/img/agra6.jpg"
                  class="shadow-lg slide-img rounded"
                />
                <div class="details_container my-4">
                  <h4 class="font-semibold text-lg">AGRA Gender Consortium</h4>

                  <p>
                    AGRA Gender Consortium Pre and Post-Harvest Training of
                    Trainers and Brown Field Day.
                  </p>

                  <a
                    class="q-pa-sm bg-green text-white q-mt-md"
                    target="_blank"
                    href="https://www.instagram.com/p/Ck76vj-NeW3/"
                    >Read more</a
                  >
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                class="slide_contain slider_height border rounded bg-white shadow-lg p-4"
              >
                <q-img
                  src="/img/palm11.jpeg"
                  class="shadow-lg slide-img rounded"
                />
                <div class="details_container my-4">
                  <h4 class="font-semibold text-lg">Project</h4>
                  <p>Seeds on wheels project with East west seeds</p>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div
                class="slide_contain border slider_height rounded bg-white shadow-lg p-4"
              >
                <q-img
                  src="/img/palm33.jpeg"
                  class="shadow-lg slide-img rounded"
                />
                <div class="details_container my-4">
                  <h4 class="font-semibold text-lg">Farmers Greenfield day</h4>
                  <p>Farmers Greenfield day at ginger Demo Plot in kachia</p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="slide_contain border rounded bg-white shadow-lg p-4">
                <q-img
                  src="/img/palm55.jpeg"
                  class="shadow-lg slide-img rounded"
                />
                <div class="details_container my-4">
                  <h4 class="font-semibold text-lg">Inauguration</h4>
                  <p>
                    The inauguration of the OCP ultra modern fertilizer blending
                    plant and center of excellence.
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
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
            autoplay: true,
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
    <div class="blog_container my-20">
      <div class="wrapper">
        <div
          class="flex flex-col justify-center text-center items-center mb-10 my-4"
        >
          <p
            class="text-2xl relative poppins mb-4 text-green under_after font-semibold"
          >
            Blog and Update
          </p>
          <!-- <p class="max-w-lg">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempory
          </p> -->
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
    </div>
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
const slide = ref(1);
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
    img: "https://cdn.vanguardngr.com/wp-content/uploads/2022/07/images-54.jpeg?width=350&auto_optimize=medium",
    date: "12 July,2022",
    desc: "We must fight climate change with climate-smart agriculture to sustain food system — Dr Maigari",
    viewMore:
      "https://www.vanguardngr.com/2022/07/we-must-fight-climate-change-with-climate-smart-agriculture-to-sustain-food-system-dr-maigari/",
  },
  {
    img: "https://leadership.ng/wp-content/uploads/2022/07/Nigerian-AgriBusiness-Group-NABG-1.jpg",
    date: "12 October,2023",
    desc: "NABG, Others To Deploy Climate-smart Agriculture To Fight Poverty",
    viewMore:
      "https://leadership.ng/nabg-others-to-deploy-climate-smart-agriculture-to-fight-poverty/",
  },
  {
    img: "https://guardian.ng/wp-content/uploads/2020/07/shutterstock_1106271755-800x450.jpg",
    date: "10 October,2023",
    desc: "NABG to deploy climate smart agric techniques in food production",
    viewMore:
      "https://guardian.ng/business-services/nabg-to-deploy-climate-smart-agric-techniques-in-food-production/",
  },
  // {
  //   img: "/img/blog/img4.png",
  //   date: "12 October,2021",
  //   desc: "High-tech farming in Canada...",
  // },
]);
const carousel = ref([
  {
    img: "/img/carou1.jpg",
  },
  {
    img: "/img/carou2.jpg",
  },
  {
    img: "/img/carou3.jpg",
  },
  {
    img: "/img/carou4.jpg",
  },
  {
    img: "/img/carou5.jpg",
  },
  {
    img: "/img/carou6.jpg",
  },
  {
    img: "/img/carou7.jpg",
  },
  {
    img: "/img/carou8.jpg",
  },
  {
    img: "/img/carou9.jpg",
  },
  {
    img: "/img/carou10.jpg",
  },
  {
    img: "/img/carou11.jpg",
  },
  {
    img: "/img/carou12.jpg",
  },
  {
    img: "/img/carou13.jpg",
  },
]);
const services = ref([
  {
    img: "/img/Eyes.svg",
    title: "Vision",
    desc: "Improved and sustainable standard of living for Women and Youth in Rural Communities of Nigeria.",
  },
  {
    img: "/img/optical.svg",
    title: "Mission",
    desc: "Empowering Rural Communities Through the provision of embedded support services and improved access to markets for women and children.",
  },
  {
    img: "/img/tilda.svg",
    title: "Core Values",
    desc: " Integrity, Transparency, Collaboration, Excellence.",
  },
  {
    img: "/img/dots.svg",
    title: "Key Activities",
    desc: "  Agribusiness, Access to finance, Access to markets, Training and capacity building, Gender mainstreaming, Extension services.",
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
    desc: "Improved and sustainable standard of living for Women and Youth in Rural Communities of Nigeria.",
  },
  {
    img: "/img/slide2.png",
    title: "Mission",
    desc: "Empowering Rural Communities Through the provision of embedded support services and improved access to markets for women and children.",
  },
  {
    img: "/img/slide3.png",
    title: "Core Values",
    desc: " Integrity, Transparency, Collaboration, Excellence.",
  },
  {
    img: "/img/slide3.png",
    title: "Key Activities",
    desc: " Agribusiness, Access to finance, Access to markets, Training and capacity building, Gender mainstreaming, Extension services.",
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
  min-height: 430px !important;
  width: 270px;
  transition: all 0.5s ease-in-out;
}

.training {
  margin-top: 7rem;

  h4 {
    font-size: 18px !important;
    line-height: 1.2;
  }
  p {
    line-height: 1.2;
  }

  .partner {
    min-height: 380px !important;
  }
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

.details_container {
  p {
    line-height: 1.2;
  }
  h4 {
    text-transform: capitalize;
  }
}

.partner h4 {
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: capitalize;
  // margin: 0.75rem 0;
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
  min-height: 30em;
  width: 25em;
}
.slide_contain {
  min-height: 27em;
  position: relative;
  width: 25em;
  a {
    display: inline-block;
    position: absolute;
    bottom: 4%;
    left: 2%;
  }
}
.slide_contain.carou {
  min-height: auto;
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

.dc-con {
  padding: 0 3rem 0 0;
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
  margin: 0 2rem;
  min-width: 300px;
  width: 100%;
  height: 500px;
  object-fit: contain;
}

// additions
.projects-section {
  margin: 2rem 0;
}
.projects-section .left h2 {
  position: relative;
  font-weight: 700;
}

.projects-wrap {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 2rem;
  // place-items: center;
  align-items: center;
}
.projects-wrap.side {
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 2rem;
  // place-items: center;
  align-items: center;
}
.projects-section .left p {
  font-size: 1rem;
}
.projects-wrap-two {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  // place-items: center;
  align-items: center;
}

@media (max-width: 800px) {
  .projects-wrap-two {
    // display: grid;
    // grid-template-columns: 1fr;
    gap: 2rem;
    // place-items: center;
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
  }

  .wrapper {
    grid-template-columns: 1fr;
  }

  .flexer {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .projects-wrap-two .left {
    order: 1;
    width: 100%;
  }
  .projects-wrap-two .right {
    order: 2;
    text-align: center;
  }
  .projects-wrap .left {
    order: 1;
    text-align: center;
  }
  .projects-wrap .right {
    order: 2;
    text-align: center;
  }

  .projects-wrap {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    // place-items: center;
  }
}

// .projects-wrap h2::after,
// .projects-wrap-two h2::after {
//   display: block;
//   height: 2px;
//   width: 100px;
//   background-color: #009432;
//   content: " ";
//   margin: 0 auto;
//   margin-bottom: 30px;
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
// }
.projects-wrap h2,
.projects-wrap-two h2 {
  margin: 1rem auto;
  font-weight: 500;
  font-size: 2rem;
  text-transform: uppercase;
  color: #424242 !important;
  caret-color: #424242 !important;
  font-weight: 300;
}

.image-grid img {
  object-fit: cover !important;
  width: 100%;
}
.image-grid img:hover {
  transform: scale(1.1);
  transition: 0.45s ease-in-out;
  cursor: pointer;
}

.image-row {
  display: flex;
}

.image-row .image {
  margin: 12px;
  height: 240px;
}
.image-row .image:hover {
  transform: scale(1.1);
  transition: 0.45s ease-in-out;
  cursor: pointer;
}

.image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.image-01 {
  // background-image: url("../assets/img/agra1.jpg");
  flex: 1;
}

.image-02 {
  // background-image: url("../assets/BenueRice4.jpg");
  flex: 1;
}

.image-03 {
  // background-image: url("../assets/BenueRice5.jpg");
  flex: 1;
}

.image-04 {
  // background-image: url("../assets/BenueRice6.jpg");
  flex: 1;
}

.image-05 {
  flex: 3;
}

.image-07 {
  // background-image: url("../assets/BenueRice7.jpg");
  flex: 3;
}

.projects-wrap .image-grid img {
  object-fit: cover !important;
  width: 100%;
  height: 100%;
}
.projects-wrap .image-grid img:hover {
  transform: scale(1.1);
  transition: 0.45s ease-in-out;
  cursor: pointer;
}

.projects-wrap .image-row {
  display: flex;
}

.projects-wrap .image-row .image {
  margin: 5px;
  height: 170px;
}
.projects-wrap .image-row .image:hover {
  transform: scale(1.1);
  transition: 0.45s ease-in-out;
  cursor: pointer;
}

img {
  border-radius: 5px;
}

.projects-wrap .image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.projects-wrap .image-01 {
  // background-image: url("../assets/Manzo3.png");
  flex: 3;
}

.projects-wrap .image-02 {
  // background-image: url("../assets/Manzo33.png");
  flex: 2;
}

.projects-wrap .image-03 {
  // background-image: url("../assets/manzo333.png");
  flex: 2;
}

.projects-wrap .image-04 {
  // background-image: url("../assets/HungaroSeed.png");
  flex: 2;
}

.projects-wrap .image-05 {
  // background-image: url("../assets/Tetra.png");
  flex: 2;
}

.image-06 {
  // background-image: url("../assets/Alphavet.png");
  flex: 3;
}

.projects-wrap .image-07 {
  // background-image: url("../assets/BenueRice7.jpg");
  flex: 2;
}

@media screen and (max-width: 600px) {
  .image-row {
    flex-direction: column;
  }
  .image-01 {
    // background-image: url("../assets/rice1.jpg");
    flex: 2;
  }

  .image-row .image {
    flex-basis: auto;
  }

  .projects-wrap {
    grid-template-columns: 1fr;
  }

  .projects-wrap.side {
    grid-template-columns: 1fr;
  }

  .text-h5 {
    font-size: 1rem;
    line-height: 1.2;
  }
  .partner h4 {
    line-height: 1.3;
    font-size: 16px !important;
  }
  .training .partner {
    min-height: 350px !important;
  }
  h1.text-5xl {
    font-size: 2rem !important;
    line-height: 1;
  }
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
