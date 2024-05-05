// 在js中实现并发，可以使用promise.all的方法也可以用async await方法来实现
export const multiFetch = () => {
  let api1 = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve('api1')
    }, 2000)
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
  Promise.all([api1, api2, api3]).then((res) => {
    console.log(...res)
  })
}
