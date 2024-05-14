export const pipeFun = (...funs: any[]) => {
  return function (...args: any[]) {
    if (funs.length === 0) return
    if (funs.length === 1) return funs[0](...args)
    return funs.reduce((pre, next) => {
      if (typeof pre === 'function') {
        pre = pre(...args)
      }
      return next(pre)
    }, args)
  }
}
