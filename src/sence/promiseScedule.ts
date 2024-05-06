export class Scheduler {
  max: number
  count: number
  queue: any[]
  constructor(max = 2) {
    this.max = max
    this.count = 0
    this.queue = []
  }
  async add(task: any) {
    if (this.count >= this.max) {
      // 为了把进程卡在这里
      await new Promise((resolve) => this.queue.push(resolve))
    }
    this.count++
    let res = await task()
    this.count--
    console.log(this.queue)

    // 因为我并没有把任务添加到 queue中，所以不用担心被删除,每一个resolve相当于一个号牌，

    this.queue.length && this.queue.shift()()
    return res
  }
}
