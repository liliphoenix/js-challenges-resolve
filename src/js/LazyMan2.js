class LazyMan {
  constructor(name) {
    this.name = name
    this.queue = []
    console.log(`Hi this is ${this.name}`)
    setTimeout(() => {
      this.next()
    })
  }
  eat(arg) {
    const task = () => {
      console.log(`eat ${arg}`)
      this.next()
    }
    this.queue.push(task)
    return this
  }
  next() {
    const task = this.queue.shift()
    task && task()
  }
  _sleep(time, isFirst) {
    const task = () => {
      console.log('sleep start')
      setTimeout(() => {
        console.log('sleep end')
        this.next()
      }, time * 1000)
    }
    if (isFirst) {
      this.queue.unshift(task)
    } else {
      this.queue.push(task)
    }
    return this
  }
  sleep(time) {
    this._sleep(time, false)
    return this
  }
  sleepFirst(time) {
    this._sleep(time, true)
    return this
  }
}
const lazyMan = new LazyMan('张三')
lazyMan.eat('dinner').sleepFirst(1).eat('super')
