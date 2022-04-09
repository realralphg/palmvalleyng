<template>
  <div class="card_wrap rounded-md my-2 shadow-xl">
    <div
      class="p-4 flex items-center text-center rounded-md flex-col justify-center services_card bg-white relative"
    >
      <div class="p-4 absolute top_img bg-green rounded">
        <img :src="service.img" class="w-14" />
      </div>
      <p class="font-bold block text-green text-xl my-2">
        {{ service.title }}
      </p>
      <p class="my-2 block text-lg">
        {{ service.desc }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  service: Object,
});
</script>

<style lang="scss" scoped>
.services_card {
  height: 20em;
  max-width: 28em;
}
.card_wrap {
  padding: 2px;
  background: rgb(68, 139, 66);
  background: linear-gradient(
    180deg,
    rgba(68, 139, 66, 0.823) 72%,
    rgba(255, 255, 255, 1) 100%
  );
}
.top_img {
  top: -3em;
}
</style>
