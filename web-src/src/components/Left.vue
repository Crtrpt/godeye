<template>
  <div class="flex flex-col border-b text-xl text-gray-500 dark:bg-gray-900 ">
    <div class="h-12 border-b 
     dark:border-gray-700
    p-2 flex items-center justify-center bg-gray-50 dark:bg-gray-900 ">
      <router-link class="flex-grow  hover:text-gray-600" :to="{ path: '/app' }">
        Godeye
      </router-link>
      <div class="text-sm">
        <font-awesome-icon
          @click="
            () => {
              $router.push({ path: '/app/create' });
            }
          "
          class="mx-1 border dark:border-gray-900 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          icon="add"
        />
        <font-awesome-icon
          class="
            mx-1
            border dark:border-gray-900 border-gray-200
            hover:bg-gray-100
            p-2
            rounded-full
            cursor-pointer
          "
          @click="
            () => {
              $router.push({ path: '/app/setting' });
            }
          "
          icon="gear"
        />
      </div>
    </div>
    <div class="main flex-grow overflow-auto dark:bg-gray-900">
      <template v-for="s in list" :key="s">
        <div class="session  ">
          <div
            class="
              py-2 px-1
              flex
              text-gray-500
                dark:text-gray-400
              hover:bg-gray-200
              dark:hover:bg-gray-700
              cursor-pointer
              items-center
            "
            :class="{
              'bg-gray-200 dark:bg-gray-700': $route.params.id==s.id,
            }"
            @click="
              () => {
                s.expand=!s.expand
                $router.push({ path: '/' + s.id });
              }
            "
          >
            <div class="flex flex-grow">
              <img src="../adapter/mysql/assets/mysql.png" class="w-4 h-4 mx-2" />
              <div class="text-sm">{{ s.name }}</div>
            </div>
          </div>
          <MysqlNav v-if="s.expand"></MysqlNav>
        </div>
      </template>
    </div>
    <div class="h-12 border-t  dark:border-gray-700 p-2">
        <Switch v-model="enabled" :class="enabled ? 'bg-green-500' : 'bg-gray-300'"
            class="relative inline-flex  h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span aria-hidden="true" :class="enabled ? 'translate-x-4' : 'translate-x-0'"
                class="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
        </Switch>
    </div>
  </div>
</template>   

<script setup lang="ts">
import { Session } from "../type";
import MysqlNav from "../adapter/mysql/MysqlNav.vue";
import { icon } from "@fortawesome/fontawesome-svg-core";

import { ref, watch, watchEffect } from 'vue'
import { Switch } from '@headlessui/vue'

var list = ref([
  new Session("1", "本地数据库"),
  new Session("2", "测试数据库"),
  new Session("3", "演示数据库"),
  new Session("4", "生产数据库"),
]);

const enabled = ref(false)

watch(enabled,()=>{
    console.log("更新")
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
})
</script>