<template>
  <Page title="" desc="">
    <template #leading>
        <div>正在连接</div>
        <InfoBtn title="断开连接"></InfoBtn>
        <InfoBtn title="重新连接"></InfoBtn>
    </template>
    <template #action>
       
        <font-awesome-icon
          class="
            mx-1
            text-gray-500
            hover:text-gray-600
            p-2
            cursor-pointer
          "
          icon="remove"
          @click="()=>{
            session.remove(record?.id);
          }"
        />
    </template>
    <template #content>
            <Split class="flex-grow" :config="{
                direction: 'vertical',
            }">
                <SplitItem id="aa">
                    <div class="h-full flex-grow p-2  overflow-auto flex flex-col" >

                       结果显示页面
                    </div>
                </SplitItem>
                <SplitItem id="bb">
                    <Console></Console>
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
import MqttPayload from "./MqttPayload";
import Publish from "./Publish.vue";

import { nextTick, onMounted } from "vue";
import Split from "../../components/Split.vue";
import SplitItem from "../../components/SplitItem.vue";
import { useRoute } from "vue-router";
import {range} from "lodash";
import InfoBtn from "../../components/InfoBtn.vue";
import Console from "./Console.vue";

const route=useRoute();

const session = sessionStore();

const record=session.query(route.params.id);

console.log(record);

const remove = () => {
  console.log("删除");
};

</script>