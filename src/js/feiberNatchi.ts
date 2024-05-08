export const feiBerNac: any = (n: any) => {
  let sum
  if (n == 1) {
    return 0
  }
  if (n == 2) {
    return 1
  }
  return feiBerNac(n - 1) + feiBerNac(n - 2)
}
