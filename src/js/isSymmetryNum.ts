export const isSymmetryNum = () => {
  let arr: any = []
  for (let i = 1; i <= 10000; i++) {
    const str = String(i)
    if (str.length <= 1) continue
    if (str.split('').reverse().join('') === str) {
      arr.push(i)
    }
  }
  console.log(arr)
}
