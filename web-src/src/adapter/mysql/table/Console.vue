<template>
    <div class="border-t border-b h-full flex flex-col">
        <div class="p-1 border flex">
            <PrimaryBtn title="执行"></PrimaryBtn>
            <SecondaryBtn title="执行选中行"></SecondaryBtn>
        </div>
        <div ref="editor" class=" flex-grow">
        </div>   
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "@vue/runtime-core";

import cm, { basicSetup } from "codemirror"
import {EditorView} from "@codemirror/view"
import {sql} from "@codemirror/lang-sql"
import { EditorState } from "@codemirror/state";
import PrimaryBtn from "../../../components/PrimaryBtn.vue";
import SecondaryBtn from "../../../components/SecondaryBtn.vue";

const editor=ref(null);

const props = defineProps({
  sql: String,
});


let startState = EditorState.create({
  doc: props.sql,
  extensions:[
  basicSetup,
  sql(),
    // EditorView.updateListener.of((update)=>{
    //     if(update.docChanged){
    //         emit("update:modelValue",update.state.doc.toString())
    //     }
    // })
  ]
})
var ed=null;
watch(props,(n)=>{
    ed.dispatch({
        changes: {from: 0,  to: ed.state.doc.length, insert: props.sql }
    })
})
onMounted(() => {
  ed = new EditorView({
    state:startState,
    parent: editor.value,
  });
 

});
</script>