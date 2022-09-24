<template>
    <Page title="设置">
        <Tab :active="0" v-slot="scope" side="left">
            <TabItem name="基础信息" :active="scope" >
                基础信息的配置
            </TabItem>
            <TabItem name="版本" :active="scope" >
                版本信息
            </TabItem>
        </Tab>
    </Page>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Page from "../../components/Page.vue";
import Tab from "../../components/Tab.vue";
import TabItem from "../../components/TabItem.vue";
</script>