<template>
  <div class="bg-white">
    <div class="container py-6 flex justify-between">
      <div>
        <Tab />
      </div>

      <div class="flex gap-5 relative items-center">
        <div class="flex items-center">
          <div class="absolute left-2.5">
            <img src="@/assets/icon/search.png" alt="logo" />
          </div>
          <input
            class="w-[284px] bg-[#E8E8E8] focus:border-[#3365FC] border-2 border-transparent rounded-md p-[10px] outline-none font-normal text-[15px] text-[#B1B1B8] pl-8"
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          class="gap-2.5 items-center flex bg-[#EDF1FD] rounded-md py-2.5 px-5 border-2 border-[#EDF1FD] hover:border-2 hover:border-[#3365FC] cursor-pointer"
        >
          <div>
            <img src="@/assets/icon/filter.png" alt="icon" />
          </div>

          <h3 class="font-['sfpro'] font-medium text-sm text-[#3365FC]">
            Filter
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tab from "@/components/LikeAtab.vue";
</script>
