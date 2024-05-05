export const fiveSecAbort = (url: any, options: any) => {
  let re: any = null
  fetch(url, options).then((res) => {
    re = res
  })
  setTimeout(() => {
    if (!re) {
      new AbortController().abort()
    }
  }, 5000)
}
export const fiveSecAbort1 = (fn: any) => {
  const p1 = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      reject()
    }, 5000)
  })
  const p2 = new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      fn()
      resolve()
    }, 10000)
  })
  return Promise.race([p1, p2])
}
