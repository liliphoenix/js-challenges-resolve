export const catchFn = () => {
  const test = new Promise((res: any, rej: any) => {
    throw new Error('123')
  })
  Promise.prototype.catch = function (fn: any) {
    return this.then(
      () => {},
      (err) => {
        fn(err)
      }
    )
  }
  test.catch((err) => {
    console.log(err.message)
  })
}
