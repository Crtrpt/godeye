<template>
  <Page title="" desc="">
    <template #leading>
      <div>表:{{route.params.name}}</div>
      <InfoBtn title="表结构" @click="(e)=>{
            $router.push({
              path: '/' + $route.params.id + '/mysql/table/' + $route.params.name+'/setting',
            });
      }"/>
    </template>
    <template #action>
      <font-awesome-icon
        class="mx-1 text-gray-500 hover:text-gray-600 p-2 cursor-pointer"
        icon="remove"
        @click="
          () => {
            session.remove(record?.id);
          }
        "
      />
    </template>

    <template #content>
       
      <Split
        class="flex-grow"
        :config="{
          direction: 'vertical',
            sizes:[20,80]
        }"
      >
        <SplitItem id="mysql_console">
            <Console :sql="sql"></Console>
        </SplitItem>
        <SplitItem id="mysql_result">
            <TableView></TableView>
        </SplitItem>
      </Split>
    </template>
  </Page>
</template>
      
  <script setup lang="ts">
import { ref } from "@vue/reactivity";
import Page from "../../../components/Page.vue";
import { Session } from "../../../type";
import PrimaryBtn from "../../../components/PrimaryBtn.vue";
import SecondaryBtn from "../../../components/SecondaryBtn.vue";
import DangerBtn from "../../../components/DangerBtn.vue";
import InfoBtn from "../../../components/InfoBtn.vue";

import Tab from "../../../components/Tab.vue";
import TabItem from "../../../components/TabItem.vue";
import { sessionStore } from "../../../store/sessionStore";
import MysqlPayload from "../MysqlPayload";
import Console from "./Console.vue";

import { nextTick, onMounted, watch } from "vue";
import Split from "../../../components/Split.vue";
import SplitItem from "../../../components/SplitItem.vue";
import { useRoute } from "vue-router";
import { range, size } from "lodash";
import TableView from "../../../components/TableView.vue";

const route = useRoute();
const sql=ref();
sql.value="select * from "+route.params.name;

watch(route,(n)=>{
    //更新sql
    sql.value="select * from "+n.params.name;
});
const session = sessionStore();

const record = session.query(route.params.id);

const remove = () => {
  console.log("删除");
};
</script>