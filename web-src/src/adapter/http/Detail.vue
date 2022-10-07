<template>
    <Page title="详情" desc="">
      <template #action>
  
          <!-- <font-awesome-icon
            class="
              mx-1
              text-gray-500
              hover:text-gray-600
              p-2
              cursor-pointer
            "
            :icon="config?.view.col??false?'table-columns':'table-cols'"
            @click="config?.view.col=!(config?.view.col??false)"
          /> -->
      </template>
      <template #content>
              <Split class="flex-grow" :config="{
                  direction: 'vertical',
              }">
                  <SplitItem id="aa">
                      <div class="flex-grow p-2" >subject</div>
                  </SplitItem>
                  <SplitItem id="bb">
                      <Publish></Publish>
                  </SplitItem>
              </Split>
         
      
      </template>
    </Page>
  </template>
      
  <script setup lang="ts">
  import { ref } from "@vue/reactivity";
  import Page from "../../components/Page.vue";
  import { Session } from "../../type";
  import PrimaryBtn from "../../components/PrimaryBtn.vue";
  import SecondaryBtn from "../../components/SecondaryBtn.vue";
  import DangerBtn from "../../components/DangerBtn.vue";
  
  import Table from "./Table.vue";
  import Tab from "../../components/Tab.vue";
  import TabItem from "../../components/TabItem.vue";
  import SshTunnel from "../../type/tunnel/SshTunnel";
  import { sessionStore } from "../../store/sessionStore";
  import HttpPayload from "./HttpPayload";
  import Publish from "./Publish.vue";
  
  import { nextTick, onMounted } from "vue";
  import Split from "../../components/Split.vue";
  import SplitItem from "../../components/SplitItem.vue";
  import { useRoute } from "vue-router";
  
  const route=useRoute();
  
  const session = sessionStore();
  
  const d=session.query(route.params.id);
  console.log(d);
  const save = () => {
    form.value!.icon = "/assets/swap.png";
    session.create(form.value);
  };
  const remove = () => {
    console.log("删除");
  };
  
  </script>