export const onionModel = () => {
  function fn1(x: any) {
    return x + 1
  }
  function fn2(x: any) {
    return x + 2
  }
  function fn3(x: any) {
    return x + 3
  }
  function fn4(x: any) {
    return x + 4
  }
  const composeFun = (...fn: any[]) => {
    if (!fn.length) return
    if (fn.length == 1) return fn[0]()
    return (...args: any) => {
      return fn.reduce((pre, next) => {
        if (typeof pre === 'function') {
          pre = pre(...args)
        }
        return next(pre)
      })
    }
  }
}
