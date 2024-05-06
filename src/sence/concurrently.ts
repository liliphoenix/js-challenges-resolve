export const concurrently = (max: any = 10) => {
  const message = new Array(100).fill('')
  for (let i = 0; i < 100; i++) {
    message[i] = '第' + i + '条数据'
  }

  function axiosGet(index: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message[index])
      }, 1000 * Math.random())
    })
  }
  async function handleTasks() {
    let task: any[] = []
    let res: any[] = []
    for (let i = 0; i < 100; i++) {
      const curr = axiosGet(i).then((val: any) => {
        console.log(val)
        res.push(val)
        // 出栈
        task.splice(task.indexOf(curr), 1)
      })
      task.push(curr)
      // 因为添加数组是同步的，所以promise并不会执行
      // 当池子满了后就会执行task队列
      if (task.length === max) {
        await Promise.race(task)
      }
    }
    // 等待队列里面的任务都完成
    await Promise.allSettled(task)
    return res
  }
  handleTasks().then((res) => {
    console.log(res)
  })
}
