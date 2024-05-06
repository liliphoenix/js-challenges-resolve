export const myPromiseAllSchedule = () => {
  const promiseAsyncPool = async (tasks: any[], max: number) => {
    // 全部队列
    let tasksArr = []
    let asyncPool: any[] = []
    for (let task of tasks) {
      // 将任务函数处理成promise对象
      const cur = Promise.resolve(task())

      tasksArr.push(cur)
      console.log(asyncPool.length)

      if (asyncPool.length <= max) {
        const prom = cur.then(() => {
          asyncPool.splice(asyncPool.indexOf(prom), 1)
        })
        asyncPool.push(prom)
      }
      if (asyncPool.length >= max) {
        await Promise.race(asyncPool)
      }
    }
    return Promise.all(tasksArr)
  }
  function sleep(text: any, delay = 1000) {
    return () =>
      new Promise((resolve: any) => {
        setTimeout(() => {
          resolve()
        }, delay)
      })
  }

  const tasks = [1, 2, 3, 4, 5].map((i) => {
    return sleep(i, 1000)
  })
  promiseAsyncPool(tasks, 2)
}
