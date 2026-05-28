import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import UserForm from '@/components/UserForm.vue'
import EmployeeTable from '@/components/EmployeeTable.vue'
import Sidebar from '@/components/Sidebar.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: Homepage,
        sidebar:Sidebar
      },
    },
    {
      path: '/UserForm',
      components: {
        default: UserForm,
        sidebar:Sidebar 
      },
    },
    {
      path: '/EmployeeTable',
      components: {
        default: EmployeeTable,
        sidebar:Sidebar 
      },
    }
  ],
})  



export default router
