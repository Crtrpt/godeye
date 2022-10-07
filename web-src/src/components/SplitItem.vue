<template>
    <div :id=id><slot></slot></div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
    
import { onMounted, useSlots } from "@vue/runtime-core";

const props=defineProps({
    id:String
})
</script>