import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home/Home.vue";
import Order from "../views/Order/Order.vue";
import Checkout from "../views/Checkout/Checkout.vue"

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                guest: true,
            },
        },
        {
            path: "/order/:id",
            name: "Order",
            component: Order,
            meta: {
                guest: true,
            },
        },
        {
            path: "/checkout/:id",
            name: "Checkout",
            component: Checkout,
            meta: {
                guest: true,
            },
        },
    ]

})

export default router;