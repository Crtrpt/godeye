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
                path:"create",
                component: () => import(`../page/app/create.vue`),
            },
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