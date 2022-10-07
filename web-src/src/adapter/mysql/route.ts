const MysqlRoute=[
    {
        path:"mysql/setting",
        component: () => import(`./Setting.vue`),
    },
    {
        path:"mysql/detail",
        component: () => import(`./Index.vue`),
    },
    {
        path:"mysql/table",
        component: () => import(`./page/database/DataBaseIndex.vue`),
    },
    {
        path:"mysql/table/:name",
        component: () => import(`./table/Table.vue`),
    },
    {
        path:"mysql/table/:name/setting",
        component: () => import(`./table/Setting.vue`),
    },
    {
        path:"mysql/query/:name",
        component: () => import(`./Query.vue`),
    }
]

export default MysqlRoute;