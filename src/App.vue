<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
  .app {
    width: 600px;
    height: 100vh;
  }
</style>
