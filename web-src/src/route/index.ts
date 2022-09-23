import { RouteRecordRaw } from "vue-router";

 const route: Readonly<RouteRecordRaw[]> =[
    {
        path: "/",
        name: "welcome",
        component: () => import(`../App.vue`),
      },
 ]


 export default route;