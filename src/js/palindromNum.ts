export const PalindromeNum = () => {
  let arr: any[] = []
  for (let i = 1; i <= 10000; i++) {
    if (i < 10) {
      continue
    }
    const str = i.toString()
    if (str.split('').reverse().join('') === str) {
      arr.push(str)
    }
  }
  console.log(arr)
  return arr
}
