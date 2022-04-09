<template>
  <div class="partnerr">
    <Splide :options="options">
      <SplideSlide>
        <div class="partner">
          <h5>
            <span class="text-weight-bold">Name of group:</span> Nasara Women
            <br />
            Cooperative Union
          </h5>
          <h3><span class="text-weight-bold">Membership:</span>10000</h3>
          <p>
            <span class="text-weight-bold">Location:</span>Pampaida Ikara LGA
          </p>
          <h5>
            <span class="text-weight-bold">Value chain:</span>Rice, Maize and
            Soyabeans
          </h5>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="partner">
          <h5>
            <span class="text-weight-bold">Name of group:</span> Jaba Ginger
            Farmers’ <br />
            Cooperative Society
          </h5>
          <h3><span class="text-weight-bold">Membership:</span> 2000</h3>
          <p><span class="text-weight-bold">Location:</span> Kwoi</p>
          <h5><span class="text-weight-bold">Value chain:</span>Ginger</h5>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="partner">
          <h5>
            <span class="text-weight-bold">Name of group:</span> Chikun Chili
            Pepper
          </h5>
          <h3><span class="text-weight-bold">Membership:</span> 1000</h3>
          <p><span class="text-weight-bold">Location:</span> Kaduna</p>
          <h5>
            <span class="text-weight-bold">Value chain:</span> Tomato and chill
            pepper
          </h5>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="partner">
          <h5>
            <span class="text-weight-bold">Name of group:</span> Groundnut
            Cluster
          </h5>
          <h3><span class="text-weight-bold">Membership:</span> 600</h3>
          <p>
            <span class="text-weight-bold">Location:</span> Pampaida, Ikara LGA
          </p>
          <h5><span class="text-weight-bold">Value chain:</span> Groundnut</h5>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="partner">
          <h5>
            <span class="text-weight-bold">Name of group:</span>Soybean Cluster
          </h5>
          <h3><span class="text-weight-bold">Membership:</span>5000</h3>
          <p>
            <span class="text-weight-bold">Location:</span>Yarkasuwa Lere LGA
          </p>
          <h5><span class="text-weight-bold">Value chain:</span>Soyabeans</h5>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="partner">
          <h5>
            <span class="text-weight-bold">Name of group:</span> Yeyock Sabzuro
            Women <br />
            Ginger Coop Society
          </h5>
          <h3><span class="text-weight-bold">Membership:</span>1500</h3>
          <p><span class="text-weight-bold">Location:</span>Kwoi</p>
          <h5><span class="text-weight-bold">Value chain:</span>Ginger</h5>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="partner">
          <h5>
            <span class="text-weight-bold">Name of group:</span> Nasara Women
            <br />
            Cooperative Union
          </h5>
          <h3><span class="text-weight-bold">Membership:</span>1000</h3>
          <p>
            <span class="text-weight-bold">Location:</span>Pampaida Ikara LGA
          </p>
          <h5>
            <span class="text-weight-bold">Value chain:</span>Rice, Maize and
            Soyabeans
          </h5>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
// import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        arrows: false,
        perPage: 3,
        width: "100%",
        gap: "1rem",
        breakpoints: {
          1000: {
            perPage: 3,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.partnerr {
  margin: 1rem 0 3rem;
  width: 100%;
}
.partner {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2rem 1rem;
  min-height: 240px;
  width: 270px;
}

.slide_container {
  width: 25em;
}

.partner h5 {
  line-height: 1.2rem;
}
</style>
