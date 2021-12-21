<template>
<div class="">
    <div class="max-w-2xl my-4 mx-auto flex flex-col gap-4">
             <div class="input-box">
               <label class="text-white font-medium text-base">Fullname</label>
               <input class="p-3 text-lg outline-none rounded-sm"   type="text" />
             </div>
             <div class="input-box">
               <label class="text-white font-medium text-base">Email</label>
               <input class="p-3 text-lg outline-none rounded-sm"   type="email" />
             </div>
              <div class="input-box">
               <label class="text-white font-medium text-base">Message</label>
               <textarea  class="p-3 text-lg outline-none rounded-sm"   />
             </div>
             
           </div>
           <q-btn
            class="
              flex
              justify-between
              items-center
              p-3
              mx-auto
              rounded
              hover:text-yellow
              bg-white
              text-green
              font-medium
            "
            >
            <span>Send Message</span>
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
</template>

<script setup>

</script>

<style lang="scss" scoped>
.input-box {
    display: flex;
    flex-direction: column;
    
}
</style>