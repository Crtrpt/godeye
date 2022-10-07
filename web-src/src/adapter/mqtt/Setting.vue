<template>
  <Page title="创建" :desc="'创建' + form?.payload.type + '连接'">
    <template #foot>
      <div
        class="
          foot
          p-2
          h-10
          border-t
          dark:border-gray-700
          flex flex-row-reverse
          items-center
        "
      >
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
            <span class="text-gray-700">broker 地址:</span>

            <div class="flex">
              <select
                v-model="form.payload.protocol"
                class="
                  block
                  text-sm
                  form-input
                  px-2
                  pr-5
                  mr-2
                  py-1
                  rounded
                  border-gray-300
                "
              >
                <option value="mqtt">mqtt</option>
                <option value="mqtts">mqtts</option>
                <option value="ws">ws</option>
                <option value="wss">wss</option>
              </select>
              <input
                v-model="form.payload.host"
                placeholder="主机地址"
                class="
                  mr-2
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

          <div class="block py-1">
            <span class="text-gray-700">client id:</span>
            <div class="flex">
              <input
                v-model="form.payload.client_id"
                placeholder="client id"
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
            <span class="text-gray-700">账户:</span>
            <div class="flex">
              <input
                v-model="form.payload.username"
                placeholder="用户名"
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
            <span class="text-gray-700">密码:</span>
            <div class="flex">
              <input
                v-model="form.payload.password"
                placeholder="密码"
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
      <TabItem name="订阅主题" :active="scope">
        <div class="flex">
          <PrimaryBtn
            class="mx-0"
            title="增加订阅"
            @click="
              () => {
                form?.payload?.topics.push(new MqttTopic());
              }
            "
          ></PrimaryBtn>
        </div>
        <div class="">
          <div
            class="flex py-1"
            v-for="(topic, i) in form.payload.topics"
            :key="topic"
          >
            <input
              v-model="topic.remark"
              placeholder="备注信息"
              class="block text-sm form-input px-2 py-1 rounded border-gray-300"
              type="text"
            />
            <input
              v-model="topic.topic"
              placeholder="订阅主题"
              class="
                mx-1
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
            
              <MqttQos v-model="topic.qos" :name="'topic_qos' + i"></MqttQos>
           
                <label class="flex items-center">
                    自动订阅

                    <input
              v-model="topic.auto_subject"
              placeholder=""
              class="
                mx-1
                block
                text-sm
                form-input
                px-2
                py-1
                rounded
                border-gray-300
              "
              type="checkbox"
            />
                </label>
               
            
            <DangerBtn title="删除" @click="removeSubject(i)"></DangerBtn>
          </div>
        </div>
      </TabItem>
      <TabItem name="遗言" :active="scope">
        <form class="">
          <div class="block py-1">
            <span class="text-gray-700">遗言主题:</span>
            <input
              v-model="form.payload.last_will_topic"
              placeholder="遗言发布主题"
              class="block text-sm form-input px-2 py-1 rounded border-gray-300"
              type="text"
            />
          </div>
          <div class="block py-1">
            <span class="text-gray-700">遗言发布质量qos:</span>

            <MqttQos
              v-model="form.payload.last_will_qos"
              name="last_will_qos"
            ></MqttQos>
          </div>
          <div class="block py-1">
            <span class="text-gray-700">保留:</span>
            <div class="flex items-center">
              <input
                name="last_will_retain"
                :value="true"
                v-model="form.payload.last_will_retain"
                class="block text-sm px-2 py-1 border-gray-300"
                type="radio"
              />
              <div class="mx-2">是</div>
              <input
              :value="false"
                name="last_will_retain"
                v-model="form.payload.last_will_retain"
                class="block text-sm px-2 py-1 border-gray-300"
                type="radio"
              />
              <div class="mx-2">否</div>
            </div>
          </div>
          <div class="block py-1">
            <span class="text-gray-700">消息内容:</span>
            <div class="flex items-center">
              <input
                name="last_will_payload_type"
                v-model="form.payload.last_will_payload_type"
                value=0
                class="input block text-sm px-2 py-1 border-gray-300"
                type="radio"
              />
              <div class="mx-2">text</div>
              <input
                name="last_will_payload_type"
                v-model="form.payload.last_will_payload_type"
                value="1"
                class="block text-sm px-2 py-1 border-gray-300"
                type="radio"
              />
              <div class="mx-2">json</div>
              <input
                name="last_will_payload_type"
                v-model="form.payload.last_will_payload_type"
                value="2"
                class="block text-sm px-2 py-1 border-gray-300"
                type="radio"
              />
              <div class="mx-2">hex</div>
            </div>
            <PayloadInput v-model="form.payload.last_will_payload" :encode="form.payload.last_will_payload_type"></PayloadInput>
          </div>
        </form>
      </TabItem>
      <TabItem name="高级配置" :active="scope"> </TabItem>
      <TabItem name="加密" :active="scope"> </TabItem>

      <TabItem name="ssh隧道" :active="scope">
        <div class="block py-1">
          <span class="text-gray-700">主机地址:</span>
          <div class="flex">
            <input
              v-model="form.tunnel.host"
              placeholder="主机地址"
              class="block text-sm form-input px-2 py-1 rounded border-gray-300"
              type="text"
            />
            <input
              v-model="form.tunnel.port"
              placeholder="端口号"
              class="block text-sm form-input px-2 py-1 rounded border-gray-300"
              type="text"
            />
          </div>
        </div>
        <div class="block py-1">
          <span class="text-gray-700">授权方式:</span>

          <select
            v-model="form.tunnel.type"
            class="
              block
              text-sm
              form-select
              px-2
              py-1
              pr-7
              rounded
              border-gray-300
            "
          >
            <option value="0">直连</option>
            <option value="1">密码认证</option>
            <option value="2">私钥认证</option>
          </select>
          <span v-if="form.tunnel.type == 1" class="text-gray-700"
            >用户名:</span
          >
          <div v-if="form.tunnel.type == 1" class="flex">
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
          <span v-if="form.tunnel.type == 2" class="text-gray-700">私钥:</span>
          <div v-if="form.tunnel.type == 2" class="flex">
            <textarea
              v-model="form.tunnel.privatekey"
              placeholder="用户名"
              class="
                block
                text-sm
                form-textarea
                px-2
                py-1
                rounded
                border-gray-300
              "
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
import { MqttPayload, MqttTopic } from "./MqttPayload";
import MqttQos from "./MqttQos.vue";
import PayloadInput from "./PayloadInput.vue";

var form = ref<Session<MqttPayload>>();
form.value = new Session("");
form.value.payload = new MqttPayload();
form.value.tunnel = new SshTunnel();
if (form.value.payload.topics.length == 0) {
  form.value.payload.topics.push(new MqttTopic());
}
const session = sessionStore();

const removeSubject = (idx) => {
  console.log(idx);
};
const save = () => {
  form.value!.icon = "/assets/swap.png";
  session.create(form.value);
};
const remove = () => {
  console.log("删除");
};
</script>