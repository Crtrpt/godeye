const TcpServerRoute=[
    {
        path:"tcp_client/setting",
        component: () => import(`./Setting.vue`),
    },
    {
        path:"tcp_client/detail",
        component: () => import(`./Detail.vue`),
    },
]

export default TcpServerRoute;