var Vue = require('vue');
var VueResource = require('vue-resource');
var VueRouter = require('vue-router')

Vue.use(VueRouter);
Vue.use(VueResource);

import MainLayout from './components/layouts/main_layout.vue';
import Login from './components/login/login.vue';

var App = Vue.extend({});
var router = new VueRouter();

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

router.map({
    '/': {
        component: function () {
            router.go({ name: 'login' });
        }
    },
    '/login': {
        name: 'login',
        component: Login
    },
    '/solucion': {
        name: 'main',
        component: MainLayout
    }
});

router.start(App, '#app');