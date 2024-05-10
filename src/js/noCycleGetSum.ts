export const noCycleGetSum = () => {
  const arr = [1, 3, 4, 5, 6, 6]
  console.log(
    arr.reduce((pre, next) => {
      return pre + next
    }, 0)
  )
}
