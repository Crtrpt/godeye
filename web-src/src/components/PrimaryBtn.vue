<template>
    <div class=" text-sm px-4 py-1 border mx-1 rounded 
    dark:border-gray-700
    bg-blue-500
     hover:bg-blue-600 cursor-pointer text-white">{{title}}</div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
   var  props=  defineProps({
        title:String
    })
</script>