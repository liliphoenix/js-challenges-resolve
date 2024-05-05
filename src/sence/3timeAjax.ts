export const thirdTimeAjax = async () => {
  const p1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(1)
        resolve('p1')
      }, 1000)
    })
  }
  const p2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2)
        resolve('p2')
      }, 5000)
    })
  }
  const p3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(3)
        resolve('p3')
      }, 1000)
    })
  }
  const r1 = await p1()
  const r2 = await p2()
  const r3 = await p3()

  console.log(r1, r2, r3)
}
