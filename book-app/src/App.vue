<script setup lang="ts">
import { ref } from 'vue'

const sidebarOpen = ref(false)

function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
}



</script>



<template>
    <nav>
        <button @click="toggleSidebar" class="menuButton">
        <router-view name="sidebar">
            <svg width="25" height="20" viewBox="0 0 25 20">
            <rect y="0" width="25" height="3" fill="#333"/>
            <rect y="8" width="25" height="3" fill="#333"/>
            <rect y="16" width="25" height="3" fill="#333"/>
            </svg>
        </router-view>
        </button>
        <router-link to="/" class="link"><button>Home</button></router-link>
        <router-link to="/UserForm" class="link"><button>User Form</button></router-link>
        <router-link to="/EmployeeTable" class="link"><button>Employee Table</button></router-link>
    </nav>
    <div class="layout">
        <aside v-if="sidebarOpen" class="sidebar">
            <div class="sidebar">    
                <router-view name="sidebar" />
            </div>
        </aside>
        <main class="mainView">
            <router-view />
        </main>
    </div>


</template>

<style scoped>


nav {
  background-color: #3068a0;
  display: flex;
  align-items: center;
  padding: 0;
}


html {
    background-color: #064179;
    min-height: 100vh;
}

button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-color: grey;
  height: 38px;
  width: fit-content;
  padding: 0 0.75rem;
  border-radius: 0;
}



.menuButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  padding: 0;
  margin-right: auto;
}



.sidebar {
  position: absolute;
  z-index: 1;
  width: max-content;
}

.layout {
  display: flex;
  height: calc(100vh - 60px);
}

.mainView {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.link:link {
    color: #333;
    text-decoration: none;
}

.link:visited {
    color: #333;
    text-decoration: none;
}

.link:hover {
    color: #333;
    text-decoration: none;
}

.link:active {
    color: #646464;
    text-decoration: none;
}



</style>
