export const debounceAndThrottle = () => {
  const debounce = (callback: any, time: any) => {
    let timer: any = null
    return (...args: any[]) => {
      if (timer) {
        clearTimeout(timer)
        return
      }
      timer = setTimeout(() => {
        callback()
      }, time)
    }
  }
  const throttle = (fn: any, delay: any) => {
    let currentTime = Date.now()
    return (...args: any[]) => {
      let nowTime = Date.now()
      if (nowTime - currentTime > delay) {
        fn(...args)
        currentTime = Date.now()
      }
    }
  }
}
