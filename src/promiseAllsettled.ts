export const promiseAllSettled = (promArr: any) => {
  if (promArr.length == 0) {
    return
  }
  return new Promise((resolve: any, reject: any) => {
    let count = 0
    let settledCount = 0

    const resArr: any = []
    for (const prom of promArr) {
      const i = count
      count++
      Promise.resolve(prom)
        .then(
          (res) => {
            settledCount++
            console.log(i)

            resArr[i] = {
              value: res,
              status: 'fulfilled'
            }
          },
          (err) => {
            settledCount++
            resArr[i] = {
              value: err,
              status: 'rejected'
            }
          }
        )
        .finally(() => {
          if (settledCount == promArr.length) {
            console.log('全部完成')
            resolve(resArr)
          }
        })
    }
  })
}
