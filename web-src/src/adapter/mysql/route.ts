const MysqlRoute=[
    {
        path:"mysql/setting",
        component: () => import(`./Setting.vue`),
    },
    {
        path:"mysql/table",
        component: () => import(`./Index.vue`),
    },
    {
        path:"mysql/table/:name",
        component: () => import(`./Table.vue`),
    }
]

export default MysqlRoute;