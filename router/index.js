import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/home/tuijian',
        component: Home,
        children: [{
            path: 'home/tuijian',
            component: () =>
                import ('../components/Home/ContentArea/Lists')
        }, {
            path: 'home/hot',
            component: () =>
                import ('../components/Home/ContentArea/Lists/hot')
        }, {
            path: 'home/newest',
            component: () =>
                import ('../components/Home/ContentArea/Lists/newest')
        }, {
            path: 'home/worknote',
            component: () =>
                import ('../components/Home/ContentArea/Lists/worknote')
        }, {
            path: 'home/lifenote',
            component: () =>
                import ('../components/Home/ContentArea/Lists/lifenote')
        }, {
            path: 'home/myhtml',
            component: () =>
                import ('../components/Home/ContentArea/Lists/myhtml')
        }, {
            path: 'home/mycss',
            component: () =>
                import ('../components/Home/ContentArea/Lists/mycss')
        }, {
            path: 'home/myjs',
            component: () =>
                import ('../components/Home/ContentArea/Lists/myjs')
        }, {
            path: 'home/myexpress',
            component: () =>
                import ('../components/Home/ContentArea/Lists/myexpress')
        }, {
            path: 'home/mytools',
            component: () =>
                import ('../components/Home/ContentArea/Lists/mytools')
        }]
    },
    {
        path: '/tec',
        name: 'TecBlog',
        component: () =>
            import ('../views/TecBlog.vue')
    },
    {
        path: '/pro',
        name: 'ProShow',
        component: () =>
            import ('../views/ProShow.vue')
    },
    {
        path: '/exp',
        name: 'ExpTall',
        component: () =>
            import ('../views/ExpTall.vue')
    },
    {
        path: '/log',
        name: 'LogSign',
        component: () =>
            import ('../views/LogSign.vue'),
    },
    {
        path: '/alter',
        name: 'Alter',
        component: () =>
            import ('../components/LogSign/Alter.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router