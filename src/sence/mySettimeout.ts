export const mySettimeOut = (fn: any, time: number) => {
  let timer: any = null
  let cancel = false
  timer = () => {
    setTimeout(() => {
      if (!cancel) {
        fn()
        timer()
      }
    }, time)
  }
  timer()
  return () => {
    cancel = true
  }
}
