import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from "../views/TodoList";
import VueAdd from "../components/VueAdd";
import VueDone from "../components/VueDone";
import VueDelete from "../components/VueDelete";
const routes = [
    {path: '/', name: 'Home', component: Home},
    {
        path: '/about', name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {path: '/todoList', name: 'TodoList', component: TodoList},
    {
        path: '/list', name: 'List',
        component: () => import(/* webpackChunkName: "about" */ '../views/List.vue'),
        children: [
            {path: '', redirect: 'add'},
            {path: '/add', name: 'VueAdd',component: VueAdd},
            {path: '/done', name: 'VueDone',component: VueDone},
            {path: '/delete', name: 'VueDelete',component: VueDelete},
        ]
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass: 'active'
});

export default router
