export const transformToArr = () => {
  const str = ` 1 21    3
4 5  6
7   8 9 ` /* 多行字符串要用反引号 */
  let arr: any = str.split('\n')
  console.log(arr)
  arr = arr.map((item: any) => {
    return item.split(' ').filter((el: any) => el !== '')
  })
  console.log(arr)
}
