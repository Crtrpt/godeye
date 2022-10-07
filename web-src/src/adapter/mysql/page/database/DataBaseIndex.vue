<template>
        <Page title="数据库管理">
            数据库的信息
        </Page>
</template>

<script setup lang="ts">
import Page from '../../../../components/Page.vue';
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { sessionStore } from "../../../../store/sessionStore";

const route = useRoute();

const session = sessionStore();

const record = session.query(route.params.id);
</script>