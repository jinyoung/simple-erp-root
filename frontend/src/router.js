
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import ProductManager from "./components/listers/ProductCards"
import ProductDetail from "./components/listers/ProductDetail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"

import OrderManager from "./components/listers/OrderCards"
import OrderDetail from "./components/listers/OrderDetail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '//products',
                name: 'ProductManager',
                component: ProductManager
            },
            {
                path: '//products/:id',
                name: 'ProductDetail',
                component: ProductDetail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },

            {
                path: '//orders',
                name: 'OrderManager',
                component: OrderManager
            },
            {
                path: '//orders/:id',
                name: 'OrderDetail',
                component: OrderDetail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },



    ]
})
