<template>
    <div class=" text-sm px-4 py-1 border border-blue-500 mx-1 rounded 
    dark:border-blue-700
    text-blue-500
    hover:text-blue-600 cursor-pointer ">{{title}}</div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
   var  props=  defineProps({
        title:String
    })
</script>