<template>
  <!-- 结算页面 -->
  <div class="settle">
    <div class="settle-content">
      <p class="now">{{ now }}</p>
      <p class="max">历史最高：{{ stores.userData.maxPoints}}</p>
      <div class="feature">
        <button @click="router.push('/')">返回主页</button>
        <button @click="interlayer.$emit('gameStart')">再来一次</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { interlayer } from '@/interlayer';

const router = useRouter();
const stores = useCounterStore();

const now = ref(`你的分数为: ${stores.userData.points}`);

onMounted(() => {

});
</script>

<style scoped lang="scss">
  .settle{
    width: 100%;
    height: 100%;
    background-color: #ffffff22;
    border-radius: 10px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    .settle-content{
      width: 60%;
      height: 250px;
      border-radius: 10px;
      background-color: rgb(243, 156, 244);
      display: flex;
      flex-direction: column;
      align-items: center;
      .now{
        margin-bottom: 0;
        padding: 0;
        font-size: 40px;
      }
      .max{
        font-size: 20px;
        margin: 0;
      }
      .feature{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button{
          width: 80px;
          height: 40px;
          border-radius: 10px;
          background-color: #ffffff;
        }
      }
    }
  }
</style>