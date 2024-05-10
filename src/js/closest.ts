export const closest = () => {
  const arr = [3, 56, 56, 23, 7, 76, -2, 345, 45, 76, 3]
  const num = 37
  let min = num - arr[0]
  let ind = 0
  arr.forEach((item, index) => {
    if (min > Math.abs(num - item)) {
      min = Math.abs(num - item)
      ind = index
    }
  })
  console.log(arr[ind])
}
