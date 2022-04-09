<template>
  <div class="card_wrap up rounded-md my-2 shadow-xl mt-20">
    <div
      class="p-4 flex items-center text-center rounded-md flex-col justify-center services_card bg-white relative"
    >
      <div
        class="h-32 w-32 flex justify-center items-center text-2xl fontbold poppins text-white absolute top_img bg-green rounded-full border-8 border-white"
      >
        {{ index + 1 }}
      </div>
      <hr
        class="w-3/4 line bg-green mx-auto border-0 absolute line my-2 p-0.5"
      />
      <!-- <p class="font-bold block text-green text-xl my-2">{{service.title}}</p> -->
      <p class="my-2 mt-20 block">
        {{ testimony }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  testimony: String,
  index: Number,
});
</script>

<style lang="scss" scoped>
.up {
  transition: 0.12s ease-in-out;
}
.services_card {
  height: 20em;
  max-width: 25em;
}
// .card_wrap {
//     padding: 2px;
//     background: rgb(68,139,66);
//     background: linear-gradient(180deg, rgba(68, 139, 66, 0.823) 72%, rgba(255,255,255,1) 100%);
// }
.top_img {
  top: -2em;
}
.line {
  top: 6em;
}
</style>
