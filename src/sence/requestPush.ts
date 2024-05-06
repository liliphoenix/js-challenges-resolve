export const requestPush = (max: number) => {
  let queue = []
  let asyncPool: any[] = []
  return async (url: any) => {
    if (max <= asyncPool.length) {
      const e = new Promise((resolve: any, reject: any) => {
        fetch(url).then(() => {
          resolve()
        })
      }).then(() => {
        asyncPool.splice(asyncPool.indexOf(e), 1)
      })
      asyncPool.push(e)
    }
    if (max >= asyncPool.length) {
      await Promise.race(asyncPool)
    }
  }
}
