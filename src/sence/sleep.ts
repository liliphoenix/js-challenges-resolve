export const sleep = (delay: any) => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}
