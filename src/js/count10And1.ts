export const tenOne = () => {
  const arr1 = Array(10).fill(1)
  console.log(arr1)
  const arr2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  console.log(arr2)
  const arr3 = Array.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  console.log(arr3)
  let arr4 = []
  let arr5: any[] = []
  let arr6: any = []
  let arr7: any[] = Array.from('1111111111', (val) => parseInt(val))
  let num = 0
  while (num < 10) {
    arr4.push(1)
    arr5.splice(0, 0, 1)
    arr6 = arr6.concat([1])
    num++
  }
  console.log(arr4)
  console.log(arr5)
  console.log(arr6)
  console.log(arr7)
}
