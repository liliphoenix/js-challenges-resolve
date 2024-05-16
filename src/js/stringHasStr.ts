export const stringHasStr = (str1: any, str2: any) => {
  let str2Flag = 0
  let index = -1
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2[str2Flag]) {
      str2Flag++
      if (str2Flag === str2.length - 1) {
        return index + 1
      }
    } else {
      index = i
    }
  }
  return false
}
