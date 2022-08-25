<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />
    </div>

    <!-- 2.tab的切换 -->
    <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
      <template v-for="(value, key) in allCities" :key="key">
        <van-tab :title="value.title" :name="key"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getCityAll } from "@/services"
const router = useRouter();


// 获取数据
onMounted(async()=>{
  const cityDatas = await getCityAll();
  allCities.value = cityDatas.data
})


//搜索栏
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

// tab
let allCities = ref();
const tabActive = ref()

</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  // 布局滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>