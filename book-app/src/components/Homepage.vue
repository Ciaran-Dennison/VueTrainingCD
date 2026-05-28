<script setup lang="ts">

</script>



<template>
<html>
    <head>
        <title>Homepage</title>
    </head>
    <body>
        <div>
        <img src="@/images/audacia_academy_logo.jpg" alt="Academy Logo" width="450" height="300">
        </div>
        <div>
        <button alert="Add view here for User Form">User Form</button>
        </div>
        <br>
        <br>
        <br>
        <div>
        <button alert="Add view here for Employee Table">Employee Table</button>
        </div>
    </body>
</html>
</template>

<style scoped>
h1 {
    margin-top: 0;
    text-align: center;
}

img {
    display:block;
    margin: auto;
}

body {
    background-color: #064179;
}

button {
    display: block;
    margin: auto;
    background-color: white;
    border-color: grey;
    border-radius: 10px;
    height: 100px;
    width: 100px;
}

button:hover {
    background-color: lightgrey;
}

button:focus {
    background-color: grey;
}
</style>
