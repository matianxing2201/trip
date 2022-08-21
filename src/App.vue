<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script setup>
import TabBar from '@/components/tabBar/tabBar.vue';

</script>

<style scoped>
@import './assets/css/common.css';


</style>
