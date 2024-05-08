export const mySetInterval = (a: any, b: any) => {
  const clear = true
  const timer = (a: any, b: any) => {
    setTimeout(() => {
      timer(a + b, b)
    }, a)
  }
  const clearOut = (time: any) => {
    clearTimeout(time)
  }
  timer(a, b)
}
