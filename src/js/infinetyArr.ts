export const infinityArr = function* () {
  let i = 0
  while (true) {
    yield i++
  }
}
