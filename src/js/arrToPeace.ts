export const arrConcat = () => {
  let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
  let arr2 = ['A1', 'B', 'C']
  console.log(
    arr1.concat(arr2).filter((item, index, arr) => {
      return arr.indexOf(item) === index
    })
  )
  console.log(Array.from(new Set([...arr1, ...arr2])))

  // a=1 rest=[2 ,3 ，4]
}
