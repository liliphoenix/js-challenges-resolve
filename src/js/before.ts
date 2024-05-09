// 一旦有函数作为参数使用的时候要用 高阶
export const before = (num: any, cb: any) => {
  let count = 0
  let res = ''
  return function (...args: any[]) {
    if (count > num) {
      return res
    } else {
      res = cb(...args)
    }
  }
}
