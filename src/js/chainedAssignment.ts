export const chainedAssignment = () => {
  type A = {
    n: any
    x?: any
  }
  let a: A = { n: 1 }
  let b = a
  a.x = a = { n: 2 }
  console.log(a.x) // --> undefined
  console.log(b.n) // --> {n: 2}
}
