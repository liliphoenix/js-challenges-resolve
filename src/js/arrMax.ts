export const arrMax = (arr: any) => {
  return arr.sort((a: any, b: any) => {
    return b - a
  })[0]
}
