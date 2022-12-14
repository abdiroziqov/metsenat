<template>
  <div class="flex uppercse border-2 border-[#E0E7FF] rounded-md items-center">
    <router-link
      to="dashboard"
      class="border-r-2 border-[#E0E7FF] px-[55px] py-3"
    >
      Dashboard
    </router-link>
    <router-link class="border-r-2 border-[#E0E7FF] px-[55px] py-3" to="sponsor"
      >Sponsors</router-link
    >
    <router-link class="px-[55px] py-3" to="students">Students</router-link>
  </div>
</template>
<style scoped>
a.router-link-active {
  background-color: #3365fc;
  color: white;
  border-radius: 6px;
}
</style>
