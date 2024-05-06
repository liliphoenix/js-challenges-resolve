export const fiveSecEnd = (url: any, options: any) => {
  let res: any = null
  const abort = new AbortController()
  fetch(url, options).then((re: any) => {
    res = re
  })
  setTimeout(() => {
    if (!res) {
      abort.abort()
    }
  }, 5000)
}


