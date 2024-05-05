export const promiseRace = (promiseArr: any) => {
  if (promiseArr.length == 0) {
    return
  }
  // 要注意 promise一旦状态改变了，就没法再改了，所以用不到节流阀
  return new Promise((resolve: any, reject: any) => {
    let flag = true
    for (const prom of promiseArr) {
      Promise.resolve(prom).then(
        (res) => {
          resolve(res)
        },
        (err) => {
          reject(err)
        }
      )
    }
  })
}
