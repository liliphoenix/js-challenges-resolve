const PromiseAll = (promiseArr: any) => {
  if (promiseArr.length == 0) {
    return
  }

  return new Promise((resolve: any, reject: any) => {
    let resArr: any = []
    let count = 0
    let settledCount = 0
    for (const prom of promiseArr) {
      let i = count
      count++
      if (prom instanceof Promise) {
        Promise.resolve(prom)
          .then((res: any) => {
            settledCount++
            resArr[i] = res
            if (settledCount === promiseArr.length) {
              console.log('全部完成')
              resolve(resArr)
            }
          })
          .catch((err) => reject(err))
      }
    }
  })
}

export { PromiseAll }
