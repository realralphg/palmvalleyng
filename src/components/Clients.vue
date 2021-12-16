<template>
    <div class="flex transform -translate-y-24 border-4 border-white  bg-green gap-10 mx-auto text-center sm:text-left sm:flex-row sm:flex-nowrap justify-center p-6 max-w-3xl rounded-lg items-center">
        <div class="img_container">
            <img :src="'/img/250+.svg'" class="w-full"/>
        </div>
        <div class="max-w-sm my-2">
            <p class="font-bold text-2xl text-white">Served 250+ Clients....<br />in 20 states</p>
            <p class="text-white">
                Through partnerships, we provide premium services for our ever-increasing clientele base across different states in Nigeria.
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.img_container {
    max-width: 150px;
}
.bg-green {
    background-color: #448B42;
}
</style>