export const promiseResolve = (promise: any) => {
  if (promise instanceof Promise) {
    return promise
  }
  // 要注意 promise一旦状态改变了，就没法再改了，所以用不到节流阀
  return new Promise((resolve: any, reject: any) => {
    promise.then(
      (res: any) => {
        resolve(res)
      },
      (err: any) => {
        reject(err)
      }
    )
  })
}
export const promiseReject = (promise: any) => {
  if (promise instanceof Promise) {
    return promise
  }
  // 要注意 promise一旦状态改变了，就没法再改了，所以用不到节流阀
  return new Promise((resolve: any, reject: any) => {
    promise.then(
      (res: any) => {
        resolve(res)
      },
      (err: any) => {
        reject(err)
      }
    )
  })
}
