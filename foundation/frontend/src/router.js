import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import ProductManager from "./components/ui/ProductGrid"
import Manager from "./components/ui/Grid"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '/foundation/products',
            name: 'ProductManager',
            component: ProductManager,
        },
        { 
            path: '/foundation/',
            name: 'Manager',
            component: Manager,
        },
    ]
})
