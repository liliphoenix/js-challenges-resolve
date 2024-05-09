export const myDefineProperty = () => {
  const observe = (target: any) => {
    if (typeof target !== 'object' || target === null) return target
    if (Array.isArray(target)) {
      let arrPrototype = Array.prototype
      const arrProto = Object.create(arrPrototype)
      target.forEach((method) => {
        arrProto[method] = function () {
          arrPrototype[method].call(this, ...arguments)
        }
      })
      //   target.__proto__ = arrProto
    }
    for (let key in target) {
      defineProperty(target, key, target[key])
    }
  }
  const defineProperty = (target: any, key: any, value: any) => {
    Object.defineProperty(target, key, {
      get() {
        return value
      },
      set(newValue: any) {
        update(newValue, value)
        target[key] = newValue
        observe(newValue)
      }
    })
  }
  const update = (newVal: any, oldVal: any) => {
    console.log(newVal, oldVal)
  }
}
