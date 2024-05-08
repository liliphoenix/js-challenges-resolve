export const myIndexof = (str1: any, str2: any) => {
  const longStr = str1.length > str2.length ? str1 : str2
  const shortStr = longStr === str1 ? str2 : str1
  let left = 0
  const firstChart = shortStr[0]
  for (let i = 0; i < longStr.length; i++) {
    left = longStr[i] === firstChart ? i : left
    if (longStr.subStr(left, shortStr.length) === shortStr) {
      return left
    }
  }
  return -1
}
