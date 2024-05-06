export const logTime = () => {
  const task = () => {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        console.log(new Date())
        resolve()
      }, 3000)
    }).then(() => {
      task()
    })
  }
  task()
}
