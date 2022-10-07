const TcpServerRoute=[
    {
        path:"redis/setting",
        component: () => import(`./Setting.vue`),
    },
    {
        path:"redis/detail",
        component: () => import(`./Detail.vue`),
    },
]

export default TcpServerRoute;