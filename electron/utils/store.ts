export class Store {
  private store: Map<string, any>
  private storePath: string

  constructor(storePath: string) {
    this.store = new Map()
    this.storePath = storePath
  }

  set(key: string, value: any) {
    this.store.set(key, value)
    this.persistent()
  }

  get(key: string, defaultValue: any) {
    return this.store.get(key) || defaultValue
  }

  // 检测变化才保存
  persistent() {
    console.log("persistent")
    // save to file
  }
}
