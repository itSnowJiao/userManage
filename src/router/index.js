import Vue from 'vue'
import Router from 'vue-router'
import users from '@/components/users'
import aboutUs from '@/components/aboutUs'
import addUser from '@/components/addUser'
import userDetail from '@/components/userDetail'
import editUser from '@/components/editUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'users',
      component: users
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: addUser
    },
    {
      path: '/user/:id',
      name: 'userDetail',
      component: userDetail
    },
    {
      path: '/edit/:id',
      name: 'editUser',
      component: editUser
    }
  ]
})
