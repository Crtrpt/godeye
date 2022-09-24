<template>
  <div  class="p-2" v-if="name==active.active">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { ref } from "@vue/reactivity";

const props = defineProps({ name: String,active:Object });
const emit=defineEmits(["onActive","onDisActive"])
const setActive=()=>{
    console.log("设置为active");
}
defineExpose({setActive});
</script>