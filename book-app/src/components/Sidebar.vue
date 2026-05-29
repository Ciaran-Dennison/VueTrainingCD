<script setup lang="ts">
import { ref } from 'vue'

const isCollapsed = ref(false);

</script>




<template>
<div class="layout">
    <aside>
        <div class="sidebar-header">
            <h2>Sidebar</h2>
        </div>
        <nav class="sidebar-nav">
            test
            test
            test
        </nav>
    </aside>
    <main class="main-content">
        <slot></slot>
    </main>
    
</div>
</template>




<style scoped>

.layout {
    display:flex;
    min-height: 100vh;
}

.sidebar {
    width: 250px;
    background: #afcbe8;
    color: #333;
    transition: width 0.3s;
}

.sidebar.collapsed {
    width: 60px;
}

.sidebar-header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    transform: translateX(-100%);
  }

    .sidebar:not(.collapsed) {
    transform: translateX(0);
  }
}



</style>