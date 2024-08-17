<template>
  <h2>{{ project }}</h2>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  project: String,
});
console.log(props.project);
</script>
