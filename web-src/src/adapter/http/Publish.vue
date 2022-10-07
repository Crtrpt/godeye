<template>
  <div class="border-t  flex flex-col h-full">
    <div class="h-10 p-1 flex items-center">
        
       <div class="flex flex-grow">
        <select class="block pr-10 text-sm form-input px-2 py-1 rounded border-gray-300">
            <option>json</option>
            <option>text</option>
        </select>
       </div>
       <div class="flex items-center">

        <input v-model="enableInteval" type="checkbox" class=" mx-1 block text-sm form-input px-2 py-1 rounded border-gray-300" />

        <input v-model="interval" placeholder="定时发送" class="w-20 block text-sm form-input px-2 py-1 rounded border-gray-300" />
        <PrimaryBtn title="发布"></PrimaryBtn>
       </div>
    </div>
    <div class="border-t  flex-grow overflow-auto">
      <div ref="editor" class="h-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import {basicSetup, EditorView} from "codemirror"
import { javascript } from "@codemirror/lang-javascript";
import PrimaryBtn from "../../components/PrimaryBtn.vue";
const enableInteval=ref(true)
const interval=ref(0);

const editor = ref<Element>();

onMounted(() => {
  let ed = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: editor.value,
  });
  console.log(editor);
  console.log("挂载");
});
</script>

