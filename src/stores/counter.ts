import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { interlayer } from '@/interlayer'

export const useCounterStore = defineStore('counter', () => {
  /**
   * 轨道数据
   * @param number 轨道数量
   * @param color 轨道颜色
   * @param difficulty 难度
   */
  const trackData = ref({
    number: 5, 
    color: '#1f95ef53',  
    difficulty: 1, 
  })

  /**
   * 游戏进程
   * @param course 进程内容只能为'未开始' | '游戏开始' | '游戏暂停' |'游戏结束'
   */
  const gameCourse = ref({
    course: '游戏开始'
  })
  const getGameCourse = computed(() => {
    return gameCourse.value.course
  })
  const setGameCourse = (course: string) => {
    gameCourse.value.course = course
  }

  /**
   * 用户数据
   * @param points 积分
   * @param maxPoints 历史最高积分
   */
  const userData = ref({
    points: 0,
    maxPoints: 0,
  })

  

  return { 
      trackData, userData, 
      getGameCourse, setGameCourse
  }
})
