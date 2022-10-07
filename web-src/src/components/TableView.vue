<template>
  <div class="h-full flex-grow px-2 overflow-auto flex flex-col border-t">
    <TableHeader class="flex-shrink-0"></TableHeader>
    <div class="flex-grow overflow-scroll">
      <table class="rounded border border-separate">
         <thead class="bg-gray-50 text-gray-500">
          <tr class="h-12 border">
            <th class="w-12 text-center px-4">
              <div class="flex items-center">
                <input type="checkbox" />
                <font-awesome-icon
                  class="
                    h-4
                    text-gray-500
                    hover:text-gray-600
                    pl-2
                    cursor-pointer
                  "
                  icon="edit"
                />
                <font-awesome-icon
                  class="
                    h-4
                    text-gray-500
                    hover:text-gray-600
                    pl-2
                    cursor-pointer
                  "
                  icon="check"
                />
              </div>
            </th>
            <template v-for="i in fileds" :key="i">
              <th
                :style="i.style"
                class="px-1 hover:border-blue-500 border-x"
                @mouseenter="
                  () => {
                    cur_filed = i;
                  }
                "
                @mouseleave="
                  () => {
                    cur_filed = null;
                  }
                "
              >
                <div class="flex items-center">
                  <div class="flex-grow flex-shrink-0 text-left">
                    {{ i.name }}
                  </div>
                  <div>
                    <font-awesome-icon
                      class="
                        w-2
                        mx-1
                        text-gray-500
                        hover:text-gray-600
                        p-2
                        cursor-pointer
                      "
                      icon="sort"
                    />
                  </div>
                </div>
              </th>
            </template>
          </tr>
        </thead>
        <tbody class="text-xs">
          <template v-for="d in data" :key="d">
            <tr
              @dblclick="d._edit = true"
              class="odd:bg-gray-100 border"
              :class="{
                ' border-blue-500': d._edit,
              }"
            >
              <td class="text-center px-4">
                <div class="flex items-center">
                  <input type="checkbox" />
                  <font-awesome-icon
                    @click="
                      (e) => {
                        d._edit = true;
                      }
                    "
                    class="
                      h-4
                      text-gray-500
                      hover:text-gray-600
                      pl-2
                      cursor-pointer
                    "
                    icon="edit"
                  />
                  <font-awesome-icon
                    @click="
                      (e) => {
                        d._edit = false;
                      }
                    "
                    class="
                      h-4
                      text-gray-500
                      hover:text-gray-600
                      pl-2
                      cursor-pointer
                    "
                    icon="check"
                  />
                </div>
              </td>
              <template v-for="i in fileds" :key="i">
                <td
                  class="border-x"
                  :style="i.style"
                  :class="{
                    'border-blue-500': i == cur_filed,
                  }"
                >
                  <div v-if="!d._edit" class="p-2 focus:border-blue-500">
                    {{ d[i.name] }}
                  </div>
                  <input
                    v-if="d._edit"
                    class="
                      p-2
                      focus:bg-blue-200
                      w-full
                      h-full
                      input-text
                      outline-none
                    "
                    v-model="d[i.name]"
                  />
                </td>
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <TableFooter class="flex-shrink-0"></TableFooter>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { range } from "lodash";
import TableHeader from "./TableHeader.vue";
import TableFooter from "./TableFooter.vue";
import TableQuery from "./TableQuery.vue";
const cur_filed = ref(null);
const fileds = ref([
  {
    name: "name",
    _hover: false,
    style: {
      width: "300px",
    },
    recode: {
      style: {},
    },
  },
  {
    name: "age",
    _hover: false,
    style: {
      width: "300px",
    },
    recode: {
      style: {},
    },
  },
  {
    name: "score",
    _hover: false,
    style: {
      width: "300px",
    },
    recode: {
      style: {},
    },
  },
]);
const data = ref([
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
  {
    _edit: false,
    name: 20,
    age: 30,
    score: 40,
  },
]);
</script>