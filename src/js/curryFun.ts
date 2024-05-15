export const curryFun = (fn: any) => {
  const judge = function (...args: any[]) {
    // fn.length返回参数的个数
    if (args.length === fn.length) {
      return fn(...args)
    }
    return (...arg: any[]) => judge(...args, ...arg)
  }
  return judge
}
