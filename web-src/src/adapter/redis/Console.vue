<template>
  <div class=" h-full border">
    <div ref="editor" class="h-full"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import { basicSetup, EditorView } from "codemirror";
import { keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";

const editor = ref<Element>();

let ed=null

const props = defineProps({
  modelValue: String,
  encode:String,
});

const emit=defineEmits([
'update:modelValue'
])

let startState = EditorState.create({
  doc: props.modelValue,
  extensions:[
  basicSetup,
  javascript(),
    EditorView.updateListener.of((update)=>{
        if(update.docChanged){
            emit("update:modelValue",update.state.doc.toString())
        }
    })
  ]
})

onMounted(() => {
  ed = new EditorView({
    state:startState,
    parent: editor.value,
  });
 

});


</script>