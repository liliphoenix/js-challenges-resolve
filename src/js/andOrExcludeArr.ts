export const andOrExclude = () => {
  const arrOne = [1, 2, 3, 4]
  const arrSec = [1, 3, 5, 6, 7]
  //  Intersection
  const Intersection = (arr1: any[], arr2: any) => {
    const shortOne = arr1.length < arr2.length ? arr1 : arr2
    const res = shortOne.filter((item: any) => {
      return arrSec.indexOf(item) !== -1
    })
    console.log(res)
  }
  Intersection(arrOne, arrSec)
  // Union
  const Union = (arr1: any[], arr2: any) => {
    const res = Array.from(new Set([...arr1, ...arr2]))
    console.log(res)
  }
  Union(arrOne, arrSec)
  const Difference = (arr1: any[], arr2: any) => {
    const shortOne = arr1.length < arr2.length ? arr1 : arr2
    const res = shortOne.filter((item: any) => {
      return arrSec.indexOf(item) === -1
    })
    console.log(res)
  }
  Difference(arrOne, arrSec)
}
