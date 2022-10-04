<template>
    <div class=" text-sm px-4 py-1 border border-red-500 mx-1 rounded 
    dark:border-red-700
    text-red-500
    hover:text-red-600 cursor-pointer ">{{title}}</div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
   var  props=  defineProps({
        title:String
    })
</script>