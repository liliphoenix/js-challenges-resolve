export const chainedArr = () => {
  const arr = [0, 1, 2, 4, 5, 6, 7, 13, 15, 16]
  let preVal = arr[0]
  let resArr = []
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 == arr[i]) {
      resArr[count] = `${preVal}->${arr[i]}`
    } else {
      count++
      resArr[count] = arr[i]
      preVal = arr[i]
    }
  }
  console.log(resArr)
}
