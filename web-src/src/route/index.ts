import { RouteRecordRaw } from "vue-router";

import UdpServerRoute  from "../adapter/udpServer/route";
import UdpClientRoute  from "../adapter/udpClient/route";
import TcpServerRoute  from "../adapter/tcpServer/route";
import TcpClientRoute  from "../adapter/tcpClient/route";
import MysqlRoute from "../adapter/mysql/route";
import HttpRoute from "../adapter/http/route";
import MqttRoute from "../adapter/mqtt/route";
import RedisRoute from "../adapter/redis/route";

 const route: Readonly<RouteRecordRaw[]> =[
    {
        path: "/",
        name: "welcome",
        component: () => import(`../welcome.vue`),  
    },
    {
        path: "/app",
        component: () => import(`../layout/app.layout.vue`),
        children:[
            {
                path:"setting",
                component: () => import(`../page/app/setting.vue`),
            },
            {
                path:"",
                component: () => import(`../page/app/main.vue`),
            },
        ]   
    },

  
   
    {
        path: "/:id",
        component: () => import(`../layout/app.layout.vue`),
        children:[
            ...MysqlRoute,
            ...TcpServerRoute,
            ...TcpClientRoute,
            ...UdpServerRoute,
            ...UdpClientRoute,
            ...HttpRoute,
            ...MqttRoute,
            ...RedisRoute,
            {     
                path:"",
                component: () => import(`../page/session/main.vue`),
            },
        ]   
    },
   
 ]

 export default route;