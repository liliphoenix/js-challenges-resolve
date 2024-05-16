export const LazyMan = () => {
  class LazyMan {
    name: string
    queue: any[]
    sleepTime: number
    constructor(name: string) {
      this.name = name
      this.queue = []
      this.sleepTime = 0
      this.queue.push(() => {
        this.sayHi(name)
      })
      setTimeout(() => {
        this.next()
      })
    }
    next() {
      console.log(this.sleepTime)

      if (this.sleepTime) {
        Promise.resolve(
          setTimeout(() => {
            console.log('Wake up after')
          }, this.sleepTime)
        ).then(() => {
          this.sleepTime = 0
          const task = this.queue.shift()
          task && task()
        })
      }
      const task = this.queue.shift()
      task && task()
    }
    sayHi(name: string) {
      this.queue.push(console.log(name))
    }
    sleep(time: any) {
      this.queue.push(() => {
        setTimeout(() => {
          console.log('Wake up after')
          this.next()
        }, time * 1000)
      })
      return this
    }
    eat(food: string) {
      this.queue.push(() => {
        console.log(`Eat ${food}~`)
      })
      this.next()
      return this
    }
    sleepFirst(time: any) {
      this.queue.unshift(() => {
        this.sleepTime = time * 1000
      })
      return this
    }
  }
  new LazyMan('Hank').sleepFirst(100).eat('dinner')
}
