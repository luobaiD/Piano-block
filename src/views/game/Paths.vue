<template>
  <!-- 单个轨道组件 -->
  <div class="Path">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SlidingBox from './SlidingBox.vue';

</script>

<style scoped lang="scss">
  .Path{
    width: 99px;
    height: 100%;
    background-color: #1f95ef53;
    margin-right: 1px;
    overflow: hidden;
    position: relative;
  }
</style>