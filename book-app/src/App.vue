<script setup lang="ts">

</script>



<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/UserForm">User Form</router-link> |
        <router-link to="/EmployeeTable">Employee Table</router-link>       
    </nav>

    <router-view/>
</template>

<style scoped>

nav{
    background-color: #74a2cf;
    text-align: center;
}

html {
    background-color: #064179;
    min-height: 100vh;
}
</style>
