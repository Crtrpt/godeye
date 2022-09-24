<template>
  <div class="flex h-full w-full">
    <Left class="w-80 border-r dark:border-gray-700"></Left>
    <router-view class="dark:bg-gray-900"></router-view>
  </div>
</template>

<script setup lang="ts">
import Left from "../components/left.vue";
</script>