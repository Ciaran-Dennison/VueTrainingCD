<script setup lang="ts">

</script>



<template>
<div class="home">
        <div class="positionCenter">
            <img src="@/images/audacia_academy_logo.jpg" alt="Academy Logo" class="logo">
        </div>
</div>
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

.home {
    background-color: #064179;
    margin: 0 auto;
    flex: 1;
    width: 100%;
}

</style>
