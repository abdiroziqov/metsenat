<template>
  <div
    class="top-[7%] mx-6 text-center relative p-8 bg-[#FCFCFD] shadow-[0px_64px_64px_-48px_rgba(31,47,70,0.12)] rounded-3xl"
  >
    <div class="flex justify-between mb-8">
      <h3 class="font-bold text-[32px] leading-10 text-[#23262F]">
        Checkout
      </h3>
      <button @click="$emit('close')">
        <img
          class="hover:border-[#3772FF] duration-300 p-2 border-2 border-solid border-[ #E6E8EC] rounded-[48px] cursor-pointer"
          src="@/assets/icon/close-modal.png"
          alt=""
          
        />
      </button>
    </div>
    <h5 class="mb-8 font-['poppins'] font-normal text-[#23262F]">
      You are about to purchase C O I N Z from UI8
    </h5>

    <div
      class="flex justify-between font-['poppins'] font-medium text-[#23262F] pb-3 border-b border-solid border-[#E6E8EC]"
    >
      <h6>0.007</h6>
      <h6>ETH</h6>
    </div>
    <div>
      <div class="flex justify-between mt-3">
        <h5 class="font-['poppins'] font-normal text-[#777E91]">
          Your balance
        </h5>
        <h5 class="font-['poppins'] font-normal text-[#23262F]">
          8.498 ETH
        </h5>
      </div>
      <div class="flex justify-between my-3">
        <h5 class="font-['poppins'] font-normal text-[#777E91]">
          Service fee
        </h5>
        <h5 class="font-['poppins'] font-normal text-[#23262F]">0 ETH</h5>
      </div>
      <div class="flex justify-between">
        <h5 class="font-['poppins'] font-normal text-[#777E91]">
          You will pay
        </h5>
        <h5 class="font-['poppins'] font-normal text-[#23262F]">
          0.007 ETH
        </h5>
      </div>
    </div>
    <div class="p-6 bg-[rgba(239,70,111,0.08)] rounded-lg flex gap-4 my-8">
      <div><img src="@/assets/icon/warning.png" alt="" /></div>
      <div class="text-[#EF466F] font-['poppins'] text-left">
        <h4 class="font-medium">This creator is not verified</h4>
        <h4 class="font-normal">Purchase this item at your own risk</h4>
      </div>
    </div>
    <div>
      <router-link to="#">
        <button
          class="w-full hover:bg-inherit hover:border-[#3772FF] hover:text-[#23262F] duration-300 font-bold text-[#FCFCFD] px-6 py-3 bg-[#3772FF] border-[#3772FF] border-2 border-solid rounded-[90px]"
        >
          Purchase now
        </button>
      </router-link>

      <router-link to="#" class="mt-2">

        <button class="mt-2 w-full justify-center flex px-6 py-4"
          >Place a bid
        </button>
      </router-link> 
    </div>
  </div>
</template>



<style></style>
