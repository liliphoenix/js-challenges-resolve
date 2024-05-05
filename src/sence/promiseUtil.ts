export const promiseUtil = (prom: any) => {
  return Promise.race([
    prom,
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error())
      }, 1000)
    })
  ])
}
