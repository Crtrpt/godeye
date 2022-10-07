<template>
    <div class="h-10 border p-2 my-2 rounded-md flex justify-between items-center text-sm text-gray-500">
            <div class="flex items-center">
                <PrimaryBtn title="增加"></PrimaryBtn>
                <SecondaryBtn title="删除"></SecondaryBtn>
            </div>
            <div  class="flex items-center">
                <SecondaryBtn title="导出"></SecondaryBtn>
                <SecondaryBtn title="导入"></SecondaryBtn>
            </div>
        </div>
</template>

<script lang="ts" setup>
import SecondaryBtn from "./SecondaryBtn.vue";
import TablePager from "./TableFooter.vue";
import PrimaryBtn from "./PrimaryBtn.vue";
</script>
