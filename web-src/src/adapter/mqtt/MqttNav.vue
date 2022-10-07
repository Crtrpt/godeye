<template>
    <div class="text-xs border-l dark:border-gray-700">
            <div 
            class="flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
                <div class="flex-grow   flex">
                    <div class="w-5"></div>    
                    <div class="border-l dark:border-gray-700  pl-3 py-2 flex-grow">topic</div>
                </div>
            </div>
            <div>
            <div
               
                class=" hover:bg-gray-200 dark:hover:bg-gray-700 flex" v-for=" t in tables" :key="t.name">
                    <div class="w-5"></div>  
                    <div class="w-5 border-l dark:border-gray-700"></div>    
                   <div class="pl-2 border-l dark:border-gray-700  py-1 cursor-pointer flex-grow"> {{t.name}}</div>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "@vue/reactivity";
    
    var tables=ref([{
        name:"/test1",
    },{
        name:"/test2",
    },{
        name:"/test3",
    }])
</script>