const TcpServerRoute=[
    {
        path:"tcp_server/setting",
        component: () => import(`./Setting.vue`),
    },
    {
        path:"tcp_server/detail",
        component: () => import(`./Detail.vue`),
    },
]

export default TcpServerRoute;