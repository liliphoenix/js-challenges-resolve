export const isCycleObject = () => {
  const obj: any = { a: { b: null } }
  obj.a.b = obj.a
  const seenObject = new WeakSet()
  const deleteFun = (obj1: any) => {
    if (typeof obj1 === 'object') {
      if (seenObject.has(obj1)) {
        return true
      }
      seenObject.add(obj1)
      for (let key in obj1) {
        if (deleteFun(obj1[key])) return true
      }
    }
    return false
  }
  console.log(deleteFun({}))
}
