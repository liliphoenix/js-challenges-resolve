export const cacheFun = (fun: any) => {
  let res: any = new WeakMap()
  return function (...args: any) {
    if (res.has(fun)) {
      return res.get(fun)
    } else {
      res.add(fun, fun(...args))
      return fun(...args)
    }
  }
}
