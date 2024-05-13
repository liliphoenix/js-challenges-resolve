export const permute = () => {
  let testArr = [
    [1, 2],
    [3, 4],
    [5, 6]
  ]
  let resTemp: any = []
  let res: any = []

  for (let i = 0; i < testArr[0].length; i++) {
    for (let j = 0; j < testArr[1].length; j++) {
      resTemp.push([testArr[0][i], testArr[1][j]])
    }
  }
  resTemp.forEach((element: any) => {
    for (let j = 0; j < testArr[2].length; j++) {
      res.push([...element, testArr[2][j]])
    }
  })
  console.log(res)
}
