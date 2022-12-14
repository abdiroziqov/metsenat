<template>
  <div class="flex justify-betwen gap-7 mt-12">
    <div class="w-full" v-for="item in items" :key="item">
      <div
        class="flex gap-4 bg-white border border-[rgba(46,91,55,0.08)] rounded-lg items-center p-6"
      >
        <div
          class="rounded-xl flex items-center p-3"
          :style="{ 'background-color': item.hex }"
        >
          <img :src="item.icon" alt="icon" />
        </div>
        <div>
          <h5 class="font-normal text-xs text-[#7A7A9D]">
            {{ item.title }}
          </h5>
          <h6 class="font-bold text-xl text-[#2E384D] mr-4">
            {{ item.summa }}
            <span class="font-['sfpro'] font-bold text-xl text-[#B2B7C1]"
              >UZS</span
            >
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = [
  {
    icon: "src/assets/icon/sum1.png",
    hex: "rgba(76, 111, 255, 0.1)",
    title: "Jami to‘langan summa",
    summa: "1 684 325 000",
  },
  {
    icon: "src/assets/icon/sum2.png",
    hex: "rgba(237, 199, 0, 0.1)",
    title: "Jami so‘ralgan summa",
    summa: "14 098 530 000",
  },
  {
    icon: "src/assets/icon/sum3.png",
    hex: "rgba(237, 114, 0, 0.1)",
    title: "To‘lanishi kerak summa",
    summa: "12 414 205 000",
  },
];
</script>
