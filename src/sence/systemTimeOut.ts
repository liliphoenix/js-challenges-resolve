export function timer(myfun: any, speed: any) {
  var counter: number = 1
  let start = new Date().getTime()

  function instance() {
    let real = speed * counter
    let timeNow = new Date().getTime() - start
    counter++
    let diff = timeNow - real
    setTimeout(() => {
      instance()
    }, speed - diff)
  }
  setTimeout(function () {
    instance()
  }, speed)
}
