<template>
     <div class="text-sm px-4 py-1 border mx-1 rounded
     dark:bg-gray-200
     dark:hover:bg-gray-100
     hover:bg-gray-100 
     cursor-pointer">{{title}}</div>
</template>


<script setup lang="ts">
    import { ref } from "@vue/reactivity";
       var  props=  defineProps({
            title:String
        })
</script>