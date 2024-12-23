import { interlayer } from "." ;
import { ref } from "vue";
import { watch } from "vue";
import {useCounterStore} from "../stores/counter";


const _routerEvent = () => {

}

const _storeEvent = () => {
  /**
   * 根据传递数值生成轨道数量
   * @param num 轨道数量
   * 返回数组
   */
  interlayer.$on('pathSign', (num:number) => {
    const shuzu:Array<{}> = [];
    for(let i = 0; i < num; i++) {
      const name = `path${i}`;
      const boxs = ref([])
      shuzu.push({name, boxs})
    }
    return shuzu;
  })
  /**
   * 根据传递的轨道数量生成对应的方块
   * @param lastTimestamp 上次调用的时间戳
   * @param paths 轨道数组
   */
  // const addBox = (lastTimestamp:number, paths:any) => {
  //   const now = performance.now();
  //   const deltaTime = now - lastTimestamp;
  //   const randomNum = Math.floor(Math.random() * paths.length);
  //   if (deltaTime > 1000 / 1.3) { // 确保每帧最多添加一个方块
  //     paths.value[randomNum].boxs.push({
  //       Boolean: true,
  //       date:Date.now()
  //     });
  //     lastTimestamp = now;
  //   }
  //   requestAnimationFrame(addBox);
  // }  
  // interlayer.$on('boxSign',addBox)
}

const _gameEvent = () => {
  /**
   * 游戏开始
   */
  interlayer.$on('gameStart', () => {
    const store = useCounterStore();
    store.userData.points = 0;
    store.userData.maxPoints = localStorage.getItem('maxPoints') ? Number(localStorage.getItem('maxPoints')) : 0;
    store.setGameCourse('游戏开始');
  })
  /**
   * 游戏结束
   */
  interlayer.$on('gameFinish', () => {
    const store = useCounterStore();
    if(store.userData.points > store.userData.maxPoints) {
      localStorage.setItem('maxPoints', store.userData.points.toString());
    }
    store.setGameCourse('游戏结束');
  })
}
const __init__ = () => {
  _routerEvent();
  _storeEvent();
  _gameEvent();
}

__init__()
