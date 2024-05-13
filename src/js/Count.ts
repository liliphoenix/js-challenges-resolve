export const countClass = () => {
  class Count {
    count: number
    constructor() {
      this.count = 0
    }
    reset() {
      this.count = 0
      return this.count
    }
    add() {
      this.count++
      return this.count
    }
  }
  const ins = new Count()
  console.log(ins.add())
  console.log()
}
