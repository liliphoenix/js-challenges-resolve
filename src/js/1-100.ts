export const hundred = () => {
  let sum = 0
  let curr = 0
  const trans = () => {
    if (sum >= 100) {
      return sum
    }
    sum = sum + 1
    curr += sum
    trans()
  }
  trans()
  console.log(sum)
  console.log(curr)
}
