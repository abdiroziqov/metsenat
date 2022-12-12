<template>
  <div class="container ">
    <div class="mb-12">
      <img src="@/assets/icon/logo.png" alt="logo" />
    </div>
    <div
      class="p-8 bg-white border border-solid border-[#EBEEFC] shadow-[0px_5px_40px_rgba(0,0,0,0.03)] rounded-xl"
    >
      <div>
        <h3 class="font-['sfpro'] font-bold text-2xl text-[#28293D] mb-11">
          Kirish
        </h3>
        <div class="block">
          <label class="uppercase font-medium text-xs text-[#1D1D1F] mb-2"
            >login</label
          >
          <input
            v-model="password"
            type="text"
            placeholder="adm8904"
            class="w-full block outline-none duration-200 focus:border-[#2E5BFF] bg-[rgba(224, 231, 255, 0.2)] border border-solid border-[#E0E7FF] rounded-md py-4 px-3"
          />
        </div>

        <div class="block mt-5">
          <label class="uppercase font-medium text-xs text-[#1D1D1F] mb-2"
            >parol</label
          >
          <input
            v-model="email"
            type="password"
            placeholder="Password"
            class="w-full block outline-none duration-200 focus:border-[#2E5BFF] bg-[rgba(224, 231, 255, 0.2)] border border-solid border-[#E0E7FF] rounded-md py-4 px-3"
          />
        </div>

        <button
          class="bg-[#2E5BFF] border-[#2E5BFF] rounded-md font-medium text-white py-[14px] mt-6 w-full border-2 borer-solid hover:border-[#2E5BFF] duration-300 hover:bg-inherit hover:text-black"
          @click="getMethods"
        >
          Kirish
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const password = ref("");
const email = ref("");

const getMethods = async () => {
  const obj = {
    username: password.value,
    password: email.value,
  };
  console.log(obj);
  await axios
    .post("https://metsenatclub.xn--h28h.uz/api/v1/auth/login/", obj)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style></style>
