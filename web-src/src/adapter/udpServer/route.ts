const UdpServerRoute=[
    {
        path:"udp_server/setting",
        component: () => import(`./Setting.vue`),
    },
    {
        path:"udp_server/detail",
        component: () => import(`./Detail.vue`),
    },
]

export default UdpServerRoute;