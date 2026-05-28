<script setup lang="ts">

</script>



<template>
    <nav>
        <button><router-link to="/">Home</router-link></button> |
        <button><router-link to="/UserForm">User Form</router-link></button> |
        <button><router-link to="/EmployeeTable">Employee Table</router-link></button>       
    </nav>

    <router-view/>
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
</style>
