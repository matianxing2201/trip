<template>
  <div class="tab-bar">
    <!-- <template v-for="(item, index) of tabbarData" :key="index">
      <div 
        :class="['tab-bar-item',{ active: currIndex === index}]"
        @click="changeIndex(index,item)"
      >
        <img v-if="currIndex !== index" :src="getUrlImage(item.image)" alt="" />
        <img v-else :src="getUrlImage(item.imageActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
    <van-tabbar v-model="currIndex" active-color="#ff9854">
      <template v-for="(item,index) of tabbarData" 
        :key="index"
      >
          <van-tabbar-item :to="item.path">
            <span>{{ item.text }}</span>
             <template #icon>
                <img v-if="currIndex !== index" :src="getUrlImage(item.image)" alt="" />
                <img v-else :src="getUrlImage(item.imageActive)" alt="" />
            </template>
          </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import { getUrlImage } from "@/utils/loadAssetsImg";
import { ref } from "vue";
import { useRouter } from 'vue-router'

const currIndex = ref(0);
const router = useRouter();



</script>

<style lang="less" scoped>
.tab-bar {
  img{
    height: 30px;
  }
}
</style>
