export const promiseFloat = () => {
  let api1 = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      console.log('1')
      resolve('api1')
    }, 1000)
  })
  let api2 = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      console.log('2')
      resolve('api2')
    }, 2990)
  })
  let api3 = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      console.log('3')
      resolve('api3')
    }, 3890)
  })
  let arr = [api1, api2, api3]
  arr
    .reduce((prev: any, next: any) => {
      return prev.then(() => {
        return next
      })
    }, Promise.resolve())
    .then((res: any) => {
      console.log(res)
    })
}
