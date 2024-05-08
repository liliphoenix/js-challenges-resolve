export class math {
  sum: number
  constructor(sum = 0) {
    this.sum = 0
  }
  add(...args: any[]) {
    this.sum = args.reduce((pre, next) => {
      return pre + next
    }, this.sum)
    return this
  }
  minus(...args: any[]) {
    this.sum =
      this.sum -
      args.reduce((pre, next) => {
        return pre + next
      }, this.sum)
    return this
  }
  times(time: any) {
    this.sum = this.sum * time
  }
}
