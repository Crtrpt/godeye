<template>
    <div class="h-10 border p-2 my-2 rounded-md flex justify-between items-center text-sm text-gray-500">
            <div class="flex items-center">
                <div>每页</div>
            <div><input class="border px-1 mx-1 w-10" value="100"/></div>
            <div>条记录</div>
            </div> 
            <div  class="flex items-center">
                <SecondaryBtn title="上一页"></SecondaryBtn>
            <div>当前第</div>
            <div><input class="border px-1 mx-1 w-10" value="0"/></div>
            <div>页面</div>
            <SecondaryBtn title="下一页"></SecondaryBtn>
            </div>
        </div>
</template>

<script lang="ts" setup>
import SecondaryBtn from "./SecondaryBtn.vue";
import TablePager from "./TableFooter.vue";
</script>
