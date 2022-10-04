<template>
    <div class="flex flex-col w-full h-full">
        <div class="head bg-gray-100 dark:bg-gray-900 flex flex-shrink-0 justify-center items-center p-2 h-12 border-b dark:border-gray-700">
           <div class="flex-grow flex items-baseline">
            <div class=" text-gray-500">{{title}}</div>
            <div class="pl-2  text-xs text-gray-400">{{desc}}</div>
           </div>
            <div>{{action}}</div>
        </div>
        <slot name="content">
            <div class="body p-2 flex-grow overflow-auto">
                <slot ></slot>
            </div>
        </slot>
        <slot name="foot" class=" bg-gray-100">
          
        </slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const  props=defineProps({
    title:String,
    desc:String,
    action:String,
})



</script>