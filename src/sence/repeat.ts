export const myRepeat = (fn: any, count: any, time: any) => {
  const callback = (time: any, arg: any[]) => {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        fn(arg)
        resolve()
      }, time)
    })
  }
  return async function (...args: any[]) {
    for (let i = 0; i < count; i++) {
      await callback(time, args)
    }
  }
}
