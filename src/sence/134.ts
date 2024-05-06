export const testQueue = () => {
  class Queue {
    queue: any[]
    constructor() {
      this.queue = []
    }
    task(delay: any, cb: any) {
      this.queue.push(
        new Promise((resolve: any, reject: any) => {
          setTimeout(() => {
            cb()
            resolve()
          }, delay)
        })
      )
      return this
    }
    async start() {
      for (let task of this.queue) {
        await task
      }
    }
  }
  new Queue()
    .task(1000, () => {
      console.log(1)
    })
    .task(3000, () => {
      console.log(2)
    })
    .task(4000, () => {
      console.log(3)
    })
    .start()
}
