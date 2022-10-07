<template>
  <div class="text-xs border-l dark:border-gray-700">
    <div
      class="
        flex
        items-center
        cursor-pointer
        hover:bg-gray-200
        dark:hover:bg-gray-800
      "
      @click="
        () => {
          $router.push({
            path: '/' + $route.params.id + '/mysql/table/',
          });
        }
      "
    >
      <div class="flex-grow flex">
        <div class="w-5"></div>
        <div class="border-l dark:border-gray-700 pl-3 py-1 flex-grow">
          数据库:
          <select v-model="session.payload.database" 
          class=" border-none bg-none
           form-input outline-none border pr-10  pl-1 text-xs rounded border-gray-500 p-0 px-2">
            <option>test1</option>
            <option>test2</option>
            <option>test3</option>
          </select>
        </div>
      </div>
    </div>
    <div class="tables" v-if="session?.payload?.database ?? false">
      <div
        @click="
          () => {
            $router.push({
              path: '/' + $route.params.id + '/mysql/table/' + t.name,
            });
          }
        "
        class="hover:bg-gray-200 dark:hover:bg-gray-700 flex"
        v-for="t in database"
        :key="t.name"
      >
        <div class="w-5"></div>
        <div class="w-5 border-l dark:border-gray-700"></div>
        <div
          class="
            pl-2
            border-l
            dark:border-gray-700
            py-1
            cursor-pointer
            flex-grow
          "
        >
          {{ t.name }}
        </div>
      </div>
    </div>
    <div
      class="
        flex
        items-center
        cursor-pointer
        hover:bg-gray-200
        dark:hover:bg-gray-800
      "
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { sessionStore } from "../../store/sessionStore";

const route = useRoute();

const props = defineProps({
  session: Object,
});
//拉取数据库列表
var database = ref([
  {
    name: "user",
  },
  {
    name: "order",
  },
  {
    name: "product",
  },
  {
    name: "user",
  },
  {
    name: "order",
  },
  {
    name: "product",
  },
  {
    name: "user",
  },
  {
    name: "order",
  },
  {
    name: "product",
  },
  {
    name: "user",
  },
  {
    name: "order",
  },
  {
    name: "product",
  },
  {
    name: "user",
  },
  {
    name: "order",
  },
  {
    name: "product",
  },
  {
    name: "user",
  },
  {
    name: "order",
  },
  {
    name: "product",
  },
  {
    name: "user",
  },
  {
    name: "order",
  },
  {
    name: "product",
  },
  {
    name: "user",
  },
  {
    name: "order",
  },
  {
    name: "product",
  },
  {
    name: "user",
  },
  {
    name: "order",
  },
  {
    name: "product",
  },
]);
</script>