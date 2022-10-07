<template>
  <div class="flex flex-col border-b text-xl text-gray-500 dark:bg-gray-900 ">
    <div class="h-12 border-b 
    
     dark:border-gray-700
    p-2 flex items-center justify-center bg-gray-100 dark:bg-gray-900 ">
      <router-link class="flex-grow  hover:text-gray-600" :to="{ path: '/app' }">
        Godeye
      </router-link>
      <div class="text-sm">
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                创建会话
              </DialogTitle>
              <div class="mt-2 flex flex-col text-gray-600 text-xs">
                <div class="grid gap-2 grid-cols-4">
                  <router-link
                @click="(e)=>{isOpen=false}" 
                :to="{path:'/new/tcp_server/setting'}"
                class="flex flex-col items-center justify-center w-20 h-20 rounded m-2 border-2 hover:border-blue-500">
                  <img src="/assets/swap.png" class="w-8 h-8 mx-2" />
                  <div >TCP Server</div>
                </router-link>

                <router-link
                @click="(e)=>{isOpen=false}" 
                :to="{path:'/new/tcp_client/setting'}"
                class="flex flex-col items-center justify-center w-20 h-20 rounded m-2 border-2 hover:border-blue-500">
                  <img src="/assets/swap.png" class="w-8 h-8 mx-2" />
                  <div>TCP Client</div>
                </router-link>

                <router-link
                @click="(e)=>{isOpen=false}" 
                :to="{path:'/new/udp_server/setting'}"
                class="flex flex-col items-center justify-center w-20 h-20 rounded m-2 border-2 hover:border-blue-500">
                  <img src="/assets/swap.png" class="w-8 h-8 mx-2" />
                  <div>UDP Server</div>
                </router-link>

                <router-link
                @click="(e)=>{isOpen=false}" 
                :to="{path:'/new/udp_client/setting'}"
                class="flex flex-col items-center justify-center w-20 h-20 rounded m-2 border-2 hover:border-blue-500">
                  <img src="/assets/swap.png" class="w-8 h-8 mx-2" />
                  <div>UDP Client</div>
                </router-link>

                <router-link
                @click="(e)=>{isOpen=false}" 
                :to="{path:'/new/http/setting'}"
                class="flex flex-col items-center justify-center w-20 h-20 rounded m-2 border-2 hover:border-blue-500">
                  <img src="/assets/http.png" class="w-8 h-8 mx-2" />
                  <div>http</div>
                </router-link>

              <router-link
                @click="(e)=>{isOpen=false}" 
                :to="{path:'/new/mqtt/setting'}"
                class="flex flex-col items-center justify-center w-20 h-20 rounded m-2 border-2 hover:border-blue-500">
                  <img src="/assets/swap.png" class="w-8 h-8 mx-2" />
                  <div>mqtt</div>
                </router-link>

                </div>
                <div class="grid gap-2  grid-cols-4">
                <router-link 
                @click="(e)=>{isOpen=false}"
                :to="{path:'/app/mysql/setting'}"
                class=" flex flex-col items-center justify-center  w-20  h-20 m-2 rounded border-2 hover:border-blue-500">
                  <img src="/assets/mysql.png" class="w-8 h-8 mx-2" />
                  <div>mysql</div>
                </router-link>
                <router-link
                @click="(e)=>{isOpen=false}" 
                :to="{path:'/app/redis/setting'}"
                class="flex flex-col items-center justify-center w-20 h-20 rounded m-2 border-2 hover:border-blue-500">
                  <img src="/assets/redis.png" class="w-8 h-8 mx-2" />
                  <div>redis</div>
                </router-link>
              </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>


        <font-awesome-icon
        @click="openModal"
          class="mx-1 border dark:border-gray-900 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          icon="add"
        />
        
      </div>
    </div>
    <div class="main flex-grow overflow-auto dark:bg-gray-900">
      <template v-for="s in session.list" :key="s">
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
            @dblclick="()=>{ s.expand=!s.expand}"
          >
            <div class="flex flex-grow items-center">
              <img 
               @click="
                () => {
                  s.expand=!s.expand
                 
                }
              "
              :src="s.icon" class="w-4 h-4 mx-2" />

              <div class="text-sm flex-grow"
              @click="()=>{
                $router.push({ path: '/' + s.id+'/'+s.payload.type+'/detail' });
              }"
              >{{ s.name }}</div>
                <!-- <font-awesome-icon
                @click="()=>goSetting(s)"
                class="h-3 px-1  text-gray-400  hover:text-gray-600
                  rounded-full  cursor-pointer"
                icon="ellipsis-vertical"
                ></font-awesome-icon> -->
            </div>
          </div>
          <component :is="MqttNav" :session="s" v-if="s.expand && s.payload.type=='mqtt'"></component>
          <component :is="MysqlNav"  :session="s" v-if="s.expand && s.payload.type=='mysql'"></component>
          <component :is="RedisNav" :session="s"  v-if="s.expand && s.payload.type=='redis'"></component>
         
        </div>
      </template>
    </div>
    <div class="h-10 border-t bg-gray-50 dark:bg-gray-900 dark:border-gray-700 p-2 flex justify-between items-center">
      
        <font-awesome-icon
          class="
            mx-1
            text-gray-300
            hover:text-gray-500
            p-2
            cursor-pointer
          "
          @click="
            () => {
              $router.push({ path: '/app/setting' });
            }
          "
          icon="gear"
        />

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
import MqttNav from "../adapter/mqtt/MqttNav.vue";
import RedisNav from "../adapter/redis/RedisNav.vue";

// import RedisNav from "../adapter/redis/Nav.vue";

import { icon } from "@fortawesome/fontawesome-svg-core";

import { ref, watch, watchEffect } from 'vue'
import { Switch } from '@headlessui/vue'

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { useRouter } from "vue-router";
import route from "../route";
import { sessionStore } from "../store/sessionStore";

const session=sessionStore();


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




const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
const router=useRouter()
function goSetting(s:Session<any>){
  router.push({path:"/"+s.id+"/mysql/edit"})
}
function openModal() {
  isOpen.value = true
}
</script>