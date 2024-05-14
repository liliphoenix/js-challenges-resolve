export const getAllArrEle = (arr: any[]) => {
  const res: any = [
    { sum: 0, arr: [] },
    { sum: 0, arr: [] },
    { sum: 0, arr: [] }
  ]
  arr
    .sort((a, b) => {
      return b - a
    })
    .forEach((ele: any) => {
      res.sort((a: any, b: any) => {
        return a.sum - b.sum
      })
      res[0].sum += ele
      res[0].arr.push(ele)
    })
  console.log(res)
}
