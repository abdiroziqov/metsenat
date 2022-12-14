<template>
  <div>
    <h2>{{ title }}</h2>
    <p> {{msg}} </p>
    <button @click.self="$emit('close')">close</button>
  </div>
</template>

<script setup>
import { defineProps} from "vue";

defineProps({
  title: String,
  msg: String,
});
</script>

<style></style>
