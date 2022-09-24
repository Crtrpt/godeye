import { RouteRecordRaw } from "vue-router";

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
            {
                path:"create/mysql",
                component: () => import(`../adapter/mysql/Create.vue`),
            },
            {
                path:"create/redis",
                component: () => import(`../adapter/redis/Create.vue`),
            },
        ]   
    },

  
   
    {
        path: "/:id",
        component: () => import(`../layout/app.layout.vue`),
        children:[
            {
                path:"mysql/table",
                component: () => import(`../adapter/mysql/Index.vue`),
            },
            {
                path:"mysql/table/:name",
                component: () => import(`../adapter/mysql/Table.vue`),
            },
            {
                
                path:"",
                component: () => import(`../page/session/main.vue`),
            },
        ]   
    },
   
 ]

 export default route;