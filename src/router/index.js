// import VueRouter from 'vue-router'
import {createRouter, createWebHashHistory} from 'vue-router'

import MainBoard from "@/views/MainBoard"
import WebsiteAbout from "@/views/WebsiteAbout";
import NotFound from "@/views/NotFound";
import UserLogin from "@/views/UserLogin";
import UserHome from "@/views/UserHome";
import SignUp from "@/views/SignUp";


const routes = [
    {path: '/', name: "MainBoard", component: MainBoard},
    {path: '/about', name: "WebsiteAbout", component: WebsiteAbout},
    {path: '/404', name: "NotFound", component: NotFound},
    {path: '/login', name: "UserLogin", component: UserLogin},
    {path: '/home', name: "UserHome", component: UserHome},
    {path: '/signup', name: "SignUp", component: SignUp},
]

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(process.env.BASE_URL),
//     routes: routes,
// })

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: routes,
})

export default router
