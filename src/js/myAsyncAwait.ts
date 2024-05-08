export const myAsyncAwait = () => {
  const getData = () => {
    return 123
  }
  const getDataTwo = () => {
    return 456
  }
  function* generatorFunc(): any {
    const data1 = yield getData()
    console.log('data1', data1)
    const data2 = yield getDataTwo()
    console.log('data2', data2)
  }
  function myAsync(generatorFunc: any) {
    return function (this: any) {
      // 穿入arguments是为了让其成为通用函数
      return new Promise((resolve: any, reject: any) => {
        const gen = generatorFunc.apply(this, arguments)
        console.log(gen)
        const step = (p: any, arg?: any) => {
          let genObj: any
          let err: any
          try {
            genObj = gen[p](arg)
          } catch (error: any) {
            err = error.message
            reject()
          }
          let { value, done } = genObj
          if (!done) {
            Promise.resolve(value).then(
              (val) => {
                step('next', val)
              },
              () => {
                step('throw', err)
              }
            )
          } else {
            resolve(value)
          }
        }
        step('next')
      })
    }
  }
  myAsync(generatorFunc)().then((res) => {
    console.log(res)
  })
}
