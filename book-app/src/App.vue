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
        </button> |
        <button><router-link to="/">Home</router-link></button> |
        <button><router-link to="/UserForm">User Form</router-link></button> |
        <button><router-link to="/EmployeeTable">Employee Table</router-link></button>
    </nav>
    <div class="layout">
        <aside v-if="sidebarOpen" class="sidebar">
            <router-view name="sidebar" />
        </aside>
        <main class="mainView">
            <router-view />
        </main>
    </div>


</template>

<style scoped>

nav{
    background-color: #74a2cf;
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
    border-radius: 10px;
    height: 30px;
    width: fit-content;
    margin: auto;
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

.content{
    display:flex;
}

.content main {
  flex: 1;
  margin-left: 10px;
}

.sidebar {
    width:260px;
    flex-shrink: 0;
}

.layout {
    display: flex;
    min-height: calc(100vh - 60px);
}

.mainView {
    flex: 1;
    min-width: 0;
}

</style>
