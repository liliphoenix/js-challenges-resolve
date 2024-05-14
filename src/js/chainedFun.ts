export const chainedFun = () => {
  const obj = {
    count: 0,
    add(num: any) {
      this.count = this.count + num
      return this
    },
    delete(num: any) {
      this.count = this.count - num
      return this
    }
  }
  return obj
}
