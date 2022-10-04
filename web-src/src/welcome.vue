<template>
    <div class="flex flex-col  justify-center items-center h-full w-full">
        <div class=" text-3xl text-gray-500 px-4">Essential tools for software developers and teams</div>
            <div class="flex">
                <router-link class="my-10" :to="{path:'app'}">
                <div class="border bg-blue-500 text-white px-4 py-1 mx-1 rounded-full">使用</div>
            </router-link>
            <router-link class="my-10" :to="{path:'doc'}">
                <div class="border  bg-white text-gray-500 px-4 py-1 mx-1 rounded-full">文档</div>
            </router-link>
        </div>
    </div>
</template>