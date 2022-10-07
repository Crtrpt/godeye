<template>
    <Page :title="$route.params.name+'表结构'">
           <Tab :active="0" v-slot="scope">
            <TabItem name="字段" :active="scope">

            </TabItem>
            <TabItem name="表" :active="scope">

            </TabItem>
           </Tab>
    </Page>
</template>

<script setup lang="ts">
import Page from '../../../components/Page.vue';
import route from '../../../route';
import MysqlConsole from '../MysqlConsole.vue';
import Tab from '../../../components/Tab.vue';
import TabItem from '../../../components/TabItem.vue';
</script>