<template>
    <div class="flex items-center">
                
              <label class="mx-1 flex items-center">
                <input
                :name="name"
                :value="0"
                v-model="modelValue"
                @change="()=>{emit('update:modelValue')}"
                class="block text-sm  px-2 py-1  border-gray-300"
                type="radio"
              />

               <div class="mx-1">仅此一次</div>
            </label>

                <label  class=" flex items-center">
              <input
              :name="name"
                v-model="modelValue"
                @change="()=>{emit('update:modelValue')}"
                class="block text-sm  px-2 py-1  border-gray-300"
                type="radio"
                :value="1"
              />
              <div class="mx-1">至多一次</div></label>

              <label  class=" flex items-center">
              <input
              :name="name"
              :value="2"
              @change="()=>{emit('update:modelValue')}"
                v-model="modelValue"
                class="block text-sm  px-2 py-1  border-gray-300"
                type="radio"
              />
              <div class="mx-1">至少一次</div>
            </label>
    </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const props=defineProps({
    modelValue:Number,
    name:String
})
const emit=defineEmits(['update:modelValue'])
</script>