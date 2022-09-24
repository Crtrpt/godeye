<template>
  <div class="border dark:border-gray-700 flex  rounded h-full"
  
    :class='{
        "flex-col":side=="top",
        "flex-row":side=="left"
    }'
  >
    <div class="flex dark:border-gray-700 select-none text-gray-500 text-sm bg-gray-50 dark:bg-gray-900"
    :class='{
        "flex-row  border-b":side=="top",
        "flex-col  border-r":side=="left"
    }'
    >
      <div 
      v-for=" t,idx  in tabs" 
      :key="t" 
      class="
      dark:text-gray-300
      px-4 py-2 dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 "
      :class='{
        "border-b-2":side=="top" && t==active,
        "border-r-2":side=="left" && t==active,
        "border-opacity-0 ":t!=active,
        "border-blue-500  border-opacity-100 bg-gray-100 dark:bg-gray-800 ":t==active
      }'
      @click="setActive(idx)"
      >{{t}}</div>
    </div>
    <div class="body overflow-auto" ref="slotRef">
      <slot :active="active"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

import { onMounted, useSlots } from "@vue/runtime-core";

const tabs=ref([]);
const active=ref("");


const props=defineProps({active:{
    type:Number,
    default:0
},side:{
    type:String,
    default:"top",
}});
const setActive=(idx:number)=>{
    active.value=tabs.value[idx];    
}
const slots = useSlots()
    onMounted(()=>{
        slots.default().forEach((element,idx) => {
            tabs.value.push(element.props.name)
        });
       active.value=tabs.value[props.active]
    })
</script>