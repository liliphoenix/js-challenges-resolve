// finally的核心就是:无论上一步是成功与否，都执行这个，而且不接受任何参数
// 1. 把传递过来的函数执行
// 2. 上一步的状态和值进行延续
Promise.prototype.finally = function (Fun: any) {
  return this.then(
    (res) => {
      Fun()
      return res
    },
    (err) => {
      Fun()
      throw err
    }
  )
}
