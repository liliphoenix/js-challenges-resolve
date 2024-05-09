export const zipStr = (str: string) => {
  let count = 1
  let cur = str[0]
  let res = ``
  for (let i = 1; i < str.length; i++) {
    if (str[i] == cur) {
      count++
    } else {
      res += `${cur}${count}`
      cur = str[i]
      count = 1
    }
  }
  res += `${cur}${count}`
  console.log(res)
}
