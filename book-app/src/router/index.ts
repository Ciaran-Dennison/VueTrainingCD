import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import UserForm from '@/components/UserForm.vue'
import EmployeeTable from '@/components/EmployeeTable.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: Homepage
      },
    },
    {
      path: '/UserForm',
      components: {
        default: UserForm
      },
    },
    {
      path: '/EmployeeTable',
      components: {
        default: EmployeeTable
      },
    }
  ],
})  



export default router
