<script setup lang="ts">

</script>



<template>
<html>
    <head>
        <title>Homepage</title>
    </head>
    <body>
        <div>
        <img src="@/images/audacia_academy_logo.jpg" alt="Academy Logo" width="450" height="300" class="positionCenter">
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
    margin: 0 auto;
}

.positionCenter{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

html {
    background-color: #064179;
    min-height: 100vh;
}
</style>
