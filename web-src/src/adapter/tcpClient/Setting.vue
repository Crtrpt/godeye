<template>
    <Page title="创建" :desc="'创建'+form?.payload.type+'连接'">
      <template #foot>
        <div class="foot p-2 h-10 border-t dark:border-gray-700 flex flex-row-reverse items-center">
          <PrimaryBtn title="测试"></PrimaryBtn>
          <SecondaryBtn title="保存" @click="save"></SecondaryBtn>
          <DangerBtn title="删除" @click="remove"></DangerBtn>
        </div>
      </template>
  
      <Tab :active="0" v-slot="scope">
        <TabItem name="基础信息" :active="scope">
          <form class="">
            <div class="block py-1">
              <span class="text-gray-700">名称:</span>
              <input
                v-model="form.name"
                placeholder="名称"
                class="block text-sm form-input px-2 py-1 rounded border-gray-300"
                type="text"
              />
            </div>
  
            <div class="block py-1">
              <span class="text-gray-700">主机地址:</span>
              <div class="flex">
                <input
                  v-model="form.payload.host"
                  placeholder="主机地址"
                  class="
                    block
                    text-sm
                    form-input
                    px-2
                    py-1
                    rounded
                    border-gray-300
                  "
                  type="text"
                />
              </div>
            </div>
            <div class="block py-1">
              <span class="text-gray-700">端口:</span>
              <div class="flex">
                <input
                  v-model="form.payload.port"
                  placeholder="端口"
                  class="
                    block
                    text-sm
                    form-input
                    px-2
                    py-1
                    rounded
                    border-gray-300
                  "
                  type="text"
                />
              </div>
            </div>
            </form>
            </TabItem>
        <TabItem name="隧道" :active="scope">
  
          <div class="block py-1">
              <span class="text-gray-700">主机地址:</span>
              <div class="flex">
                <input
                  v-model="form.tunnel.host"
                  placeholder="主机地址"
                  class="
                    block
                    text-sm
                    form-input
                    px-2
                    py-1
                    rounded
                    border-gray-300
                  "
                  type="text"
                />
                <input
                  v-model="form.tunnel.port"
                  placeholder="端口号"
                  class="
                    block
                    text-sm
                    form-input
                    px-2
                    py-1
                    rounded
                    border-gray-300
                  "
                  type="text"
                />
              </div>
            </div>
          <div class="block py-1">
            <span class="text-gray-700">授权方式:</span>
            
            <select  v-model="form.tunnel.type" class="block text-sm form-select px-2 py-1 pr-7 rounded border-gray-300">
              <option value="0">直连</option>
              <option value="1">密码认证</option>
              <option value="2">私钥认证</option>
            </select>
            <span v-if="form.tunnel.type==1" class="text-gray-700">用户名:</span>
            <div v-if="form.tunnel.type==1" class="flex">
              <input
                v-model="form.tunnel.username"
                placeholder="用户名"
                class="block text-sm form-input px-2 py-1 rounded border-gray-300"
                type="text"
              />
              <input
                v-model="form.tunnel.username"
                placeholder="密码"
                class="block text-sm form-input px-2 py-1 rounded border-gray-300"
                type="password"
              />
            </div>
            <span v-if="form.tunnel.type==2" class="text-gray-700">私钥:</span>
            <div  v-if="form.tunnel.type==2" class="flex">
              <textarea
                v-model="form.tunnel.privatekey"
                placeholder="用户名"
                class="block text-sm form-textarea px-2 py-1 rounded border-gray-300"
                type="text"
              >
              </textarea>
             
            </div>
          </div>
        </TabItem>
      </Tab>
    </Page>
  </template>
  
  <script setup lang="ts">
  import { ref } from "@vue/reactivity";
  import Page from "../../components/Page.vue";
  import { Session } from "../../type";
  import PrimaryBtn from "../../components/PrimaryBtn.vue";
  import SecondaryBtn from "../../components/SecondaryBtn.vue";
  import DangerBtn from "../../components/DangerBtn.vue";

  import Table from "./Table.vue";
  import Tab from "../../components/Tab.vue";
  import TabItem from "../../components/TabItem.vue";
  import SshTunnel from "../../type/tunnel/SshTunnel";
  import { sessionStore } from "../../store/sessionStore";
  import TcpClientPayload from "./TcpClientPayload";

  var form = ref<Session<TcpClientPayload>>();
  form.value = new Session("");
  form.value.payload = new TcpClientPayload();
  form.value.tunnel=new SshTunnel();
  
  const session=sessionStore();
  
  const save=()=>{
    form.value!.icon="/assets/swap.png";
    session.create(form.value);
  }
  const remove=()=>{
    console.log("删除")
  }
  </script>