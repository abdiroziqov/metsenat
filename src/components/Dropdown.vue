<template>
  <div
    class="inline-flex items-center relative cursor-pointer"
    @click="is_open = !is_open"
  >
    <span class="text-3xl text-[#23262F] font-bold">{{ selected }}</span>
    <img
      src="@/assets/icon/chevron-down.png"
      alt="chevron"
      :class="{ active: is_open }"
    />
    <transition name="dropdown_menu">
      <ul
        class="absolute text-center top-10 z-10 bg-white rounded-2xl"
        v-show="is_open"
      >
        <li
          class="text-3xl text-[#23262F] font-bold border-b border-solid border-[#E6E8EC] p-5 rounded-2xl"
          v-for="item in items"
          :key="item"
          @click="selected = item"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<!-- <script>
export default {
    props: {
        items: {
            type: Array,
            default: ['Sellers', 'Customer2', 'Customer3']
        }
    },
    data() {
        return {
            selected: this.items[0],
            is_open: false,
            }
    },
}
</script> -->

<script setup>
import { ref } from "vue";
const default = ["Sellers", "Customer2", "Customer3"];

const selected = this.items[0];
const is_open = ref(false);
</script>

<style scoped>
img {
  transition: 0.5s;
}
img.active {
  transform: rotate(180deg);
}
.dropdown-menu-enter-active,
.dropdown-menu-leave-active {
  transition: 0.5s ease;
}

.dropdown-menu-enter-from,
.dropdown-menu-leave-to {
  transform: translateY(5px);
  opacity: 0;
}
</style>
