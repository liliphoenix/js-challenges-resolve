// 使用callback和await也可以的

export const trafficLight = async () => {
  const red = () => {
    console.log('red')
  }
  const green = () => {
    console.log('green')
  }
  const yellow = () => {
    console.log('yellow')
  }
  const task = (color: any, time: any) => {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        if (color == 'red') {
          red()
        } else if (color == 'green') {
          green()
        } else {
          yellow()
        }
        resolve()
      }, time)
    })
  }
  const run = () => {
    task('red', 200).then(() => {
      task('yellow', 200).then(() => {
        task('green', 200).then(run)
      })
    })
  }
  run()
}
