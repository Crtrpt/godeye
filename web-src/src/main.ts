import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { createRouter, createWebHashHistory } from "vue-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";


library.add(fas);
library.add(far);
library.add(fab);



import route from "./route/index";

const router = createRouter({
    history: createWebHashHistory(),
    routes: route,
});

var app=createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());

app.mount('#app')
