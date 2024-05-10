export const oddEvenCount = (fn: any) => {
  let count = 0
  return function () {
    fn()
    count++
    if (count % 2 == 0) {
      return 2
    } else {
      return 1
    }
  }
}
