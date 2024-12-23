<template>
  <div class="game-whole">
    <div class="points">
      <p>{{ stores.userData.points }}</p>
    </div>
    <Paths v-for="(item, index) in paths" :key="index">
      <template v-for="i in item.boxs">
        <SlidingBox v-show="i.Boolean" />
      </template>
    </Paths>
    <SettleAccount v-if="stores.getGameCourse === '游戏结束'"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
// 轨道
import Paths from './game/Paths.vue';
// 滑块
import SlidingBox from './game/SlidingBox.vue';
// 结算页面
import SettleAccount from '../components/SettleAccount/SettleAccount.vue';
import { useCounterStore } from '@/stores/counter';
import { interlayer } from '@/interlayer';
const stores = useCounterStore();
interface Paths{
  name:string,
  boxs:Array<{
    Boolean:boolean,
    date:number
  }>
}
const paths:any = ref(interlayer.$emit('pathSign', stores.trackData.number))

// 生成方块并放到随机轨道中
let lastTimestamp = performance.now();

let flag = false;
let requestAnimationFrameID:number;
// 定义一个函数来添加新的方块
function addBlock() {
  if (flag) {
    return
  }
  const now = performance.now();
  const deltaTime = now - lastTimestamp;
  const randomNum = Math.floor(Math.random() * 5);
  if (deltaTime > 1000 / 1.3) { // 确保每帧最多添加一个方块
    paths.value[randomNum].boxs.push({
      Boolean: true,
      date:Date.now()
    });
    lastTimestamp = now;
  }
  requestAnimationFrameID = requestAnimationFrame(addBlock);
  // console.log(requestAnimationFrameID);

  
  if(stores.getGameCourse === '游戏结束'){
    console.log("结束");
    flag = true;
    paths.value = interlayer.$emit('pathSign', stores.trackData.number)
    cancelAnimationFrame(requestAnimationFrameID)
  }
  // console.log(requestAnimationFrameID);
}
// 处理键盘事件的函数
function handleKeyDown(event: KeyboardEvent) { 
  if (event.code === 'Space') {
    if(stores.getGameCourse === '游戏开始'){
      stores.setGameCourse('游戏暂停')
    }else{
      stores.setGameCourse('游戏开始')
    }
  }
}




onMounted(() => {

  if(stores.getGameCourse === '游戏开始'){
    requestAnimationFrameID = requestAnimationFrame(addBlock);
  }
  window.addEventListener('keydown', handleKeyDown); // 添加键盘事件监听器

});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown); // 移除键盘事件监听器
});
</script>

<style scoped lang="scss">
  .game-whole{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    .points{
      width: 100%;
      height: 20%;
      position: absolute;
      pointer-events: none;
      text-align: center;
      top: 10px;
      font-size: 50px;
      color: red;
      z-index: 10;
    }
  }
  .game-whole:hover{
    cursor: pointer;
  }
</style>