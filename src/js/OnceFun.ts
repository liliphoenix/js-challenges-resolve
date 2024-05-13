export function OnceFun(this: any, fun: any) {
  let flag = true
  return function (...args: any[]) {
    if (!flag) return
    flag = false
    return fun(...args)
  }
}
