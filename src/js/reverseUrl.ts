// 不能用split
export const reverseUrl = (url: string) => {
  let temp = ''
  let res = ''
  for (let i = 0; i < url.length; i++) {
    const element = url[i]
    if (element == '.') {
      res = `${temp}${i == url.length - 1 ? '' : '.'}` + res
      temp = ''
    } else {
      temp += element
    }
  }
  res = `${temp}.` + res
  console.log(res.substr(0, url.length))
}
