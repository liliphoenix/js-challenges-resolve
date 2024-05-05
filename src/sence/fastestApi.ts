export const fastestApi = () => {
  let api1 = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve('api1')
    }, 1000)
  })
  let api2 = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve('api2')
    }, 990)
  })
  let api3 = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve('api3')
    }, 890)
  })
  let time = Date.now()
  return Promise.race([api1, api2, api3]).then((res: any) => {
    console.log(res)

    let timer = Date.now() - time
    console.log(timer)
  })
}
