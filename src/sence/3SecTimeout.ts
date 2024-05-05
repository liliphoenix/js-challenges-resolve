export const threeTimeoutFun = () => {
  return Promise.race([
    new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        resolve(123)
      }, 6000)
    }),
    new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        reject(123)
      }, 4000)
    })
  ]).then(
    (res) => {
      console.log(res)
    },
    (err) => {
      console.log(err)
    }
  )
}
