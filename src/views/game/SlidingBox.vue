<template>
  <!-- 滑动盒子 -->
  <div class="box" @click="boxbutton" v-if="isclick" ref="mybox"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { interlayer } from '@/interlayer';

const mybox = ref<HTMLDivElement | null>(null);
const isclick = ref(true);
const stores = useCounterStore();

const boxbutton = () => {
  stores.userData.points += 1;
  isclick.value = false;
}

const lose  = setInterval(() => {
  // 获取div的位置信息
  const rect = mybox.value?.getBoundingClientRect();
  // 检查div的底部是否触底
  if (!rect) return;
  if (rect.bottom >= window.innerHeight) {
    interlayer.$emit('gameFinish');// 游戏结束
    clearInterval(lose); // 停止定时器
  }
}, 10);

interlayer.$on('gamePause', () => {
  if (mybox.value) {
    mybox.value.style.animationPlayState = 'paused';
  }
});
onMounted(() => {
  // if (mybox.value) {
  //   if (stores.getGameCourse === '游戏暂停') {
  //     mybox.value.style.animationPlayState = 'paused';
  //   } else {
  //     mybox.value.style.animationPlayState = 'running';
  //   }
  // }
});
</script>

<style scoped lang="scss">
.box {
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
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(120vh);
  }
}
</style>