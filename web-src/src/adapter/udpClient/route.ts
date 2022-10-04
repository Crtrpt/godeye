const UdpClientRoute=[
    {
        path:"udp_client/setting",
        component: () => import(`./Setting.vue`),
    },
    {
        path:"udp_client/detail",
        component: () => import(`./Detail.vue`),
    },
]

export default UdpClientRoute;