// 那种隔一秒一次输出的用高阶函数，并且别忘了resolve

export const OneSecond = async () => {
  const logging = (count: any) => {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        console.log(count + 1)
        resolve()
      }, 1000)
    })
  }
  for (let i = 0; i < 6; i++) {
    await logging(i)
  }
}
