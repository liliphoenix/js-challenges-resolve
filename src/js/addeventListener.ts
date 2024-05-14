export const myAddEvent = (element: any, type: any, fn: any, selector: any) => {
  if (!selector) {
    element.addeventListener(type, fn)
    return
  }
  element.addeventListener(type, function (event: any) {
    let targets: any = Array.from(element.querySelectorAll(selector))
    if (targets.includes(event.target)) {
      fn.call(event.target, event)
    }
  })
}
