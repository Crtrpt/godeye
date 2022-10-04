const TcpServerRoute=[
    {
        path:"mqtt/setting",
        component: () => import(`./Setting.vue`),
    },
    {
        path:"mqtt/detail",
        component: () => import(`./Detail.vue`),
    },
]

export default TcpServerRoute;