export const isObjectEquals = () => {
  const A = [1, 3, 5, 6, 7]
  const B = [1, 3, 5, 6, 8]
  function judge(A: any, B: any) {
    let str1 = A.sort((a: any, b: any) => a - b).join('')
    let str2 = B.sort((a: any, b: any) => a - b).join('')
    if (str1 === str2) return 0
    else if (str1.includes(str2)) return 2
    else if (str2.includes(str1)) return 1
    return -1
  }
  console.log(judge(A, B))
}
