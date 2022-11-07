import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Our_Services from '../views/Our_Services.vue'
import App_Services from '../views/App_Services.vue'
import Hiring from '../views/Hiring.vue'
import News from '../views/News.vue'
import Contact_us from '../views/Contact_us.vue'
import Order_Form1 from '../views/services/form1.vue'
import Order_Form2 from '../views/services/form2.vue'
import ryady1 from '../views/services/ryady1.vue'
import ryady2 from '../views/services/ryady2.vue'
import ryady3 from '../views/services/ryady3.vue'
import ryady4 from '../views/services/ryady4.vue'
import App_Services_Inside from '../views/App_Services_Inside.vue'
import check from '../views/services/check.vue'
import celebrities from '../views/celebrities.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/App_Services',
        name: 'App_Services',
        component: App_Services
    },
    {
        path: '/Our_Services',
        name: 'Our_Services',
        component: Our_Services
    },
    {
        path: '/Hiring',
        name: 'Hiring',
        component: Hiring
    },
    {
        path: '/News',
        name: 'News',
        component: News
    },
    {
        path: '/Contact_us',
        name: 'Contact_us',
        component: Contact_us
    },
    {
        path: '/Order_Form1',
        name: 'Order_Form1',
        component: Order_Form1
    },
    {
        path: '/Order_Form2',
        name: 'Order_Form2',
        component: Order_Form2
    },
    {
        path: '/ryady1',
        name: 'ryady1',
        component: ryady1
    },
    {
        path: '/ryady2',
        name: 'ryady2',
        component: ryady2
    },
    {
        path: '/ryady3',
        name: 'ryady3',
        component: ryady3
    },
    {
        path: '/ryady4',
        name: 'ryady4',
        component: ryady4
    },
    {
        path: '/App_Services_Inside',
        name: 'App_Services_Inside',
        component: App_Services_Inside
    },
    {
        path: '/check',
        name: 'check',
        component: check
    },
    {
        path: '/celebrities',
        name: 'celebrities',
        component: celebrities
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router