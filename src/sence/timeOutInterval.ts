export const myInternal = (fn: any, delay: any) => {
  const timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, delay)
}
