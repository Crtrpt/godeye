<template>
    <Page :title="$route.params.name">
        <template #content>
            <div class="flex flex-col h-full flex-grow">
            <div class="p-2">查询</div>
            <div class="border-t flex-grow px-2">结果</div>
        </div>
        </template>
    </Page>
</template>

<script setup lang="ts">
import Page from '../../components/Page.vue';
import route from '../../route';

</script>