export const partialFun = (fun: any, value: any) => {
  return function (...args: any) {
    fun(value, ...args)
  }
}
