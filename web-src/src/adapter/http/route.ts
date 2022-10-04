const TcpServerRoute=[
    {
        path:"http/setting",
        component: () => import(`./Setting.vue`),
    },
    {
        path:"http/detail",
        component: () => import(`./Detail.vue`),
    },
]

export default TcpServerRoute;