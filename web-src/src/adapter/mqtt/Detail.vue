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

                        <template v-for="i in range(10)" :key="i">
                            <div class=" p-1  flex flex-col">
                             <div class="flex flex-row text-xs text-gray-600 mb-2">
                                <div >time:11:20:20</div>
                                <div class="ml-1">topic:/test/test1</div>
                             </div>
                              <div class="p-1  rounded-sm border bg-gray-100  h-20">content:</div>
                            </div>
                        </template>
                    </div>
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
import MqttPayload from "./MqttPayload";
import Publish from "./Publish.vue";

import { nextTick, onMounted } from "vue";
import Split from "../../components/Split.vue";
import SplitItem from "../../components/SplitItem.vue";
import { useRoute } from "vue-router";
import {range} from "lodash";
import InfoBtn from "../../components/InfoBtn.vue";

const route=useRoute();

const session = sessionStore();

const record=session.query(route.params.id);

console.log(record);

const remove = () => {
  console.log("删除");
};

</script>