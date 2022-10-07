<template>
  <div class="border-t  flex flex-col h-full">
    <div class="h-10 p-1 flex items-center">
        
       <div class="flex flex-grow">
        <select class="block pr-10 text-sm form-input px-2 py-1 rounded border-gray-300">
            <option value="json">json</option>
            <option value="text">text</option>
            <option value="hex">hex</option>
        </select>
       </div>
       <div class="flex items-center">

        <input v-model="enableInteval" type="checkbox" class=" mx-1 block text-sm form-input px-2 py-1 rounded border-gray-300" />

        <input v-model="interval" placeholder="定时发送" class="w-20 block text-sm form-input px-2 py-1 rounded border-gray-300" />
        <PrimaryBtn title="发布"></PrimaryBtn>
       </div>
    </div>
    <div class="border-t  flex-grow overflow-auto">
        <Split :config="{
        sizes:[50,50],
        gutterSize:10,
        direction: 'horizontal',
      }">
            <SplitItem id="editor">
                <div ref="editor" class="h-full"></div>
            </SplitItem>
            <SplitItem id="editor1">
                <div ref="editor_hex" class="h-full"></div>
            </SplitItem>
        </Split>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import {basicSetup, EditorView} from "codemirror"
import { javascript } from "@codemirror/lang-javascript";
import PrimaryBtn from "../../components/PrimaryBtn.vue";
import Split from "../../components/Split.vue";
import SplitItem from "../../components/SplitItem.vue";
import { Annotation, EditorState, Transaction } from "@codemirror/state";
const enableInteval=ref(true)
const interval=ref(0);

const editor = ref<Element>();
const editor_hex = ref<Element>();

let syncAnnotation = Annotation.define<boolean>()

function syncDispatch(tr: Transaction, view: EditorView, other: EditorView) {
  view.update([tr])
  if (!tr.changes.empty && !tr.annotation(syncAnnotation)) {
    
    let annotations: Annotation<any>[] = [syncAnnotation.of(true)]
    let userEvent = tr.annotation(Transaction.userEvent)
    if (userEvent) annotations.push(Transaction.userEvent.of(userEvent))
    other.dispatch({changes: tr.changes, annotations})
  }
}

let startState = EditorState.create({
  doc: "",
  extensions:[
  basicSetup,
  ]
})

onMounted(() => {
  let ed = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: editor.value,
    dispatch: tr => syncDispatch(tr, ed, ed_hex)
  });
  let ed_hex= new EditorView({
    state:startState,
    parent: editor_hex.value,
  });
});
</script>

