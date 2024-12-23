class Interlayer {
  private events: Record<string, (...args: any[]) => void> 
  private static isinstance: boolean = false;
  private static instance: Interlayer | null = null;

  private constructor() {
    this.events = {};
  }

  $on(funName: string, callback: (...args: any[]) => void) {
    if (!this.events[funName]) {
      this.events[funName] = callback;
    } else {
      this.events[funName] = () => {
        console.log(`${funName}函数,存在多次命名，请检查`);
      }
    }
  }

  $emit(funName: string, ...args: any[]) {
    if (this.events[funName]) {
      return this.events[funName](...args);
    } else {
      throw new Error(`${funName} 不存在`);
    }
  }

  $delete(funName: string) {
    if (this.events[funName]) {
      delete this.events[funName];
    }
  }



  private static create() {
    if (this.isinstance) {
      return this.instance!;
    }
    this.isinstance = true;
    this.instance = new Interlayer()
    return this.instance!;
  }
  static getInstance() {
    return this.instance || this.create();
  }
};

export const interlayer = Interlayer.getInstance();