<template>
    <div class="border-t  h-40 p-2">
            <div ref="editor" class=" h-full">

            </div>   
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";

import cm from "codemirror"
import {EditorView} from "@codemirror/view"
import {MySQL} from "@codemirror/lang-sql"

const editor=ref<Element>();


    onMounted(()=>{

        let ed = new EditorView({
            extensions:[MySQL],
        parent: editor.value
        })
        console.log(editor);
        console.log("挂载")
    })
</script>