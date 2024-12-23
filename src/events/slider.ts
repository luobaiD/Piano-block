import { createEventStore } from "e-emit.ts";

export const gameEvent = createEventStore("user",()=>{

  const gameOver = ()=>{
    // 结束游戏的逻辑
    // 。。。
  }

  const gameStart = ()=>{
    // 开始游戏的逻辑
    // 。。。
  }

  const gamePause = ()=>{
    // 暂停游戏的逻辑
    // 。。。
  }

  const gameResume = ()=>{
    // 继续游戏的逻辑
    // 。。。
  }

  return{
    gameOver,
    gameStart,
    gamePause,
    gameResume
  }
});

export const routerEvent = createEventStore("router",()=>{

  const gameOver = ()=>{
    // 结束游戏的逻辑
    // 。。。
  }

  const gameStart = ()=>{
    // 开始游戏的逻辑
    // 。。。
  }

  const gamePause = ()=>{
    // 暂停游戏的逻辑
    // 。。。
  }

  const gameResume = ()=>{
    // 继续游戏的逻辑
    // 。。。
  }

  return{
    gameOver,
    gameStart,
    gamePause,
    gameResume
  }
});