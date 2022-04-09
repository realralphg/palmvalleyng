<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style lang="scss">
.partnerr .splide__track {
  position: relative;
  z-index: 0;
  padding: 1.5rem 0 3rem;
}

.trips .splide__track {
  position: relative;
  z-index: 0;
  padding: 1.5rem 0 3rem !important;
}

@media (max-width: 600px) {
  .flexer {
    display: flex;
    flex-direction: column-reverse;
  }
}
@import "./assets/styles/app.scss";
</style>
