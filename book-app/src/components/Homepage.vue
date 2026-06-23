<script setup lang="ts">

</script>



<template>
<html>
    <head>
        <title>Homepage</title>
    </head>
    <body>
        <div class="positionCenter">
            <img src="@/images/audacia_academy_logo.jpg" alt="Academy Logo" class="logo">
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
  display: block;
  max-width: 100%;
  height: auto;
}

.positionCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
}

.logo {
  max-width: 450px;
  width: 100%;
  height: auto;
}

body {
    background-color: #064179;
    margin: 0 auto;
}

.positionCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* accounts for navbar height */
}

html {
    background-color: #064179;
    min-height: 100vh;
}
</style>
