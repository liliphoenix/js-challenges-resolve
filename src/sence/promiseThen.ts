export const myPromiseThen = () => {
  // 使用then来解决回调地狱呗
  new Promise((res: any) => {
    setTimeout(() => {
      res()
    }, 1000)
  })
    .then(() => {
      new Promise((res: any) => {
        setTimeout(() => {
          res()
        }, 1000)
      })
    })
    .then(() => {
      console.log('finish')
    })
}
