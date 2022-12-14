<template>
  <div class="modal fixed top-0 left-0 z-[1000]">
    <div
      class="modal__backdrop w-screen h-screen bg-[#2B2C2D] justify-center flex opacity-90"
      @click.self="$emit('close')"
    >
      <div class="modal__container">
        <slot>
        default
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>



<!-- modal ochilshi uchun yoziladi

     <button @click="toggleModal">open Modal</button>
  <teleport to="#modal" v-if="isOpen">
    <Modal @close="toggleModal">

      </Modal>
  </teleport>


  index.html ichiga id bilan body berialdi

  item in  
 -->