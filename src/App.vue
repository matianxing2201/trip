<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideToolbar"/>
  </div>
</template>

<script setup>
import TabBar from '@/components/tabBar/tabBar.vue';
import { toRefs, watch } from '@vue/runtime-core';
import { useRoute } from "vue-router";
const route = useRoute()

watch(route,(newValue)=>{
  console.log(newValue);
})


</script>

<style scoped>
@import './assets/css/common.css';


</style>
