<template>
  <div class="app_layout flex h-full w-full">
    <Split
      class="flex-grow"
      :config="{
        sizes:[20,80],
        gutterSize:0,
        direction: 'horizontal',
      }"
    >
      <SplitItem id="left">
        <Left class="h-full flex-shrink-0 border-r dark:border-gray-700"></Left>
      </SplitItem>
      <SplitItem id="main">
        <router-view class="h-full dark:bg-gray-900"></router-view>
      </SplitItem>
    </Split>
  </div>
</template>

<script setup lang="ts">
import Left from "../components/Left.vue";
import Split from "../components/Split.vue";
import SplitItem from "../components/SplitItem.vue";
</script>