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
            <div class="container">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            </router-view>
        </button>
        <button><router-link to="/" class="link">Home</router-link></button>
        <button><router-link to="/UserForm" class="link">User Form</router-link></button>
        <button><router-link to="/EmployeeTable" class="link">Employee Table</router-link></button>
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


nav{
    background-color: #3068a0;
}

html {
    background-color: #064179;
    min-height: 100vh;
}

button {
    display: inline-flexbox;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-color: grey;
    height: 38px;
    width: fit-content;
}

.container {
    display: inline-flexbox;
    cursor: pointer;
}

.menuButton {
    height: fit-content;
    justify-content: center;
    vertical-align: middle;
}

.bar1, .bar2, .bar3 {
    width: 30px;
    height: 3px;
    background-color: #333;
    margin: 6px 0;
    vertical-align: middle;
}

.sidebar {
    box-shadow: 5px 0 6px -2px #333;
    z-index: 1;
    width: max-content;
}

.layout {
    display: flex;
    min-height: calc(100vh - 60px);
}

.mainView {
    flex: 1;
    min-width: 0;
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
