export const judgeString = (arr: any[]) => {
  arr.filter((item) => typeof item == 'string' || item.instanceof == 'String')
  console.log(arr)
}
