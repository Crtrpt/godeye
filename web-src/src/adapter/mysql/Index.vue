<template>
    <Page title="数据库信息">
        <Tab :active="0" v-slot="scope">
            <TabItem  name="基础信息" :active="scope">
                数据库版本 v8.0
            </TabItem>
            <TabItem  name="用户管理" :active="scope">
                <UserIndex></UserIndex>
            </TabItem>
        </Tab>
    </Page>
</template>

<script setup lang="ts">
import Page from '../../components/Page.vue';
import Tab from '../../components/Tab.vue';
import TabItem from '../../components/TabItem.vue';
import UserIndex from './page/user/UserIndex.vue';

</script>