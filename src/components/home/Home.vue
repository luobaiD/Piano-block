<template>
  <!-- 主页面*开始页 -->
  <div class="home-whole">
    <!-- 轨道 -->
    <div v-for="item in 6">  
      <Paths>
        <div class="slidBox" :style="{animationDelay: `${item * 0.8}s`}"></div>
      </Paths>
    </div>
    <!-- 最高数据 -->
    <div class="point-box">
      <span>历</span>
      <span>史</span>
      <span>最</span>
      <span>高</span>
      <span>：</span>
      <span>{{ stores.userData.maxPoints }}</span>
    </div>
    <!-- 开始按钮 -->
    <div class="feature-box">
      <button class="buttonClass" @click="dianji">开始游戏</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Paths from '../../views/game/Paths.vue'
import SlidingBox from '../../views/game/SlidingBox.vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '../../stores/counter'
import { interlayer } from '../../interlayer'
import { eventEmitter } from 'e-emit.ts';
const router = useRouter()
const stores = useCounterStore()

const dianji = () => {
  router.push({
    path: '/game'
  })
  interlayer.$emit('gameStart')
}
function huoqu(){
  stores.userData.maxPoints = localStorage.getItem('maxPoints')?Number(localStorage.getItem('maxPoints')):0;
}

onMounted(() => {
  huoqu()
})
</script>

<style scoped lang="scss">
  .home-whole{
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    .slidBox{
      width: 100%;
      height: 150px;
      /* margin-top: 450px; */
      background: linear-gradient(180deg, #534d4d, #000204);
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.12),
        0 1px 2px rgba(0, 0, 0, 0.24);
      overflow: hidden;
      position: absolute;
      top: -153px;
      animation: boxbuttom 5s linear forwards infinite;
    }
    @keyframes boxbuttom {
      to{
        transform: translateY(120vh);
      }
    }
  }
  .point-box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 100px;
    left: 0;
    span{
      margin: 10px;
      font-size: 40px;
      color: #fff;
      // text-shadow: 
      //   -1px -1px #fff,
      //   -2px -2px #fff,
      //   -3px -3px #fff,
      //   -4px -4px #fff,
      //   -5px -5px #fff,
      //   -8px -8px #020101;
      animation: colorChange 1s ease-in-out infinite alternate;
    }
    @keyframes colorChange{
      to{
        color: rgb(226, 106, 106);
      }
    }
    @for $i from 1 through 6{
      span:nth-child(#{$i}){
        animation-delay: 0.2s * ($i - 1);
      }
    }
  }
  .feature-box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    .buttonClass {
      position: absolute;
      top: 70%;
      font-size:19px;
      font-family:Arial;
      width:181px;
      height:60px;
      border-width:1px;
      color:#fff;
      border-color:#599bb3;
      font-weight:bold;
      border-top-left-radius:16px;
      border-top-right-radius:16px;
      border-bottom-left-radius:16px;
      border-bottom-right-radius:16px;
      box-shadow: 0px 10px 14px -7px #276873;
      text-shadow: 0px 1px 0px #3d768a;
      background:linear-gradient(#599bb3, #408c99);
    }
    .buttonClass:hover {
      background: linear-gradient(#408c99, #599bb3);
    }
  }
</style>