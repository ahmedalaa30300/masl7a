/*jshint esversion: 8 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/home';
import signup from '../views/auth/signup';
import login from '../views/auth/login';
import forgotpassword from '../views/auth/forgotpassword';
import vemail from '../views/auth/verfiyemail';
import newpassword from '../views/auth/newpassword';
import Header from '../components/sections/Header';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: forgotpassword
  },
  {
    path: '/vemail',
    name: 'vemail',
    component: vemail
  },
  {
    path: '/newpassword',
    name: 'newpassword',
    component: newpassword
  },
  {
    path: '/header',
    name: 'header',
    component: Header
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
